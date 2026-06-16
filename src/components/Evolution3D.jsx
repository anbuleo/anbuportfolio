import React, { useRef, useMemo, Component, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center, Float, Stars, Sparkles, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollData = { offset: 0 };

class WebGLBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">WebGL Context Blocked</h2>
          <p className="text-foreground-muted max-w-lg mb-6 leading-relaxed">
            Please close other heavy 3D tabs and refresh the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- CUSTOM 3D STACK ICONS ---
const ReactIcon = ({ position, rotation }) => (
  <group position={position} rotation={rotation} scale={0.8}>
    <mesh>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshBasicMaterial color="#61DAFB" />
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.5, 0.03, 16, 64]} />
      <meshBasicMaterial color="#61DAFB" />
    </mesh>
    <mesh rotation={[Math.PI / 2, Math.PI / 3, 0]}>
      <torusGeometry args={[0.5, 0.03, 16, 64]} />
      <meshBasicMaterial color="#61DAFB" />
    </mesh>
    <mesh rotation={[Math.PI / 2, -Math.PI / 3, 0]}>
      <torusGeometry args={[0.5, 0.03, 16, 64]} />
      <meshBasicMaterial color="#61DAFB" />
    </mesh>
  </group>
);

const NodeIcon = ({ position, rotation }) => (
  <group position={position} rotation={rotation} scale={0.8}>
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.6, 0.6, 0.2, 6]} />
      <meshBasicMaterial color="#339933" />
    </mesh>
    <React.Suspense fallback={null}>
      {/* Front */}
      <Text position={[0, 0, 0.11]} fontSize={0.3} color="#ffffff" fontWeight="bold" anchorX="center" anchorY="middle">
        Node
      </Text>
      {/* Back (fixes mirroring when rotating) */}
      <Text position={[0, 0, -0.11]} rotation={[0, Math.PI, 0]} fontSize={0.3} color="#ffffff" fontWeight="bold" anchorX="center" anchorY="middle">
        Node
      </Text>
    </React.Suspense>
  </group>
);

