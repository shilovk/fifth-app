import React, { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms)
  }
}

const App = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, 1000);
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div>
      <h1>Fifth App</h1>
      <div>
        width: {dimensions.width} height: {dimensions.height}
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dimensions: {
//         width: window.innerWidth,
//         height: window.innerHeight
//       }
//     };
//
//     this.handleResize = debounce(this.handleResize.bind(this), 1000);
//   }
//
//   handleResize() {
//     this.setState({
//       dimensions: {
//         width: window.innerWidth,
//         height: window.innerHeight
//       }
//     });
//   }
//
//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize)
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize);
//   }
//
//   render() {
//     const { dimensions: { width, height } } = this.state;
//     return (
//       <div>
//         <h1>Fifth App</h1>
//         <div>
//           width: {width} height: {height}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
