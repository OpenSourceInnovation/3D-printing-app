import stylecompanypage from 'styles/ThreedPage.module.css'
import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import style from 'styles/Home.module.css'
import Link from 'next/link';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.01} />
      </>
    );
  };

function CompanyModel() {
  return (<>
    <div className={stylecompanypage.maain}>
        <div className={stylecompanypage.sperater}>MarketPlace</div>
        <div>Aman</div>
        <div>Aman</div>
        <div className={stylecompanypage.name}>3d Earth</div>
      <div className={stylecompanypage.globe}>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
        </div>
    </div>
    <div className={stylecompanypage.details}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
    <div className={style.outer}>
        <ul >
          <Link className={style.cmploginbtn} href='/company'>Get Quotes</Link>
        </ul>
      </div>
    </>
  );
}    

export default CompanyModel;