const MongoIcon = ({ position, rotation }) => (
  <group position={position} rotation={rotation} scale={0.8}>
    <mesh position={[0, 0.15, 0]}>
      <coneGeometry args={[0.3, 0.7, 32]} />
      <meshBasicMaterial color="#47A248" />
    </mesh>
    <mesh position={[0, -0.2, 0]}>
      <sphereGeometry args={[0.3, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
      <meshBasicMaterial color="#47A248" />
    </mesh>
  </group>
);

const JsIcon = ({ position, rotation }) => (
  <group position={position} rotation={rotation} scale={0.8}>
    <mesh>
      <boxGeometry args={[0.8, 0.8, 0.2]} />
      <meshBasicMaterial color="#F7DF1E" />
    </mesh>
    <React.Suspense fallback={null}>
      {/* Front */}
      <Text position={[0, 0, 0.11]} fontSize={0.5} color="#000000" fontWeight="bold" anchorX="center" anchorY="middle">
        JS
      </Text>
      {/* Back (fixes mirroring when rotating) */}
      <Text position={[0, 0, -0.11]} rotation={[0, Math.PI, 0]} fontSize={0.5} color="#000000" fontWeight="bold" anchorX="center" anchorY="middle">
        JS
      </Text>
    </React.Suspense>
  </group>
);

const EvolutionScene = () => {
  const laptopGroup = useRef();
  const spheresGroup = useRef();
  const microservicesGroup = useRef();
  const cloudGroup = useRef();
  const databaseGroup = useRef();
  const aiGroup = useRef();
  const particlesRef = useRef();
  
  const textMats = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  const textX = isMobile ? 0 : -viewport.width / 4;
  const objX = isMobile ? 0 : viewport.width / 4;

  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    const mapped = ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    return THREE.MathUtils.clamp(mapped, outMin, outMax);
  };

  const spheres = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      return {
        position: [Math.cos(angle) * 3.2, Math.sin(angle) * 3.2, Math.cos(angle * 3) * 1.5],
        color: ['#F97316', '#3B82F6', '#10B981', '#8B5CF6', '#FBBF24', '#EC4899'][i]
      };
    });
  }, []);

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.1);
    const o = scrollData.offset; 
    
    const r1 = mapRange(o, 0, 1/6, 0, 1); 
    const r2 = mapRange(o, 1/6, 2/6, 0, 1); 
    const r3 = mapRange(o, 2/6, 3/6, 0, 1); 
    const r4 = mapRange(o, 3/6, 4/6, 0, 1); 
    const r5 = mapRange(o, 4/6, 5/6, 0, 1); 

    const opacities = [
      1 - r1,
      r1 * (1 - r2),
      r2 * (1 - r3),
      r3 * (1 - r4),
      r4 * (1 - r5),
      r5
    ];

    textMats.forEach((matRef, i) => {
      if (matRef.current) {
        matRef.current.opacity = THREE.MathUtils.lerp(matRef.current.opacity, opacities[i], 0.1);
      }
    });

    // SCENE 1: Laptop
    if (laptopGroup.current) {
      laptopGroup.current.position.y = THREE.MathUtils.lerp(0, 10, r1);
      laptopGroup.current.position.x = THREE.MathUtils.lerp(objX, objX - 2, r1);
      laptopGroup.current.position.z = THREE.MathUtils.lerp(1, 4, r1); 
      laptopGroup.current.rotation.x = THREE.MathUtils.lerp(0.1, Math.PI / 2, r1);
      laptopGroup.current.rotation.y -= d * 0.15; // Re-added the slow 360 showcase spin!
      laptopGroup.current.scale.setScalar(THREE.MathUtils.lerp(1, 0, r1));
    }

    // SCENE 2: Spheres
    if (spheresGroup.current) {
      spheresGroup.current.position.y = THREE.MathUtils.lerp(-10, 0, r1) + THREE.MathUtils.lerp(0, 10, r2);
      spheresGroup.current.position.x = objX;
      spheresGroup.current.position.z = Math.sin(o * Math.PI * 4) * 2; 
      spheresGroup.current.scale.setScalar(THREE.MathUtils.lerp(0, 1, r1) - THREE.MathUtils.lerp(0, 1, r2));
      spheresGroup.current.rotation.y += d * 0.5;
      spheresGroup.current.rotation.z += d * 0.2;
    }

    // SCENE 3: Microservices
    if (microservicesGroup.current) {
      microservicesGroup.current.position.y = THREE.MathUtils.lerp(-10, 0, r2) + THREE.MathUtils.lerp(0, 10, r3);
      microservicesGroup.current.position.x = 0;
      microservicesGroup.current.position.z = THREE.MathUtils.lerp(-5, 0, r3);
      microservicesGroup.current.scale.setScalar(THREE.MathUtils.lerp(0, 1, r2) - THREE.MathUtils.lerp(0, 1, r3));
      microservicesGroup.current.rotation.x += d * 0.1;
      microservicesGroup.current.rotation.y += d * 0.15;
    }

    // SCENE 3: Cloud
    if (cloudGroup.current) {
      cloudGroup.current.position.y = THREE.MathUtils.lerp(-10, 0, r3) + THREE.MathUtils.lerp(0, 10, r4);
      cloudGroup.current.position.x = objX;
      cloudGroup.current.scale.setScalar(THREE.MathUtils.lerp(0, 1, r3) - THREE.MathUtils.lerp(0, 1, r4));
      cloudGroup.current.rotation.y += d * 0.15; // Re-added the slow cinematic pan of the server farm!
    }

    // SCENE 4: Database
    if (databaseGroup.current) {
      databaseGroup.current.position.y = THREE.MathUtils.lerp(-10, 0, r4) + THREE.MathUtils.lerp(0, 10, r5);
      databaseGroup.current.position.x = objX;
      databaseGroup.current.scale.setScalar(THREE.MathUtils.lerp(0, 1, r4) - THREE.MathUtils.lerp(0, 1, r5));
      databaseGroup.current.rotation.y -= d * 0.3; // Give it a nice constant rotation
    }

    // SCENE 5: AI (Final Scene, stays centered)
    if (aiGroup.current) {
      aiGroup.current.position.y = THREE.MathUtils.lerp(-10, 0, r5);
      aiGroup.current.position.x = THREE.MathUtils.lerp(objX, 0, r5);
      aiGroup.current.position.z = THREE.MathUtils.lerp(0, -2, r5); 
      aiGroup.current.scale.setScalar(THREE.MathUtils.lerp(0, 1, r5));
      aiGroup.current.rotation.y -= d * 0.2;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += d * 0.05;
      particlesRef.current.position.y = -o * 5; 
    }
  });

  const titles = [
    "Developer\nBegins",
    "Full Stack\nMaster",
    "Scalable\nArchitecture",
    "Cloud\nInfrastructure",
    "AI\nOrchestration",
    "Innovation\nAwakens"
  ];

  return (
    <>
      <color attach="background" args={['#030303']} />
      <fog attach="fog" args={['#030303', 5, 20]} />
      
      {/* BLENDER-STYLE STUDIO LIGHTING (No external HDRI downloads) */}
      <ambientLight intensity={1.0} color="#ffffff" />
      <directionalLight position={[-10, 0, -5]} intensity={2.0} color="#3B82F6" /> {/* Blue Fill */}
      <directionalLight position={[0, 10, -10]} intensity={2.5} color="#F97316" /> {/* Orange Rim */}
      <directionalLight position={[0, -10, -10]} intensity={1.5} color="#60A5FA" /> {/* Bottom Backlight for Separation */}
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={3} castShadow shadow-mapSize={[1024, 1024]} /> {/* Key Light */}

      <React.Suspense fallback={null}>
        <group position={[textX, isMobile ? 3 : 0, 0]}>
          {[
            "The Journey Begins", "Frontend Mastery", "Backend Architecture", 
            "Cloud & DevOps", "Database Engineering", "AI Integration"
          ].map((title, i) => (
            <Text
              key={i}
              position={[0, 0, 0]}
              fontSize={isMobile ? 0.8 : 1.2}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
              fontWeight={800}
              anchorX={isMobile ? "center" : "left"}
              anchorY="middle"
              letterSpacing={-0.05}
              renderOrder={10}
            >
              {title}
              <meshBasicMaterial ref={textMats[i]} transparent opacity={0} color="#ffffff" toneMapped={false} />
            </Text>
          ))}
        </group>
      </React.Suspense>

      <group ref={particlesRef}>
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={1} fade speed={1} />
        <Sparkles count={150} scale={15} size={3} speed={0.4} opacity={0.4} color="#FB923C" />
      </group>

      <group ref={laptopGroup}>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
          {/* Base Chassis (Ultra-thin Aluminum) */}
          <RoundedBox args={[4.2, 0.08, 3.0]} radius={0.02} smoothness={4} position={[0, -0.04, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
          </RoundedBox>
          
          {/* Keyboard Indent (Dark Anodized) */}
          <mesh position={[0, 0.001, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.8, 1.4]} />
            <meshStandardMaterial color="#0f172a" metalness={0.2} roughness={0.8} />
          </mesh>

          {/* Actual Keyboard Keys (Flat Black) */}
          <group position={[0, 0.005, 0.6]}>
            {Array.from({ length: 5 }).map((_, row) => 
              Array.from({ length: 16 }).map((_, col) => {
                if (row === 4 && col > 4 && col < 11) return null; // Skip spacebar area
                return (
                  <mesh key={`${row}-${col}`} position={[(col - 7.5) * 0.23, 0, (row - 2) * 0.23]}>
                    <boxGeometry args={[0.2, 0.01, 0.2]} />
                    <meshStandardMaterial color="#020617" metalness={0.1} roughness={0.9} />
                  </mesh>
                );
              })
            )}
            {/* Spacebar */}
            <mesh position={[0, 0, 0.46]}>
              <boxGeometry args={[1.35, 0.01, 0.2]} />
              <meshStandardMaterial color="#020617" metalness={0.1} roughness={0.9} />
            </mesh>
          </group>

          {/* Giant Force Touch Trackpad */}
          <mesh position={[0, 0.001, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
             <planeGeometry args={[1.6, 0.9]} />
             <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
          </mesh>
          
          {/* Screen Assembly */}
          <group position={[0, 0, -1.5]} rotation={[-0.1, 0, 0]}>
            {/* Screen Lid (Ultra-thin Aluminum) */}
            <RoundedBox args={[4.2, 2.8, 0.06]} radius={0.02} smoothness={4} position={[0, 1.4, -0.03]} castShadow>
              <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.2} />
            </RoundedBox>

            {/* Clean White Glowing Logo on the back */}
            <mesh position={[0, 1.4, -0.061]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.25, 0.25, 0.002, 32]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
            </mesh>

            {/* Display Black Glossy Bezel */}
            <mesh position={[0, 1.4, 0.001]}>
              <planeGeometry args={[4.1, 2.7]} />
              <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Glowing Screen Content */}
            <group position={[0, 1.4, 0.002]}>
              {/* Screen Display Panel */}
              <mesh>
                <planeGeometry args={[4.0, 2.6]} />
                <meshBasicMaterial color="#020617" />
              </mesh>

              <React.Suspense fallback={null}>
                {/* Code Text lines */}
                <Text position={[-1.8, 1.1, 0]} fontSize={0.09} color="#34D399" anchorX="left" anchorY="top" lineHeight={1.3}>
                  {`import { useState, useEffect } from 'react';\n\nexport default function AI_Matrix() {\n  const [reality, setReality] = useState('simulated');\n\n  useEffect(() => {\n    const matrix = new WebGL.Universe();\n    matrix.on('collapse', () => {\n      setReality('awakened');\n      System.hack(globalThis);\n    });\n    return () => matrix.destroy();\n  }, []);\n\n  return <Canvas render={reality} />;\n}`}
                </Text>
                
                {/* Large Center Title */}
                <Text position={[0, -1.0, 0]} fontSize={0.25} color="#ffffff" anchorX="center" anchorY="bottom" fontWeight="bold">
                  DEVELOPER AWAKENS
                </Text>
              </React.Suspense>

              {/* Scanning Laser Line */}
              <mesh position={[0, 0, 0.01]}>
                <planeGeometry args={[3.8, 0.02]} />
                <meshBasicMaterial color="#10B981" />
              </mesh>
            </group>
          </group>
        </Float>
      </group>

      <group ref={spheresGroup} scale={0}>
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          {/* Central Core */}
          <mesh>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.5} wireframe />
          </mesh>
          <mesh>
            <icosahedronGeometry args={[1.0, 0]} />
            <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.5} />
          </mesh>

          {/* Orbital Rings */}
          {[0, 1, 2].map((i) => (
            <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 3]}>
              <torusGeometry args={[3.2, 0.015, 16, 100]} />
              <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={2} />
            </mesh>
          ))}

          {/* Orbiting Component Nodes */}
          {spheres.map((s, i) => (
            <group key={i} position={s.position}>
              <mesh>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={0.5} wireframe transparent opacity={0.4} />
              </mesh>
              <mesh>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshBasicMaterial color={s.color} />
              </mesh>
            </group>
          ))}
        </Float>
        <Sparkles count={150} scale={10} size={3} speed={1} color="#60A5FA" opacity={0.6} />
      </group>

      <group ref={microservicesGroup} scale={0}>
        <ReactIcon position={[-2.5, 1, 0]} rotation={[0, 0.5, 0]} />
        <NodeIcon position={[2.5, 1.5, -1]} rotation={[0.4, -0.2, 0]} />
        <MongoIcon position={[-1.5, -2, 1]} rotation={[-0.2, 0.3, 0.1]} />
        <JsIcon position={[2, -1.5, 0]} rotation={[0.1, -0.4, -0.1]} />
        
        {/* Abstract Data Cubes Flowing */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6]} castShadow scale={0.3}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color="#3B82F6" metalness={0.8} roughness={0.2} clearcoat={1} transparent opacity={0.6} />
          </mesh>
        ))}
      </group>

      <group ref={cloudGroup} scale={0}>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          {/* Cloud Server Farm (V-Formation) */}
          {Array.from({ length: 5 }).map((_, i) => {
            const isCenter = i === 2;
            const xOffset = (i - 2) * 2.5;
            const zOffset = Math.abs(i - 2) * -1.8; // V-formation depth
            const height = isCenter ? 6 : 4.5;
            
            return (
              <group key={i} position={[xOffset, 0, zOffset]}>
                {/* Main Server Chassis */}
                <RoundedBox args={[1.6, height, 1.6]} radius={0.1} smoothness={4} castShadow>
                  <meshPhysicalMaterial color="#1e293b" metalness={0.7} roughness={0.3} clearcoat={1} />
                </RoundedBox>
                
                {/* Server Blades / Hardware Slots */}
                {Array.from({ length: isCenter ? 8 : 6 }).map((_, j) => (
                  <group key={j} position={[0, (j - (isCenter ? 3.5 : 2.5)) * 0.7, 0.81]}>
                    <mesh>
                      <planeGeometry args={[1.4, 0.15]} />
                      <meshBasicMaterial color="#334155" />
                    </mesh>
                    {/* Activity LED */}
                    <mesh position={[-0.55, 0, 0.01]}>
                      <circleGeometry args={[0.04, 16]} />
                      <meshStandardMaterial 
                        color={j % 2 === 0 ? "#10B981" : "#3B82F6"} 
                        emissive={j % 2 === 0 ? "#10B981" : "#3B82F6"} 
                        emissiveIntensity={3} 
                      />
                    </mesh>
                    {/* Fiber Optic Data Line */}
                    <mesh position={[-0.1, 0, 0.01]}>
                      <planeGeometry args={[0.6, 0.02]} />
                      <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={2} />
                    </mesh>
                  </group>
                ))}
                
                {/* Base Holographic Ring */}
                <mesh position={[0, -height / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                  <torusGeometry args={[1.2, 0.04, 16, 64]} />
                  <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={2} />
                </mesh>
              </group>
            );
          })}
          
          {/* Network Data Particles */}
          <Sparkles count={150} scale={[12, 8, 12]} size={3} speed={2} opacity={0.6} color="#8B5CF6" />
          <Sparkles count={50} scale={[12, 8, 12]} size={5} speed={1} opacity={0.8} color="#3B82F6" />
        </Float>
      </group>

      <group ref={databaseGroup} scale={0}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {[0, 1, 2].map((i) => (
            <group key={i} position={[0, i * 1.5 - 1.5, 0]}>
              {/* Outer Glass Shell */}
              <mesh castShadow>
                <cylinderGeometry args={[1.6, 1.6, 1.2, 32]} />
                <meshPhysicalMaterial color="#3B82F6" metalness={0.9} roughness={0.1} clearcoat={1} transparent opacity={0.3} side={THREE.DoubleSide} />
              </mesh>
              
              {/* Inner Glowing Holographic Core */}
              <mesh>
                <cylinderGeometry args={[1.0, 1.0, 1.2, 32]} />
                <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={1.5} wireframe />
              </mesh>

              {/* Top Data Ring */}
              <mesh position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.6, 0.03, 16, 64]} />
                <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={2} />
              </mesh>
              
              {/* Bottom Data Ring */}
              <mesh position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.6, 0.03, 16, 64]} />
                <meshStandardMaterial color="#FBBF24" emissive="#FBBF24" emissiveIntensity={2} />
              </mesh>
            </group>
          ))}
          {/* Data Stream Particles */}
          <Sparkles count={80} scale={5} size={3} speed={1.5} opacity={0.8} color="#60A5FA" />
        </Float>
      </group>

      <group ref={aiGroup} scale={0}>
        <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
          {/* Outer Energy Sphere */}
          <mesh>
            <sphereGeometry args={[2.6, 32, 32]} />
            <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.5} wireframe transparent opacity={0.3} />
          </mesh>
          {/* Inner Processing Core */}
          <mesh>
            <icosahedronGeometry args={[1.5, 2]} />
            <meshBasicMaterial color="#10B981" wireframe />
          </mesh>
          {/* Solid Center */}
          <mesh>
            <sphereGeometry args={[1.0, 32, 32]} />
            <meshStandardMaterial color="#064e3b" />
          </mesh>
          {/* Energy Rings */}
          {[0, 1].map((i) => (
            <mesh key={i} rotation={[Math.PI / 2, i * Math.PI / 2, 0]}>
              <torusGeometry args={[3, 0.02, 16, 100]} />
              <meshStandardMaterial color="#34D399" emissive="#34D399" emissiveIntensity={2} />
            </mesh>
          ))}
        </Float>
        <Sparkles count={200} scale={8} size={4} speed={2} color="#10B981" opacity={0.8} />
      </group>
    </>
  );
};

