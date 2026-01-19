Below is a **complete yet concise MBA-ready delivery flow** for **Power BI – Data Connections (Databases & Web)**.
This is designed for **executive classrooms**: concept → business relevance → live demo → takeaway.

---

# 📊 Power BI – Data Connections: Databases & Web

**MBA Executive Delivery Flow**

![Image](https://amitzaveridotcom.wordpress.com/wp-content/uploads/2020/09/bi-1.png)

![Image](https://media.licdn.com/dms/image/v2/C4D12AQHkGcxNgxsY2g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1604392070096?e=2147483647\&t=Ve95EWYSX3FrNVt7NVWLg8HSbOJpu-Wob4-H5aY5lDg\&v=beta)

![Image](https://learn.microsoft.com/en-us/power-bi/connect-data/media/desktop-connect-to-web/connect-to-web-01.png)

![Image](https://learn.microsoft.com/en-us/power-bi/connect-data/media/desktop-connect-to-web/connect-to-web-06.png)

---

## 1️⃣ Context Setting (5–7 mins)

### How to Position for MBA Audience

Start with **decision-making**, not technology.

**Talking Points**

* “Dashboards are only as good as the data feeding them”
* Enterprises rarely use Excel alone
* Real-time and external data are strategic assets

**Business Question Examples**

* Can sales data from ERP be combined with market data?
* Can we track competitors, prices, or sentiment from the web?

---

## 2️⃣ Big Picture: Data Sources in Microsoft Power BI (5 mins)

### Categories (High-level)

| Category  | Examples                | MBA Interpretation             |
| --------- | ----------------------- | ------------------------------ |
| Files     | Excel, CSV              | Internal reports               |
| Databases | SQL Server, MySQL       | ERP / CRM systems              |
| Web       | URLs, APIs              | Market & external intelligence |
| Cloud     | Azure, Google Analytics | Digital platforms              |

📌 **Focus Today:**
➡️ **Databases**
➡️ **Web**

---

## 3️⃣ Databases – Concept First (10 mins)

### What is a Database (MBA framing)

* Centralized, structured, controlled data
* Used by **ERP, CRM, Finance, Operations**

### Common Enterprise Databases

* SQL Server
* Oracle
* MySQL / PostgreSQL

### Why Connect Power BI to Databases?

* Single source of truth
* Large data volumes
* Near real-time reporting

---

## 4️⃣ Database Connection – Demo Flow (15–20 mins)

### Step-by-Step (Live Demo)

1. **Get Data → SQL Server**
2. Enter:

   * Server name
   * Database (optional)
3. Choose:

   * Import (snapshot)
   * DirectQuery (live)
4. Select tables
5. Load data

---

### Import vs DirectQuery (MBA Critical Slide)

| Aspect         | Import          | DirectQuery         |
| -------------- | --------------- | ------------------- |
| Data freshness | Periodic        | Real-time           |
| Performance    | Faster          | Depends on DB       |
| Control        | Power BI        | Database            |
| Typical Use    | Finance reports | Live ops dashboards |

📌 **MBA Insight**:

> Executives prefer **DirectQuery for operations**, **Import for strategy**

---

## 5️⃣ Database Hands-On Dataset (Ready-to-Use)

### Option 1: SQL Server Sample (Recommended)

**Microsoft AdventureWorks (Sales DB)**
🔗 Download:
[https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure](https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure)

**Tables to Use**

* SalesOrderHeader
* SalesOrderDetail
* Customer
* Product

**Business Scenarios**

* Sales by region
* Customer profitability
* Product performance

---

### Option 2 (No DB Setup – Fast Classroom)

Use **Azure SQL Sample** (read-only, cloud hosted)
🔗 [https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-sample-data](https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-sample-data)

---

## 6️⃣ Web Data – Why It Matters (5–7 mins)

### What is Web Data?

Data coming from:

* Websites
* Public APIs
* Government portals
* Market feeds

### MBA Use Cases

* Inflation data
* Exchange rates
* Stock prices
* Population / GDP
* Competitor pricing

---

## 7️⃣ Web Connector – Demo Flow (15 mins)

### Demo 1: Simple Web Table

**Get Data → Web → URL**

Use a **clean public dataset**:

🔗 World Bank – Population Data
[https://api.worldbank.org/v2/country/IND/indicator/SP.POP.TOTL?format=json](https://api.worldbank.org/v2/country/IND/indicator/SP.POP.TOTL?format=json)

👉 Show:

* Raw JSON
* Transform in Power Query
* Load to model

---

### Demo 2: Government / Open Data (India-friendly)

🔗 [https://data.gov.in](https://data.gov.in)

Example:

* State-wise population
* Economic indicators
* Transport statistics

📌 **MBA Insight**

> This is how executives bring **external reality** into internal reports

---

## 8️⃣ Web vs Database – Executive Comparison

| Dimension   | Database      | Web                 |
| ----------- | ------------- | ------------------- |
| Ownership   | Internal      | External            |
| Structure   | Structured    | Semi / Unstructured |
| Reliability | High          | Medium              |
| Use Case    | Core business | Market intelligence |

---

## 9️⃣ Common Issues & Best Practices (5 mins)

### Database

* Use views instead of raw tables
* Limit columns
* Avoid heavy joins in Power BI

### Web

* Data refresh limits
* API rate limits
* Data cleaning is mandatory

---

## 🔟 Wrap-Up: MBA Takeaway Slide

**Key Learnings**

* Power BI connects to **enterprise + external** data
* Database connections drive **operational dashboards**
* Web data enables **strategic and competitive insights**
* Connection choice impacts **speed, accuracy, and governance**

---

## 📦 Suggested Classroom Assets (If You Want Next)

I can provide:

* 📑 **Slide deck (MBA language, no tech overload)**
* 🧪 **Hands-on lab PDF**
* 📊 **Executive case study (Sales + Market data)**
* ❓ **MBA-style discussion questions**

Just tell me what you want to deliver next 👍



Below is a **clear, classroom-ready lesson plan** for **pulling data into Power BI from the Web**, designed for **MBA / beginner learners** and suitable for a **60–90 minute session**.

---

## Lesson Title

**Power BI – Connecting to Web Data**

**Target Audience:** MBA / Non-technical learners
**Tool:** Microsoft Power BI Desktop
**Duration:** 1–1.5 hours

---

![Image](https://learn.microsoft.com/en-us/power-bi/connect-data/media/desktop-tutorial-importing-and-analyzing-data-from-a-web-page/get-data-web3.png)

![Image](https://learn.microsoft.com/en-us/power-bi/connect-data/media/desktop-connect-to-web/connect-to-web-01.png)

![Image](https://learn.microsoft.com/en-us/power-bi/create-reports/media/desktop-buttons/example-report.png)

![Image](https://learn.microsoft.com/en-us/power-bi/connect-data/media/desktop-connect-to-data/datasources_fromnavigatordialog.png)

## Learning Objectives

By the end of the session, learners will be able to:

* Understand **what web data is** and why businesses use it
* Connect Power BI to **web pages and APIs**
* Clean and transform web data using **Power Query**
* Refresh and validate web-based datasets

---

## Lesson Flow (Suggested Delivery)

---

## 1️⃣ Business Context (10 minutes)

**Start with WHY before HOW**

### Discussion Points:

* Businesses frequently use **external data**:

  * Government portals
  * Financial websites
  * Company APIs
  * Market statistics
* Examples:

  * Stock prices
  * Exchange rates
  * COVID / population data
  * Product prices from websites

💡 *Explain:*

> “Power BI can directly pull data from the internet — no manual copy-paste.”

---

## 2️⃣ Types of Web Data in Power BI (10 minutes)

### Explain with simple classification:

| Type       | Description                   | Example               |
| ---------- | ----------------------------- | --------------------- |
| Web Tables | Data displayed in HTML tables | Wikipedia, reports    |
| Web Pages  | Semi-structured content       | Company sites         |
| APIs       | Structured JSON/XML data      | Weather, finance APIs |

📌 Emphasize:

* Beginners mostly work with **Web Tables**
* APIs are usually introduced later

---

## 3️⃣ Hands-On Demo: Connecting to Web Data (20 minutes)

### Step-by-Step (Live Demo)

1. Open **Power BI Desktop**
2. Click **Home → Get Data → Web**
3. Choose **Basic**
4. Paste a public URL
   *(example: Wikipedia table, government stats site)*
5. Click **OK**

Power BI will:

* Scan the page
* Detect available tables
* Show **Navigator window**

🎯 Teaching Tip:
Point out how Power BI “understands” web structure automatically.

---

## 4️⃣ Using the Navigator Window (10 minutes)

### Explain:

* Left panel → List of detected tables
* Preview pane → Sample data
* Checkbox → Select required tables only

Ask students:

> “Which table makes business sense?”

Then:

* Click **Transform Data** (not Load yet)

---

![Image](https://learn.microsoft.com/en-us/power-bi/transform-model/media/desktop-query-overview/query-overview-view-icons.png)

![Image](https://learn.microsoft.com/en-us/power-query/connectors/web/web-formula-bar.png)

![Image](https://k21academy.com/wp-content/uploads/2021/05/18-b-1.png)

![Image](https://k21academy.com/wp-content/uploads/2021/05/1-5.png)

## 5️⃣ Data Cleaning using Power Query (20 minutes)

### Common Transformations to Demo:

* Remove unnecessary columns
* Rename columns
* Change data types
* Remove blank rows
* Filter rows (e.g., country = India)

📌 Explain conceptually:

> “Power Query is like Excel cleaning, but automated.”

Highlight:

* **Steps pane** records every action
* Changes reapply automatically on refresh

---

## 6️⃣ Load & Refresh Data (10 minutes)

### Steps:

1. Click **Close & Apply**
2. Data loads into Power BI Model
3. Create:

   * Simple table visual
   * Bar chart or card

### Show:

* **Refresh button**
* Explain live refresh behavior:

  * Depends on website availability
  * Some sites block refresh

---

## 7️⃣ Limitations & Best Practices (10 minutes)

### Key Points:

* Not all websites allow scraping
* Website structure changes can break reports
* Prefer:

  * Government portals
  * Official APIs
  * Stable public data sources

✅ Best Practices:

* Document source URL
* Use Transform instead of manual fixes
* Test refresh before publishing

---

## 8️⃣ Quick Practice / Assignment (Optional)

### Student Task:

* Connect to **any public website**
* Load **one table**
* Perform **2 transformations**
* Create **one visual**

---

## Wrap-Up Summary (5 minutes)

Reinforce:

* Web data = **real-time external insights**
* Power BI simplifies web integration
* Power Query is the backbone of cleaning

---

## Next Lesson Suggestions

* Web APIs (JSON)
* Scheduled refresh in Power BI Service
* Combining Web + Excel / Database data

If you want, I can also:

* Share **safe demo URLs** for class
* Create a **step-by-step PPT**
* Design a **lab worksheet** for students

Just tell me 👍
