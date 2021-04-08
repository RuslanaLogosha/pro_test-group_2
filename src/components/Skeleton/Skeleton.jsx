import ContentLoader from "react-content-loader";

const DesktopSkeleton = () => {
  return <ContentLoader 
    speed={1.5}
    width={900}
    height={520}
    viewBox="0 0 300 350"
    primaryColor="#e6e6e6"
    secondaryColor="#c2c2c2"
    >
        <rect x="325" y="90" rx="0" ry="0" width="250" height="17" />
        <rect x="240" y="117" rx="0" ry="0" width="420" height="17" />
        <rect x="423" y="144" rx="0" ry="0" width="55" height="17" />
    
        <rect x="340" y="190" rx="0" ry="0" width="220" height="1" />
    
        <rect x="410" y="205" rx="0" ry="0" width="85" height="16" />
        <rect x="370" y="230" rx="0" ry="0" width="165" height="10" />
        
        <rect x="163" y="308" rx="0" ry="0" width="280" height="140" />
        <rect x="460" y="308" rx="0" ry="0" width="280" height="140" />
    </ContentLoader>
}

const TabletSkeleton = () => {
  return <ContentLoader 
    speed={1.5}
    width={900}
    height={1150}
    viewBox="0 0 300 350"
    primaryColor="#e6e6e6"
    secondaryColor="#c2c2c2"
    >
        <rect x="230" y="150" rx="0" ry="0" width="440" height="25" />
        <rect x="90" y="190" rx="0" ry="0" width="730" height="25" />
        <rect x="405" y="230" rx="0" ry="0" width="95" height="25" />
    
        <rect x="260" y="300" rx="0" ry="0" width="380" height="1" />
    
        <rect x="375" y="330" rx="0" ry="0" width="155" height="18" />
        <rect x="315" y="370" rx="0" ry="0" width="285" height="12" />
        
        <rect x="215" y="490" rx="0" ry="0" width="475" height="250" />
        <rect x="215" y="770" rx="0" ry="0" width="475" height="250" />
    </ContentLoader>
}

const MobileSkeleton = () => {
  return <ContentLoader 
    speed={1.5}
    width={900}
    height={1910}
    viewBox="0 0 300 350"
    primaryColor="#e6e6e6"
    secondaryColor="#c2c2c2"
    >
        <rect x="175" y="110" rx="0" ry="0" width="575" height="32" />
        <rect x="90" y="158" rx="0" ry="0" width="730" height="32" />
        <rect x="280" y="206" rx="0" ry="0" width="350" height="32" />
    
        <rect x="260" y="308" rx="0" ry="0" width="380" height="1" />
    
        <rect x="330" y="343" rx="0" ry="0" width="245" height="20" />
        <rect x="205" y="385" rx="0" ry="0" width="500" height="15" />
        
        <rect x="70" y="560" rx="0" ry="0" width="760" height="600" />
        <rect x="70" y="1210" rx="0" ry="0" width="760" height="600" />
    </ContentLoader>
}

const Skeleton = () => {
  if (window.innerWidth < 768) {
    return MobileSkeleton();
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    return TabletSkeleton();
  }
  if (window.innerWidth >= 1280) {
    return DesktopSkeleton();
  }
}

export default Skeleton;