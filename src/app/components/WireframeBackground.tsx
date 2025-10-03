'use client';

import { useEffect, useRef } from 'react';

interface Node {
  element: HTMLDivElement;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
}

interface Connection {
  element: HTMLDivElement;
  node1: Node;
  node2: Node;
}

interface WireframeBackgroundProps {
  nodeCount?: number;
  containerId?: string;
}

export default function WireframeBackground({
  nodeCount = 25,
  containerId = 'cta-footer-wireframe'
}: WireframeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';
    nodesRef.current = [];
    connectionsRef.current = [];

    // Create nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.className = 'cta-wireframe-node floating-node';
      node.style.position = 'absolute';
      node.style.width = '6px';
      node.style.height = '6px';
      node.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
      node.style.borderRadius = '50%';
      node.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
      node.style.transition = 'all 0.5s ease';

      // Add floating animation with different delays
      const animationDelay = (i % 4) * -2; // -0s, -2s, -4s, -6s
      node.style.animation = `floatNode 8s ease-in-out infinite ${animationDelay}s`;

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      node.style.left = `${x}%`;
      node.style.top = `${y}%`;

      container.appendChild(node);

      const nodeObj: Node = {
        element: node,
        x,
        y,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2
      };

      nodes.push(nodeObj);
    }

    nodesRef.current = nodes;

    // Create connections between nearby nodes
    const connections: Connection[] = [];
    nodes.forEach((node, index) => {
      nodes.forEach((otherNode, otherIndex) => {
        if (index >= otherIndex) return; // Avoid duplicate connections

        const distance = Math.sqrt(
          Math.pow(node.x - otherNode.x, 2) +
          Math.pow(node.y - otherNode.y, 2)
        );

        // Connect nodes that are close enough
        if (distance < 40) {
          const connection = document.createElement('div');
          connection.className = 'cta-wireframe-connection';
          connection.style.position = 'absolute';
          connection.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
          connection.style.transformOrigin = '0 0';
          connection.style.transition = 'all 0.5s ease';

          // Calculate connection properties
          const length = distance;
          const angle = Math.atan2(otherNode.y - node.y, otherNode.x - node.x) * 180 / Math.PI;

          connection.style.width = `${length}%`;
          connection.style.height = '1px';
          connection.style.left = `${node.x}%`;
          connection.style.top = `${node.y}%`;
          connection.style.transform = `rotate(${angle}deg)`;

          container.appendChild(connection);
          connections.push({
            element: connection,
            node1: node,
            node2: otherNode
          });
        }
      });
    });

    connectionsRef.current = connections;

    // Animation function
    function animateWireframe() {
      nodesRef.current.forEach(node => {
        // Update position
        node.x += node.speedX;
        node.y += node.speedY;

        // Bounce off edges
        if (node.x <= 0 || node.x >= 100) node.speedX *= -1;
        if (node.y <= 0 || node.y >= 100) node.speedY *= -1;

        // Apply new position
        node.element.style.left = `${node.x}%`;
        node.element.style.top = `${node.y}%`;
      });

      // Update connections
      connectionsRef.current.forEach(connection => {
        const node1 = connection.node1;
        const node2 = connection.node2;

        const distance = Math.sqrt(
          Math.pow(node1.x - node2.x, 2) +
          Math.pow(node1.y - node2.y, 2)
        );

        if (distance < 40) {
          const length = distance;
          const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;

          connection.element.style.width = `${length}%`;
          connection.element.style.left = `${node1.x}%`;
          connection.element.style.top = `${node1.y}%`;
          connection.element.style.transform = `rotate(${angle}deg)`;
          connection.element.style.opacity = '0.3';
        } else {
          connection.element.style.opacity = '0';
        }
      });

      animationFrameRef.current = requestAnimationFrame(animateWireframe);
    }

    // Start animation
    animateWireframe();

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [nodeCount]);

  return (
    <div
      ref={containerRef}
      id={containerId}
      className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      style={{
        // Add the keyframe animation styles directly to the component
      }}
    />
  );
}