window.ALL_QUESTIONS = [
    {
        "id": 1,
        "title": "Which statement results in an Apex compiler error?",
        "code": "",
        "options": {
            "A": "Map<Id, Lead> lmap = new Map<Id, Lead>([SELECT Id FROM Lead LIMIT 8]);",
            "B": "Date d1 = Date.today(), d2 = Date.valueOf('2018-01-10');",
            "C": "Integer a = 5, b = 6, c, d = 7;",
            "D": "List<String> s = List<String>{'a', 'b', 'c'};"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>考点：Apex 集合字面量。<br>必须使用 <code>new</code> 关键字构造集合。<br>❌ 错误：<code>List&lt;String&gt; s = List&lt;String&gt;{...};</code><br>✅ 正确：<code>List&lt;String&gt; s = new List&lt;String&gt;{...};</code>"
    },
    {
        "id": 2,
        "title": "What are two benefits of the Lightning Component framework? (Choose two.)",
        "code": "",
        "options": {
            "A": "It simplifies complexity when building pages, but not applications.",
            "B": "It provides an event-driven architecture for better decoupling between components.",
            "C": "It promotes faster development using out-of-box components that are suitable for desktop and mobile devices.",
            "D": "It allows faster PDF generation with Lightning components."
        },
        "correct": "BC", 
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>Lightning 框架核心优势：<br>1. <strong>事件驱动 (B)</strong>：组件间解耦。<br>2. <strong>开箱即用 (C)</strong>：丰富组件库，适配多端。<br>A 错误：它也用于构建 App。<br>D 错误：PDF 不是其强项。"
    },
    {
        "id": 3,
        "title": "A method is passed a list of generic sObjects as a parameter. How to determine which object type to cast each sObject?",
        "code": "void processRecords(List<sObject> records) {\n    for(sObject obj : records) {\n        // How to identify type here?\n    }\n}",
        "options": {
            "A": "Use the first three characters of the sObject ID.",
            "B": "Use the getSObjectType method on each generic sObject.",
            "C": "Use the getSObjectName method on the sObject class.",
            "D": "Use a try-catch construct to cast the sObject."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>标准做法是对 sObject 实例调用 <code>getSObjectType()</code> 方法，获取 Schema Token 进行判断。<br>A 不可靠（无 ID 时失效）；D 是反模式。"
    },
    {
        "id": 4,
        "title": "What should a developer use to implement an automatic Approval Process submission for Cases?",
        "code": "",
        "options": {
            "A": "An Assignment Rule",
            "B": "Scheduled Apex",
            "C": "Process Builder",
            "D": "A Workflow Rule"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Process Builder 拥有“提交审批 (Submit for Approval)”的标准动作。<br>Workflow 和 Assignment Rule 无法实现自动提交审批。"
    },
    {
        "id": 5,
        "title": "How to see the number of discounted items in the Quote Line Items on a Quote?",
        "code": "",
        "options": {
            "A": "Trigger on Quote querying Quote Line Items",
            "B": "Workflow Rule on Quote Line Item updating Quote",
            "C": "Roll-up summary field on Quote with filter",
            "D": "Formula field on Quote"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>使用 <strong>Roll-up Summary (汇总摘要字段)</strong>，并在字段定义中添加过滤条件 (Discount > 0)。这是最高效的声明式配置。"
    },
    {
        "id": 6,
        "title": "Which method allows access to the standard price book in a test class?",
        "code": "@isTest\nstatic void testTrigger() {\n    // Need standard pricebook access here\n}",
        "options": {
            "A": "Use Test.getStandardPricebookId()",
            "B": "Use @IsTest(SeeAllData=true) and delete existing",
            "C": "Use Test.loadData() and a Static Resource",
            "D": "Use @TestVisible"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>测试环境默认隔离数据。必须使用 <code>Test.getStandardPricebookId()</code> 来获取标准价格手册 ID。"
    },
    {
        "id": 7,
        "title": "Which two Apex data types can be used to reference a Salesforce record ID dynamically? (Choose two.)",
        "code": "",
        "options": {
            "A": "ENUM",
            "B": "sObject",
            "C": "External ID",
            "D": "String"
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>1. <strong>String (D)</strong>: ID 本质是字符串。<br>2. <strong>sObject (B)</strong>: 任何 sObject 实例都有 Id 字段。<br>ENUM 不行；External ID 是字段属性。"
    },
    {
        "id": 8,
        "title": "Where to identify the time taken by each process in a transaction in Log Inspector?",
        "code": "",
        "options": {
            "A": "Performance Tree tab",
            "B": "Execution Tree tab",
            "C": "Timeline tab under Execution Overview panel",
            "D": "Save Order tab"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>Timeline (时间轴)</strong> 视图最直观地展示了各部分（DB, Apex, Workflow）的耗时条形图。"
    },
    {
        "id": 9,
        "title": "Which two features align to the Controller portion of MVC? (Choose two.)",
        "code": "",
        "options": {
            "A": "Process Builder actions",
            "B": "Workflow rules",
            "C": "Standard objects",
            "D": "Date fields"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>MVC 控制器层 (Controller) 负责逻辑。<br>A (Process Builder) 和 B (Workflow) 都是声明式的逻辑工具。<br>C 和 D 属于 Model 层。"
    },
    {
        "id": 10,
        "title": "Which two environments meet the requirement for 2GB test data without production data? (Choose two.)",
        "code": "",
        "options": {
            "A": "Developer Sandbox",
            "B": "Full Sandbox",
            "C": "Developer Edition",
            "D": "Partial Sandbox",
            "E": "Developer Pro Sandbox"
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>需求：2GB 存储。<br>Partial Sandbox (5GB) 和 Full Sandbox (复制生产库，容量极大) 均满足要求。<br>Dev (200MB) 和 Dev Pro (1GB) 容量不足。"
    }
];