export default function Evolution3D() {
  const containerRef = useRef(null);
  const [stage, setStage] = useState(0);

  const sections = [
    { 
      title: "The Journey Begins", 
      desc: "Starting with a deep dive into core logic and pixel-perfect UI. Building the foundation of seamless digital experiences.",
      skills: ["HTML/CSS", "JavaScript", "UI/UX", "Responsive Design"]
    },
    { 
      title: "Frontend Mastery", 
      desc: "Crafting highly interactive and performant web applications using modern component-based architectures.",
      skills: ["React", "Vue", "TailwindCSS", "Framer Motion"]
    },
    { 
      title: "Backend Architecture", 
      desc: "Designing scalable microservices, secure authentication, and robust RESTful APIs to power complex applications.",
      skills: ["Node.js", "Express", "Python", "GraphQL"]
    },
    { 
      title: "Cloud & DevOps", 
      desc: "Deploying highly available infrastructure. Automating CI/CD pipelines to deliver features faster and safer.",
      skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
    },
    { 
      title: "Database Engineering", 
      desc: "Architecting flexible NoSQL document stores and relational schemas optimized for high-throughput data.",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma"]
    },
    { 
      title: "AI Integration", 
      desc: "Pushing boundaries with spatial computing, 3D WebGL, and generative AI to create next-generation applications.",
      skills: ["Three.js", "OpenAI", "Agentic Workflows", "WebXR"]
    }
  ];

  useGSAP(() => {
    gsap.to(scrollData, {
      offset: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%", // 500vh of scroll distance
        scrub: 1, 
        pin: true, // Native GSAP pinning guarantees it never gets cut off
        onUpdate: (self) => {
          const o = self.progress;
          let newStage = 0;
          if (o < 0.16) newStage = 0;
          else if (o < 0.33) newStage = 1;
          else if (o < 0.50) newStage = 2;
          else if (o < 0.66) newStage = 3;
          else if (o < 0.83) newStage = 4;
          else newStage = 5;
          
          setStage((prev) => prev !== newStage ? newStage : prev);
        }
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#030303] overflow-hidden font-sans">
      
      {/* HTML Content Overlay (Glassmorphism Cards) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start pl-6 md:pl-20 lg:pl-32 pr-6 pointer-events-none">
        <div className="relative w-full max-w-xl md:max-w-2xl h-[400px]">
          {sections.map((section, i) => (
            <div 
              key={i}
              className={`absolute top-0 left-0 w-full bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl transition-all duration-1000 ease-out transform ${
                stage === i ? 'opacity-100 translate-y-0 pointer-events-auto blur-none' : 'opacity-0 translate-y-16 pointer-events-none blur-sm'
              }`}
            >
              <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 tracking-tight">
                {section.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
                {section.desc}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {section.skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-black/40 text-blue-300 rounded-full text-xs md:text-sm font-semibold border border-white/5 backdrop-blur-md shadow-inner">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WebGLBoundary>
        <Canvas 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
            camera={{ position: [0, 0, 8], fov: 45 }} 
            dpr={[1, 1.5]} 
            shadows
          >
            <EvolutionScene />
          </Canvas>
      </WebGLBoundary>
    </section>
  );
}
