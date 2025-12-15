useEffect(() => {
  const script = document.createElement("script");
  script.src = "/ai-bridge.js";
  script.async = true;
  document.body.appendChild(script);

  return () => document.body.removeChild(script);
}, []);
