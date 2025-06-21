import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [vendor, setVendor] = useState("Cisco");
  const [intent, setIntent] = useState("");
  const [config, setConfig] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleAnalyze = async () => {
    if (!file) return alert("Please upload a log file first.");
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setDiagnosis(data.diagnosis);
  };

  const handleGenerate = async () => {
    if (!intent.trim()) return alert("Please enter a config intent.");
    const formData = new FormData();
    formData.append("vendor", vendor);
    formData.append("intent", intent);

    const res = await fetch("http://localhost:8000/generate-config", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setConfig(data.config);
  };

  return (
    <div className="App">
      <h1>🧠 NetSageAI</h1>

      <section>
        <h2>📄 Diagnose Network Logs</h2>
        <input type="file" accept=".txt" onChange={handleFileChange} />
        <button onClick={handleAnalyze}>Analyze Log</button>
        {diagnosis && (
          <pre className="result">
            <strong>Diagnosis:</strong>
            <br />
            {diagnosis}
          </pre>
        )}
      </section>

      <hr />

      <section>
        <h2>⚙️ Generate Configuration</h2>
        <label>
          Vendor:
          <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
            <option value="Cisco">Cisco</option>
            <option value="Juniper">Juniper</option>
            <option value="Arista">Arista</option>
          </select>
        </label>
        <br />
        <textarea
          placeholder="Describe what you want to configure..."
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
        />
        <br />
        <button onClick={handleGenerate}>Generate Config</button>
        {config && (
          <pre className="result">
            <strong>Generated Config:</strong>
            <br />
            {config}
          </pre>
        )}
      </section>
    </div>
  );
}

export default App;
