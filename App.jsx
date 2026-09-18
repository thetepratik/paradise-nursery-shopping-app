import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
const navigate = useNavigate();

const handleGetStarted = () => {
navigate("/plants");
};

return ( <div className="landing-page"> <div className="landing-content"> <h1>Paradise Nursery</h1>

```
    <p>
      Welcome to Paradise Nursery, your online destination for beautiful
      and healthy houseplants. Explore our collection and bring the
      beauty of nature into your home.
    </p>

    <button
      className="get-started-btn"
      onClick={handleGetStarted}
    >
      Get Started
    </button>
  </div>
</div>
```

);
}

export default App;
