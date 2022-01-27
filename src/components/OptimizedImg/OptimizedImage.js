import React , {useRef , useState , useLayoutEffect} from "react"

function OptimizedImage(props) {
  
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  
    useLayoutEffect(() => {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth
        });
      }
    }, []);
  
    return (
      <div ref={targetRef}>
        <img
          width={dimensions.width}
          src={props.src + "?width=" +dimensions.width}
          alt={props.alt}
          className={props.className}
        />
      </div>
    );
  }
  
  export default OptimizedImage;