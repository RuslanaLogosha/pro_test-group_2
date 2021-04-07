import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader 
    speed={1.5}
    width={900}
    height={500}
    viewBox="0 0 300 350"
    primaryColor="#e6e6e6"
    secondaryColor="#c2c2c2"
    >
        <rect x="75" y="116" rx="4" ry="4" width="105" height="30" />

        <rect x="75" y="171" rx="0" ry="0" width="240" height="13" />
        <rect x="75" y="199" rx="0" ry="0" width="305" height="13" />
        <rect x="75" y="227" rx="0" ry="0" width="295" height="13" />
        <rect x="75" y="255" rx="0" ry="0" width="300" height="13" />
        <rect x="75" y="283" rx="0" ry="0" width="225" height="13" />
        
        <rect x="455" y="40" rx="0" ry="0" width="375" height="395" />
  </ContentLoader>
)

export default Skeleton;