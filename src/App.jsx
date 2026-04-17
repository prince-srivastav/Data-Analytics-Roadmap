import { useState } from "react";

const roadmap = [
  {
    phase: "Phase 1",
    duration: "Weeks 1–4",
    title: "Foundations",
    color: "#00C9A7",
    bg: "#00C9A710",
    icon: "🧱",
    tools: [
      {
        name: "Excel / Google Sheets",
        icon: "📊",
        why: "Every analyst uses spreadsheets daily. It's the universal starting point.",
        topics: [
          "Formulas: SUM, IF, VLOOKUP, INDEX/MATCH",
          "Pivot Tables & Charts",
          "Data Cleaning (remove duplicates, text functions)",
          "Conditional Formatting",
          "Basic dashboards",
        ],
        resources: [
          { label: "ExcelJet (free)", url: "https://exceljet.net" },
          { label: "Chandoo.org", url: "https://chandoo.org" },
          { label: "GFG Excel Tutorial", url: "https://www.geeksforgeeks.org/excel-tutorial/" },
        ],
        project: "Build a Sales Performance Dashboard in Excel with charts and KPIs",
        time: "~10 hrs/week",
      },
    ],
  },
  {
    phase: "Phase 2",
    duration: "Weeks 5–10",
    title: "SQL — The #1 Analyst Skill",
    color: "#FF6B6B",
    bg: "#FF6B6B10",
    icon: "🗄️",
    tools: [
      {
        name: "SQL (MySQL / PostgreSQL)",
        icon: "🗃️",
        why: "90% of Data Analyst job descriptions require SQL. Master this first.",
        topics: [
          "SELECT, WHERE, ORDER BY, GROUP BY",
          "JOINs: INNER, LEFT, RIGHT, FULL",
          "Subqueries & CTEs (WITH clause)",
          "Window Functions: ROW_NUMBER, RANK, LAG/LEAD",
          "Aggregations: COUNT, SUM, AVG, MIN, MAX",
          "NULL handling, CASE WHEN",
          "Database design basics",
        ],
        resources: [
          { label: "SQLZoo (interactive)", url: "https://sqlzoo.net" },
          { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial" },
          { label: "LeetCode SQL Problems", url: "https://leetcode.com/problemset/database/" },
        ],
        project: "Analyze an e-commerce database — find top products, revenue trends, customer behavior",
        time: "~12 hrs/week",
      },
    ],
  },
  {
    phase: "Phase 3",
    duration: "Weeks 11–16",
    title: "Data Visualization",
    color: "#FFB830",
    bg: "#FFB83010",
    icon: "📈",
    tools: [
      {
        name: "Power BI",
        icon: "⚡",
        why: "Most popular BI tool in India & globally. Huge demand in corporate jobs.",
        topics: [
          "Connecting data sources (Excel, SQL, CSV)",
          "Power Query for data transformation",
          "DAX formulas (CALCULATE, SUMX, RELATED)",
          "Creating visuals: bar, line, map, matrix",
          "Slicers, filters, drill-through",
          "Publishing reports to Power BI Service",
          "Row Level Security (RLS)",
        ],
        resources: [
          { label: "Microsoft Learn (Free)", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi" },
          { label: "Guy in a Cube (YouTube)", url: "https://www.youtube.com/@GuyInACube" },
          { label: "PBI Community", url: "https://community.fabric.microsoft.com" },
        ],
        project: "HR Analytics Dashboard — attrition rates, department KPIs, headcount trends",
        time: "~12 hrs/week",
      },
      {
        name: "Tableau",
        icon: "🔵",
        why: "Preferred in MNCs and data-heavy companies. Great for storytelling.",
        topics: [
          "Connecting & preparing data",
          "Dimensions vs Measures",
          "Calculated fields & LOD expressions",
          "Dashboards & Stories",
          "Maps and geographical analysis",
          "Tableau Public (free portfolio publishing)",
        ],
        resources: [
          { label: "Tableau Public (Free)", url: "https://public.tableau.com" },
          { label: "Tableau Training Videos", url: "https://www.tableau.com/learn/training" },
          { label: "Workout Wednesday", url: "https://www.workout-wednesday.com" },
        ],
        project: "COVID-19 / World Population Tableau story published to Tableau Public",
        time: "~8 hrs/week",
      },
    ],
  },
  {
    phase: "Phase 4",
    duration: "Weeks 17–22",
    title: "Python for Analytics",
    color: "#845EC2",
    bg: "#845EC210",
    icon: "🐍",
    tools: [
      {
        name: "Python (Pandas, NumPy, Matplotlib)",
        icon: "🐍",
        why: "Automate repetitive tasks, handle large datasets, and stand out from other analysts.",
        topics: [
          "Python basics: variables, loops, functions",
          "Pandas: DataFrames, groupby, merge, pivot",
          "NumPy: arrays and numerical operations",
          "Matplotlib & Seaborn for visualizations",
          "Data cleaning with Python",
          "Jupyter Notebooks",
          "Intro to statistics (mean, median, std dev, correlation)",
        ],
        resources: [
          { label: "Kaggle Python Course (Free)", url: "https://www.kaggle.com/learn/python" },
          { label: "Kaggle Pandas Course", url: "https://www.kaggle.com/learn/pandas" },
          { label: "Real Python", url: "https://realpython.com" },
        ],
        project: "EDA (Exploratory Data Analysis) on a Kaggle dataset — Titanic or Netflix shows",
        time: "~12 hrs/week",
      },
    ],
  },
  {
    phase: "Phase 5",
    duration: "Weeks 23–26",
    title: "Cloud & Project Management",
    color: "#0089CF",
    bg: "#0089CF10",
    icon: "☁️",
    tools: [
      {
        name: "Azure (Azure Data Fundamentals)",
        icon: "☁️",
        why: "Most companies are moving to cloud. Azure DP-900 cert is a great entry point.",
        topics: [
          "Azure fundamentals & core services",
          "Azure SQL Database",
          "Azure Data Factory (ETL basics)",
          "Power BI + Azure integration",
          "Azure Synapse Analytics basics",
          "DP-900 Certification prep",
        ],
        resources: [
          { label: "Microsoft Learn DP-900", url: "https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/" },
          { label: "Azure Free Account", url: "https://azure.microsoft.com/en-us/free" },
        ],
        project: "Set up an Azure SQL DB, load data, query it, and visualize in Power BI",
        time: "~8 hrs/week",
      },
      {
        name: "JIRA",
        icon: "🎯",
        why: "Used in Agile/Scrum teams. Analysts must track tasks, sprints and report on project health.",
        topics: [
          "Agile & Scrum basics",
          "Creating and managing issues/tickets",
          "Sprints, Epics, Story points",
          "JIRA Dashboards & Reporting",
          "JQL (JIRA Query Language) basics",
          "Kanban boards",
        ],
        resources: [
          { label: "Atlassian JIRA Guides (Free)", url: "https://www.atlassian.com/agile/tutorials" },
          { label: "JIRA Free Tier", url: "https://www.atlassian.com/software/jira/free" },
        ],
        project: "Create a sample project in JIRA, manage 2-week sprint, build a velocity dashboard",
        time: "~4 hrs/week",
      },
    ],
  },
];

const certifications = [
  { name: "Microsoft DP-900", tool: "Azure", level: "Beginner", cost: "~₹3,500", priority: "⭐⭐⭐⭐⭐" },
  { name: "PL-300 Power BI Analyst", tool: "Power BI", level: "Intermediate", cost: "~₹3,500", priority: "⭐⭐⭐⭐⭐" },
  { name: "Google Data Analytics", tool: "General", level: "Beginner", cost: "Free (Coursera audit)", priority: "⭐⭐⭐⭐" },
  { name: "Tableau Desktop Specialist", tool: "Tableau", level: "Beginner", cost: "~$250", priority: "⭐⭐⭐" },
];

const jobTips = [
  { tip: "Build 3–5 end-to-end projects with GitHub + Tableau Public links", icon: "🗂️" },
  { tip: "Add SQL, Power BI, Python, Excel to your LinkedIn skills section", icon: "💼" },
  { tip: "Write 2-3 LinkedIn posts about your projects to get recruiter attention", icon: "📢" },
  { tip: "Apply to Data Analyst, Business Analyst, and Reporting Analyst roles", icon: "🎯" },
  { tip: "Practice SQL daily on LeetCode / HackerRank for interview prep", icon: "💪" },
  { tip: "Prepare for case study interviews — business problem + data approach", icon: "🧠" },
];

export default function App() {
  const [activePhase, setActivePhase] = useState(null);
  const [activeTool, setActiveTool] = useState(null);

  const togglePhase = (i) => {
    setActivePhase(activePhase === i ? null : i);
    setActiveTool(null);
  };

  const toggleTool = (key) => {
    setActiveTool(activeTool === key ? null : key);
  };

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "linear-gradient(135deg, #0a0a0f 0%, #12121e 50%, #0a0f1a 100%)",
      minHeight: "100vh",
      color: "#e8e8f0",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(90deg, #00C9A7 0%, #0089CF 50%, #845EC2 100%)",
        padding: "3px 0 0 0",
      }}>
        <div style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121e 100%)",
          padding: "48px 24px 40px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "13px", letterSpacing: "4px", color: "#00C9A7", textTransform: "uppercase", marginBottom: "16px" }}>
            Complete Beginner → Job-Ready
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "900",
            margin: "0 0 12px",
            background: "linear-gradient(135deg, #ffffff, #00C9A7, #0089CF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}>
            Data Analytics<br />Learning Roadmap
          </h1>
          <p style={{ color: "#8888aa", fontSize: "16px", margin: "0 0 28px", lineHeight: 1.7 }}>
            6-month structured plan • SQL • Power BI • Python • Tableau • Azure • JIRA
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            {[["⏱️", "26 Weeks"], ["🛠️", "7 Tools"], ["🎯", "6 Projects"], ["📜", "4 Certs"]].map(([icon, label]) => (
              <div key={label} style={{
                background: "#ffffff08",
                border: "1px solid #ffffff15",
                borderRadius: "12px",
                padding: "10px 18px",
                fontSize: "14px",
                color: "#ccccdd",
              }}>
                {icon} {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 16px" }}>
        {/* Timeline */}
        <h2 style={{ fontSize: "13px", letterSpacing: "4px", color: "#8888aa", textTransform: "uppercase", marginBottom: "24px" }}>
          📍 Your Learning Journey
        </h2>

        {roadmap.map((phase, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            {/* Phase Header */}
            <button
              onClick={() => togglePhase(i)}
              style={{
                width: "100%",
                background: activePhase === i ? phase.bg : "#ffffff05",
                border: `1px solid ${activePhase === i ? phase.color + "40" : "#ffffff10"}`,
                borderRadius: "16px",
                padding: "20px 24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                transition: "all 0.3s ease",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  background: `${phase.color}20`,
                  border: `1px solid ${phase.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0,
                }}>
                  {phase.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: phase.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>
                    {phase.phase} • {phase.duration}
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#ffffff" }}>
                    {phase.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#8888aa", marginTop: "2px" }}>
                    {phase.tools.map(t => t.name).join(" + ")}
                  </div>
                </div>
              </div>
              <div style={{
                fontSize: "22px",
                transform: activePhase === i ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                color: phase.color,
              }}>
                ▾
              </div>
            </button>

            {/* Phase Content */}
            {activePhase === i && (
              <div style={{ paddingTop: "12px", paddingLeft: "8px" }}>
                {phase.tools.map((tool, j) => {
                  const toolKey = `${i}-${j}`;
                  return (
                    <div key={j} style={{ marginBottom: "12px" }}>
                      <button
                        onClick={() => toggleTool(toolKey)}
                        style={{
                          width: "100%",
                          background: activeTool === toolKey ? "#ffffff08" : "#ffffff03",
                          border: `1px solid ${activeTool === toolKey ? phase.color + "50" : "#ffffff08"}`,
                          borderRadius: "12px",
                          padding: "16px 20px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          textAlign: "left",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontSize: "24px" }}>{tool.icon}</span>
                          <div>
                            <div style={{ color: "#ffffff", fontWeight: "600", fontSize: "16px" }}>{tool.name}</div>
                            <div style={{ color: "#8888aa", fontSize: "13px", marginTop: "2px" }}>{tool.time}</div>
                          </div>
                        </div>
                        <span style={{ color: phase.color, fontSize: "18px" }}>{activeTool === toolKey ? "−" : "+"}</span>
                      </button>

                      {activeTool === toolKey && (
                        <div style={{
                          background: "#ffffff04",
                          border: `1px solid ${phase.color}20`,
                          borderTop: "none",
                          borderRadius: "0 0 12px 12px",
                          padding: "20px",
                        }}>
                          {/* Why */}
                          <div style={{
                            background: `${phase.color}12`,
                            border: `1px solid ${phase.color}30`,
                            borderRadius: "8px",
                            padding: "12px 16px",
                            marginBottom: "20px",
                            color: "#ccccee",
                            fontSize: "14px",
                            lineHeight: 1.6,
                          }}>
                            💡 <strong style={{ color: phase.color }}>Why learn this?</strong> {tool.why}
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            {/* Topics */}
                            <div>
                              <div style={{ fontSize: "12px", letterSpacing: "2px", color: phase.color, textTransform: "uppercase", marginBottom: "12px" }}>
                                📚 Topics to Cover
                              </div>
                              {tool.topics.map((t, k) => (
                                <div key={k} style={{
                                  display: "flex", gap: "10px", alignItems: "flex-start",
                                  marginBottom: "8px", color: "#ccccdd", fontSize: "14px", lineHeight: 1.5,
                                }}>
                                  <span style={{ color: phase.color, flexShrink: 0, marginTop: "2px" }}>→</span>
                                  {t}
                                </div>
                              ))}
                            </div>

                            {/* Resources + Project */}
                            <div>
                              <div style={{ fontSize: "12px", letterSpacing: "2px", color: phase.color, textTransform: "uppercase", marginBottom: "12px" }}>
                                🔗 Free Resources
                              </div>
                              {tool.resources.map((r, k) => (
                                <a key={k} href={r.url} target="_blank" rel="noreferrer" style={{
                                  display: "block",
                                  color: "#88bbff",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  marginBottom: "8px",
                                  padding: "6px 10px",
                                  background: "#ffffff08",
                                  borderRadius: "6px",
                                  transition: "background 0.2s",
                                }}>
                                  🌐 {r.label}
                                </a>
                              ))}

                              <div style={{ marginTop: "20px" }}>
                                <div style={{ fontSize: "12px", letterSpacing: "2px", color: phase.color, textTransform: "uppercase", marginBottom: "12px" }}>
                                  🏗️ Practice Project
                                </div>
                                <div style={{
                                  background: `${phase.color}10`,
                                  border: `1px dashed ${phase.color}40`,
                                  borderRadius: "8px",
                                  padding: "12px",
                                  color: "#ddddee",
                                  fontSize: "13px",
                                  lineHeight: 1.6,
                                }}>
                                  {tool.project}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {/* Certifications */}
        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "13px", letterSpacing: "4px", color: "#8888aa", textTransform: "uppercase", marginBottom: "20px" }}>
            📜 Recommended Certifications
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {certifications.map((c, i) => (
              <div key={i} style={{
                background: "#ffffff05",
                border: "1px solid #ffffff12",
                borderRadius: "12px",
                padding: "16px",
              }}>
                <div style={{ fontSize: "13px", color: "#00C9A7", marginBottom: "6px" }}>{c.priority}</div>
                <div style={{ fontWeight: "700", color: "#ffffff", marginBottom: "4px", fontSize: "15px" }}>{c.name}</div>
                <div style={{ fontSize: "12px", color: "#8888aa" }}>{c.tool} • {c.level}</div>
                <div style={{ fontSize: "13px", color: "#FFB830", marginTop: "8px" }}>{c.cost}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Tips */}
        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "13px", letterSpacing: "4px", color: "#8888aa", textTransform: "uppercase", marginBottom: "20px" }}>
            💼 Job Search Tips
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {jobTips.map((j, i) => (
              <div key={i} style={{
                background: "#ffffff05",
                border: "1px solid #ffffff10",
                borderRadius: "12px",
                padding: "16px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>{j.icon}</span>
                <p style={{ margin: 0, color: "#ccccdd", fontSize: "14px", lineHeight: 1.6 }}>{j.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "48px",
          textAlign: "center",
          padding: "32px",
          background: "linear-gradient(135deg, #00C9A710, #0089CF10)",
          border: "1px solid #00C9A730",
          borderRadius: "20px",
        }}>
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>🎯</div>
          <h3 style={{ color: "#ffffff", margin: "0 0 8px", fontSize: "20px" }}>You've got this!</h3>
          <p style={{ color: "#8888aa", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>
            Consistency beats intensity. 2 hours/day for 6 months = Job-Ready Data Analyst.<br />
            Start with Excel → SQL → Power BI. The rest will follow.
          </p>
        </div>
      </div>
    </div>
  );
}
