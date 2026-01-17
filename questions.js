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
    },
    // ... (保留之前的题目，这里是第 11-20 题)

    {
        "id": 11,
        "title": "A developer working on a time management application wants to make total hours for each timecard available to application users. A timecard entry has a Master-Detail relationship to a timecard. Which approach should the developer use to accomplish this declaratively?",
        "code": "",
        "options": {
            "A": "A Visualforce page that calculates the total number of hours for a timecard and displays it on the page",
            "B": "A Roll-Up Summary field on the Timecard Object that calculates the total hours from timecard entries for that timecard",
            "C": "A Process Builder process that updates a field on the timecard when a timecard entry is created",
            "D": "An Apex trigger that uses an Aggregate Query to calculate the hours for a given timecard and stores it in a custom field"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>关键点：Master-Detail 关系。<br>父对象 (Timecard) 可以使用 <strong>Roll-Up Summary (汇总摘要字段)</strong> 直接对从对象 (Timecard Entry) 进行 SUM 聚合计算。<br>这是标准的声明式 (Declarative) 方法，无需代码。<br>❌ A/D 是编程方式。<br>❌ C (Process Builder) 效率不如 Roll-Up Summary。"
    },
    {
        "id": 12,
        "title": "A developer encounters APEX heap limit errors in a trigger. Which two methods should the developer use to avoid this error? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use the transient keyword when declaring variables.",
            "B": "Query and store fields from the related object in a collection when updating related objects.",
            "C": "Remove or set collections to null after use.",
            "D": "Use SOQL for loops instead of assigning large query results to a single collection and looping through the collection."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>1. <strong>SOQL For Loops (D)</strong>: 分批加载数据，避免一次性加载过多记录导致堆溢出。<br>2. <strong>释放内存 (C)</strong>: 使用完的大型集合设为 <code>null</code>，允许垃圾回收。<br>❌ A (transient) 仅用于 Visualforce View State。<br>❌ B 会增加内存消耗。"
    },
    {
        "id": 13,
        "title": "Which approach should be used to provide test data for a test class?",
        "code": "",
        "options": {
            "A": "Query for existing records in the database.",
            "B": "Execute anonymous code blocks that create data.",
            "C": "Use a test data factory class to create test data.",
            "D": "Access data in @TestVisible class variables."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>最佳实践是使用 <strong>Test Data Factory</strong> 类来集中创建测试数据，保证测试独立性与数据一致性。<br>或者使用 <code>@testSetup</code> 方法。<br>❌ A: 依赖现有数据是反模式 (SeeAllData=true)。<br>❌ B: 匿名代码块不随测试运行。"
    },
    {
        "id": 14,
        "title": "Which approach should a developer take to automatically add a 'Maintenance Plan' to each Opportunity that includes an 'Annual Subscription' when an opportunity is closed?",
        "code": "",
        "options": {
            "A": "Build an Opportunity Line Item trigger that adds a Pricebook Entry record.",
            "B": "Build an Opportunity Line Item trigger to add an Opportunity Line Item record.",
            "C": "Build an Opportunity trigger that adds a Pricebook Entry record.",
            "D": "Build an Opportunity trigger that adds an Opportunity Line Item record."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>动作触发点是“当 Opportunity 关闭时”，因此需要在 <strong>Opportunity Trigger</strong> 中编写逻辑。<br>目标是“添加 Maintenance Plan”，即创建一条新的 <strong>Opportunity Line Item</strong>。<br>❌ A/B: 触发对象错误 (Line Item Trigger)。<br>❌ C: 操作对象错误 (Pricebook Entry)。"
    },
    {
        "id": 15,
        "title": "Which two statements are true about using the @testSetup annotation in an Apex test class? (Choose two.)",
        "code": "",
        "options": {
            "A": "The @testSetup annotation cannot be used when the @isTest(SeeAllData=True) annotation is used",
            "B": "Test data is inserted once for all test methods in a class",
            "C": "Records created in the @testSetup method cannot be updated in individual test methods.",
            "D": "The @testSetup method is automatically executed before each test method in the test class is executed."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br><code>@testSetup</code> 方法的特点：<br>1. <strong>只执行一次 (B)</strong>：数据插入一次，供所有测试方法使用。<br>2. <strong>自动执行 (D)</strong>：在每个测试方法运行前，系统会回滚到 Setup 后的状态（提供数据副本）。<br>❌ C: 测试方法可以更新数据（因为是独立副本）。<br>❌ A: 无此限制。"
    },
    {
        "id": 16,
        "title": "What is the requirement for a class to be used as a custom Visualforce controller?",
        "code": "",
        "options": {
            "A": "Any top-level Apex class that has a constructor that returns a PageReference",
            "B": "Any top-level Apex class that extends a PageReference",
            "C": "Any top-level Apex class that has a default, no-argument constructor",
            "D": "Any top-level Apex class that implements the controller interface"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>自定义控制器的唯一要求：<br>1. 必须是顶级类 (Top-level class)。<br>2. 必须有一个<strong>默认的无参构造函数 (no-argument constructor)</strong>。<br>不需要实现特定接口或继承特定类。"
    },
    {
        "id": 17,
        "title": "A Visualforce page is required for displaying and editing Case records that includes both standard and custom functionality defined in an Apex class called myControllerExtension. The Visualforce page should include which <apex:page> attribute(s) to correctly implement controller functionality?",
        "code": "",
        "options": {
            "A": "controller=\"Case\" and extensions=\"myControllerExtension\"",
            "B": "extensions=\"myControllerExtension\"",
            "C": "controller=\"myControllerExtension\"",
            "D": "standardController=\"Case\" and extensions=\"myControllerExtension\""
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>如果要保留标准对象 (Case) 的功能（如 save/edit），必须使用 <code>standardController=\"Case\"</code>。<br>如果要添加自定义逻辑，使用 <code>extensions=\"myControllerExtension\"</code>。<br>❌ A: controller 属性用于自定义类，不能填对象名。<br>❌ C: 仅用 controller 会丢失标准功能。"
    },
    {
        "id": 18,
        "title": "A newly hired developer discovers that there are multiple triggers on the Case object. What should the developer consider when working with triggers?",
        "code": "",
        "options": {
            "A": "Developers must dictate the order of trigger execution.",
            "B": "Trigger execution order is based on creation date and time.",
            "C": "Unit tests must specify the trigger being tested.",
            "D": "Trigger execution order is not guaranteed for the same sObject."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 官方明确说明：同一个对象上的多个触发器，其<strong>执行顺序是不确定的 (not guaranteed)</strong>。<br>最佳实践是：每个对象只写一个 Trigger，在 Trigger 中调用 Handler 类来控制逻辑顺序。"
    },
    {
        "id": 19,
        "title": "How should a developer prevent a recursive trigger?",
        "code": "",
        "options": {
            "A": "Use a one trigger per object pattern.",
            "B": "Use a static Boolean variable.",
            "C": "Use a trigger handler.",
            "D": "Use a private Boolean variable."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>防止递归触发器的标准方法是使用 <strong>静态布尔变量 (Static Boolean Variable)</strong>。<br>静态变量在一次事务 (Transaction) 中保持状态，可以用来标记“已执行过”，从而阻止第二次进入。<br>❌ D: 私有变量无法跨触发器调用保持状态。"
    },
    {
        "id": 20,
        "title": "Which three options can be accomplished with formula fields? (Choose three.)",
        "code": "",
        "options": {
            "A": "Generate a link using the HYPERLINK function to a specific record.",
            "B": "Display the previous value for a field using the PRIORVALUE function.",
            "C": "Determine if a datetime field value has passed using the NOW function.",
            "D": "Return and display a field value from another object using the VLOOKUP function.",
            "E": "Determine which of three different images to display using the IF function."
        },
        "correct": "ACE",
        "explanation": "<strong>✅ Correct Answer: A, C & E</strong><br><br><strong>🧠 解析：</strong><br>公式字段支持：<br>✅ A: <code>HYPERLINK</code> 生成链接。<br>✅ C: <code>NOW()</code> 获取当前时间。<br>✅ E: <code>IF()</code> + <code>IMAGE()</code> 动态显示图片。<br>❌ B: <code>PRIORVALUE</code> 仅用于验证规则/工作流。<br>❌ D: <code>VLOOKUP</code> 仅用于验证规则。"
    },
    {
        "id": 21,
        "title": "What is a capability of the <ltng:require> tag that is used for loading external Javascript libraries in Lightning Component? (Choose three.)",
        "code": "",
        "options": {
            "A": "Loading files from Documents.",
            "B": "One-time loading for duplicate scripts.",
            "C": "Specifying loading order.",
            "D": "Loading scripts in parallel.",
            "E": "Loading externally hosted scripts."
        },
        "correct": "BCE",
        "explanation": "<strong>✅ Correct Answer: B, C & E</strong><br><br><strong>🧠 解析：</strong><br><code>&lt;ltng:require&gt;</code> 的核心功能：<br>1. <strong>去重加载 (B)</strong>：确保同一脚本即使被多次引用也只加载一次。<br>2. <strong>顺序控制 (C)</strong>：通过 <code>afterScriptsLoaded</code> 属性，可以确保脚本加载完成后再执行后续逻辑。<br>3. <strong>加载外部脚本 (E)</strong>：支持加载静态资源或外部 CDN 托管的脚本。<br>❌ A: 不支持 Documents，只支持 Static Resources 或 URL。<br>❌ D: 是串行加载而非并行。"
    },
    {
        "id": 22,
        "title": "A Platform Developer needs to write an Apex method that will only perform an action if a record is assigned to a specific Record Type. Which two options allow the developer to dynamically determine the ID of the required Record Type by its name? (Choose two.)",
        "code": "",
        "options": {
            "A": "Make an outbound web services call to the SOAP API.",
            "B": "Hardcode the ID as a constant in an Apex class.",
            "C": "Use the getRecordTypeInfosByName() method in the DescribeSObjectResult class.",
            "D": "Execute a SOQL query on the RecordType object."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>获取 RecordType ID 的两种标准方式：<br>1. <strong>Schema Describe (C)</strong>: <code>Schema.SObjectType.Account.getDescribe().getRecordTypeInfosByName()...</code> (更高效，无 SOQL 消耗)。<br>2. <strong>SOQL 查询 (D)</strong>: <code>SELECT Id FROM RecordType WHERE ...</code>。<br>❌ B: 硬编码 ID 不可移植。"
    },
    {
        "id": 23,
        "title": "A developer has the controller class below. Which code block will run successfully in an execute anonymous window?",
        "code": "public with sharing class myFooController {\n    public integer prop { get; private set; }\n}",
        "options": {
            "A": "myFooController m = new myFooController(); System.assert(m.prop!=null);",
            "B": "myFooController m = new myFooController(); System.assert(m.prop ==0);",
            "C": "myFooController m = new myFooController(); System.assert(m.prop ==null);",
            "D": "myFooController m = new myFooController(); System.assert(m.prop ==1);"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中，<code>Integer</code> 是对象类型，默认初始化值为 <code>null</code>。<br>由于代码中没有构造函数对 <code>prop</code> 赋值，也没有默认值，所以它保持为 <code>null</code>。<br>❌ B: Integer 不会自动初始化为 0。"
    },
    {
        "id": 24,
        "title": "In a single record, a user selects multiple values from a multi-select picklist. How are the selected values represented in Apex?",
        "code": "",
        "options": {
            "A": "As a List<String> with each value as an element in the list",
            "B": "As a String with each value separated by a comma",
            "C": "As a String with each value separated by a semicolon",
            "D": "As a Set<String> with each value as an element in the set"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Multi-Select Picklist 在数据库和 Apex 中本质上是一个 <strong>String</strong>。<br>多个值之间使用<strong>分号 (;)</strong> 分隔。<br>例如：<code>\"Red;Blue;Green\"</code>。<br>若要作为列表处理，需使用 <code>.split(';')</code>。"
    },
    {
        "id": 25,
        "title": "A developer writes the following code. What is the result of the debug statement?",
        "code": "List<Account> acc = [SELECT Id FROM Account LIMIT 10];\nDelete acc;\nDatabase.emptyRecycleBin(acc);\nSystem.Debug(Limits.getDMLStatements() + ' , ' + Limits.getLimitDMLStatements());",
        "options": {
            "A": "1, 100",
            "B": "1, 150",
            "C": "2, 150",
            "D": "2, 200"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>考点：Governor Limits (DML 语句计数)。<br>1. <code>delete acc;</code> 算作 1 次 DML。<br>2. <code>Database.emptyRecycleBin(acc);</code> 也算作 1 次 DML。<br>合计已使用 DML = 2。<br>同步事务中 DML 语句总上限为 150。<br>因此输出为：2, 150。"
    },
    {
        "id": 26,
        "title": "What are two valid options for iterating through each Account in the collection List<Account> named Accountlist? (Choose two.)",
        "code": "",
        "options": {
            "A": "for (Account theAccount: Accountlist) {}",
            "B": "for (Accountlist) {}",
            "C": "for (List L : AccountList) {}",
            "D": "for (Integer i=0; i < Accountlist.Size(); i++) {}"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>Apex 支持两种主要的集合遍历方式：<br>1. <strong>增强 For 循环 (A)</strong>: <code>for (Type variable : List)</code>，语法简洁。<br>2. <strong>索引 For 循环 (D)</strong>: <code>for (Integer i=0; i&lt;List.size(); i++)</code>，传统方式。<br>B 和 C 均为无效语法。"
    },
    {
        "id": 27,
        "title": "Map<ID, Account> accountMap = new Map<ID, Account> ([SELECT Id, Name FROM Account]); What are three valid Apex loop structures for iterating through items in the collection? (Choose three.)",
        "code": "",
        "options": {
            "A": "for (ID accountID : accountMap.keySet()) {}",
            "B": "for (Account accountRecord : accountMap.values()) {}",
            "C": "for (Integer i = 0; i < accountMap.size(); i++) {}",
            "D": "for (ID accountID : accountMap) {}",
            "E": "for (Account accountRecord : accountMap.keySet()) {}"
        },
        "correct": "ABC",
        "explanation": "<strong>✅ Correct Answer: A, B & C</strong><br><br><strong>🧠 解析：</strong><br>Map 的遍历方式：<br>✅ A: 遍历 <code>keySet()</code> (返回 ID)。<br>✅ B: 遍历 <code>values()</code> (返回 Account)。<br>✅ C: 虽然 Map 不能直接用索引，但在逻辑上可以通过将 values 转为 List 后用索引遍历，或者这里指通用的循环结构逻辑（注：在严格的 Apex 语法考试中，C 通常被视为对 Map 大小的计数循环，逻辑上成立，而 D 和 E 是明显的语法错误）。<br>❌ D: Map 不能直接迭代。<br>❌ E: keySet 返回的是 ID，类型不匹配。"
    },
    {
        "id": 28,
        "title": "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage. Which two strategies should a developer use to accomplish this? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use a Visual Workflow.",
            "B": "Use a validation rule.",
            "C": "Use the Process Automation Settings.",
            "D": "Use a Trigger."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>防止记录编辑的两种策略：<br>1. <strong>Validation Rule (B)</strong>: 声明式，最简单。<code>AND(ISPICKVAL(StageName, 'Closed Won'), NOT(ISCHANGED(StageName)))</code>。<br>2. <strong>Apex Trigger (D)</strong>: 编程式。在 <code>before update</code> 中检查状态并 <code>addError()</code>。<br>❌ A: Flow 无法直接阻止保存。"
    },
    {
        "id": 29,
        "title": "How should a developer make sure that a child record on a custom object, with a lookup to the Account object, has the same sharing access as its associated account?",
        "code": "",
        "options": {
            "A": "Create a Sharing Rule comparing the custom object owner to the account owner.",
            "B": "Create a validation rule on the custom object comparing the record owners on both records.",
            "C": "Include the sharing related list on the custom object page layout.",
            "D": "Ensure that the relationship between the objects is Master-Detail."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>要想子记录自动继承父记录的共享权限，必须使用 <strong>Master-Detail (主从关系)</strong>。<br>Lookup (查找关系) 默认不会继承共享权限。<br>❌ A: Sharing Rule 无法实现动态继承。"
    },
    {
        "id": 30,
        "title": "An org has a single account named 'No Contacts' that has no related contacts. Given the query below, what is the result of running this Apex?",
        "code": "List<Account> accounts = [Select ID, (Select ID, Name from Contacts) from Account where Name='No Contacts'];\n// accessing accounts[0].contacts",
        "options": {
            "A": "accounts[0].contacts is invalid Apex.",
            "B": "accounts[0].contacts is an empty Apex List.",
            "C": "accounts[0].contacts is Null.",
            "D": "A QueryException is thrown."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>子查询 (Subquery) 返回的子关系字段（如 <code>contacts</code>）永远不会是 Null。<br>如果没有子记录，它会返回一个 <strong>空的 List (Empty List)</strong>。<br>因此 <code>accounts[0].contacts</code> 是一个空列表，size 为 0，不会报错。"
    },
    {
        "id": 31,
        "title": "A platform developer at Universal Containers needs to create a custom button for the Account object that, when clicked, will perform a series of calculations and redirect the user to a custom Visualforce page. Which three attributes need to be defined with values in the <apex:page> tag to accomplish this? (Choose three.)",
        "code": "",
        "options": {
            "A": "action",
            "B": "renderAs",
            "C": "standardController",
            "D": "readOnly",
            "E": "extensions"
        },
        "correct": "ACE",
        "explanation": "<strong>✅ Correct Answer: A, C & E</strong><br><br><strong>🧠 解析：</strong><br>1. <strong>standardController=\"Account\" (C)</strong>: 绑定 Account 对象，使按钮能传递当前记录 ID。<br>2. <strong>extensions (E)</strong>: 引入自定义逻辑（Controller Extension）来执行计算。<br>3. <strong>action (A)</strong>: 定义页面加载时自动执行的方法（如计算后跳转）。<br>❌ B: renderAs 用于 PDF 生成。<br>❌ D: readOnly 与此需求无关。"
    },
    {
        "id": 32,
        "title": "Using the Schema Builder, a developer tries to change the API name of a field that is referenced in an Apex test class. What is the end result?",
        "code": "",
        "options": {
            "A": "The API name is not changed and there are no other impacts.",
            "B": "The API name of the field and the reference in the test class is changed.",
            "C": "The API name of the field is changed, and a warning is issued to update the class.",
            "D": "The API name of the field and the reference in the test class is updated."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 Salesforce 中更改字段 API 名称时，系统<strong>不会自动更新</strong>引用该字段的 Apex 代码。<br>系统会允许更改，但会发出警告 (Warning)，提示你手动更新代码。<br>❌ B/D: 不会自动更新代码。"
    },
    {
        "id": 33,
        "title": "When is an Apex Trigger required instead of a Process Builder Process?",
        "code": "",
        "options": {
            "A": "When a record needs to be created",
            "B": "When multiple records related to the triggering record need to be updated",
            "C": "When a post to Chatter needs to be created",
            "D": "When an action needs to be taken on a delete or undelete, or before a DML operation is executed"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Process Builder (及 Flow) 不支持以下触发场景：<br>1. <strong>Delete / Undelete</strong> 操作。<br>2. <strong>Before Insert / Update</strong> 逻辑（Flow 的 Before Save 除外，但在题目语境下 Trigger 是唯一全能选择）。<br>❌ A/B/C: 这些都是 Process Builder 的标准功能。"
    },
    {
        "id": 34,
        "title": "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent. Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
        "code": "",
        "options": {
            "A": "Create and populate a custom field on the parent object marked as Unique.",
            "B": "Create a custom field on the child object of type External Relationship.",
            "C": "Create and populate a custom field on the parent object marked as an External ID.",
            "D": "Create a custom field on the child object of type Foreign Key."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在没有 Salesforce ID 的情况下关联记录，需要使用 <strong>外部 ID (External ID)</strong>。<br>在父对象上创建 External ID 字段，并在数据加载时通过该字段匹配父记录。<br>❌ A: Unique 不是 External ID。<br>❌ B/D: 不存在 External Relationship 或 Foreign Key 字段类型。"
    },
    {
        "id": 35,
        "title": "A developer created a Lightning component to display a short text summary for an object and wants to use it with multiple Apex classes. How should the developer design the Apex classes?",
        "code": "",
        "options": {
            "A": "Have each class define method getObject() that returns the sObject that is controlled by the Apex class",
            "B": "Extend each class from the same base class that has a method getTextSummary() that returns the summary",
            "C": "Have each class implement an interface that defines method getTextSummary() that returns the summary",
            "D": "Have each class define method getTextSummary() that returns the summary"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>为了让组件能统一调用不同类的逻辑，最佳设计模式是使用 <strong>接口 (Interface)</strong>。<br>所有 Apex 类实现同一个接口 (如 <code>SummaryInterface</code>)，组件只需调用接口方法，无需关心具体实现。<br>❌ B: Apex 不支持多重继承，继承基类限制灵活性。"
    },
    {
        "id": 36,
        "title": "Which approach should a developer use to add pagination to a Visualforce page?",
        "code": "",
        "options": {
            "A": "A StandardController",
            "B": "The Action attribute for a page",
            "C": "The extensions attribute for a page",
            "D": "A StandardSetController"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Visualforce 中实现分页的标准方法是使用 <strong>StandardSetController</strong>。<br>它内置了 <code>next()</code>, <code>previous()</code>, <code>first()</code>, <code>last()</code> 等分页方法。<br>❌ A: 仅处理单条记录。"
    },
    {
        "id": 37,
        "title": "A developer is asked to create a PDF quote document formatted using the company's branding guidelines, and automatically save it to the Opportunity record. Which two ways should a developer create this functionality? (Choose two.)",
        "code": "",
        "options": {
            "A": "Install an application from the AppExchange to generate documents.",
            "B": "Create a Visualforce page with custom styling.",
            "C": "Create an email template and use it in Process Builder.",
            "D": "Create a visual flow that implements the company's formatting."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>生成 PDF 的两种主要方式：<br>1. <strong>Visualforce (B)</strong>: 使用 <code>renderAs=\"pdf\"</code> 原生生成。<br>2. <strong>AppExchange (A)</strong>: 使用第三方文档生成工具 (如 Conga, DocuSign)。<br>❌ C: 邮件模板不是 PDF。<br>❌ D: Flow 不具备生成复杂 PDF 的能力。"
    },
    {
        "id": 38,
        "title": "Which tool allows a developer to send requests to the Salesforce REST APIs and view the responses?",
        "code": "",
        "options": {
            "A": "REST resource path URL",
            "B": "Workbench REST Explorer",
            "C": "Developer Console REST tab",
            "D": "Force.com IDE REST Explorer tab"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>Workbench</strong> 是最常用的 Salesforce API 调试工具，其中的 <strong>REST Explorer</strong> 允许开发者发送 GET/POST 请求并查看 JSON 响应。<br>❌ C: Developer Console 无此功能。"
    },
    {
        "id": 39,
        "title": "A developer created a Visualforce page and a custom controller with methods to handle different buttons and events that can occur on the page. What should the developer do to deploy to production?",
        "code": "",
        "options": {
            "A": "Create a test class that provides coverage of the Visualforce page.",
            "B": "Create a test page that provides coverage of the Visualforce page.",
            "C": "Create a test page that provides coverage of the custom controller.",
            "D": "Create a test class that provides coverage of the custom controller."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>部署到生产环境要求 Apex 代码覆盖率 > 75%。<br>Visualforce 页面本身不需要测试覆盖，但其背后的 <strong>Controller (Apex 类)</strong> 必须由测试类覆盖。<br>❌ A/B/C: \"测试页面\" 这一概念不存在。"
    },
    {
        "id": 40,
        "title": "What is a benefit of using an after insert trigger over using a before insert trigger?",
        "code": "",
        "options": {
            "A": "An after insert trigger allows a developer to bypass validation rules when updating fields on the new record.",
            "B": "An after insert trigger allows a developer to insert other objects that reference the new record.",
            "C": "An after insert trigger allows a developer to make a callout to an external service.",
            "D": "An after insert trigger allows a developer to modify fields in the new record without a query."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>After Insert</strong> 的最大优势在于：记录已经保存到数据库，拥有了 <strong>Salesforce ID</strong>。<br>因此，可以使用这个 ID 来创建和关联子记录或其他相关对象。<br>❌ D: 修改自身字段应在 Before Insert 完成，否则需要额外的 Update DML。"
    },
    {
        "id": 41,
        "title": "The operation manager at a construction company uses a custom object called Machinery to manage the usage and maintenance of its cranes and other machinery. The manager wants to be able to assign machinery to different construction jobs, and track the dates and costs associated with each job. More than one piece of machinery can be assigned to one construction job. What should a developer do to meet these requirements?",
        "code": "",
        "options": {
            "A": "Create a lookup field on the Construction Job object to the Machinery object.",
            "B": "Create a lookup field on the Machinery object to the Construction Job object.",
            "C": "Create a junction object with Master-Detail Relationship to both the Machinery object and the Construction Job object.",
            "D": "Create a Master-Detail Lookup on the Machinery object to the Construction Job object."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求核心：<strong>多对多 (Many-to-Many)</strong> 关系，且需要记录关联时的额外字段 (日期、成本)。<br>实现多对多关系的标准方法是创建一个 <strong>Junction Object (连接对象)</strong>，并让它与两个主对象分别建立 <strong>Master-Detail</strong> 关系。<br>❌ A/B/D: 均为一对多关系，无法满足“多台设备对应多个工程”。"
    },
    {
        "id": 42,
        "title": "Which two strategies should a developer use to avoid hitting governor limits when developing in a multi-tenant environment? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use collections to store all fields from a related object and not just minimally required fields.",
            "B": "Use methods from the limits class to monitor governor limits.",
            "C": "Use SOQL for loops to iterate data retrieved from queries that return a high number of rows.",
            "D": "Use variables within Apex classes to store large amounts of data."
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>Governor Limits 规避策略：<br>1. <strong>SOQL For Loops (C)</strong>: <code>for(Account a : [SELECT...])</code> 自动分批处理查询结果 (200条/批)，防止 heap/query row limit 超限。<br>2. <strong>Limits 类 (B)</strong>: <code>Limits.getQueries()</code> 等方法可在运行时监控资源使用情况，做出预防。<br>❌ A/D: 存储过多不必要数据会消耗 Heap Size，反而更容易触限。"
    },
    {
        "id": 43,
        "title": "Which set of roll-up types are available when creating a roll-up summary field?",
        "code": "",
        "options": {
            "A": "COUNT, SUM, MIN, MAX",
            "B": "AVERAGE, SUM, MIN, MAX",
            "C": "SUM, MIN, MAX",
            "D": "AVERAGE, COUNT, SUM, MIN, MAX"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Roll-Up Summary 字段仅支持四种聚合操作：<br>1. <strong>COUNT</strong> (计数)<br>2. <strong>SUM</strong> (求和)<br>3. <strong>MIN</strong> (最小值)<br>4. <strong>MAX</strong> (最大值)<br>❌ <strong>AVERAGE (平均值)</strong> 不被原生支持。"
    },
    {
        "id": 44,
        "title": "What is the result of the debug statements in testMethod3 when you create test data using testSetup in below code?",
        "code": "@isTest\nprivate class CreateAndExecuteTest {\n  @testSetup static void setup() {\n    // Insert 2 Accounts: 'MyTest Account0' (Phone: ...8780), 'MyTest Account1' (Phone: ...8781)\n  }\n  @isTest static void testMethod1() { /* Updates Account0 */ }\n  @isTest static void testMethod2() { /* Updates Account1 */ }\n  @isTest static void testMethod3() {\n    // Select Account0 & Account1\n    // System.debug(...)\n  }\n}",
        "options": {
            "A": "Account0.Phone = 333-8781, Account1.Phone = 333-8780",
            "B": "Account0.Phone = 888-1515, Account1.Phone = 999-2525",
            "C": "Account0.Phone = 333-8780, Account1.Phone = 333-8781",
            "D": "Account0.Phone = 888-1515, Account1.Phone = 999-1515"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><code>@testSetup</code> 创建的数据对每个测试方法都是<strong>隔离</strong>的。<br>虽然 <code>testMethod1</code> 和 <code>testMethod2</code> 修改了数据，但这些修改<strong>不会</strong>影响 <code>testMethod3</code>。<br><code>testMethod3</code> 执行时，数据会回滚到 <code>setup()</code> 刚执行完的初始状态。<br>因此 Phone 号码保持初始值：...8780 和 ...8781。"
    },
    {
        "id": 45,
        "title": "Which three options allow a developer to use custom styling in a Visualforce page? (Choose three.)",
        "code": "",
        "options": {
            "A": "<apex:stylesheet> tag",
            "B": "Inline CSS",
            "C": "<apex:style> tag",
            "D": "<apex:stylesheets> tag",
            "E": "A static resource"
        },
        "correct": "ABE",
        "explanation": "<strong>✅ Correct Answer: A, B & E</strong><br><br><strong>🧠 解析：</strong><br>VF 页面自定义样式途径：<br>1. <strong>&lt;apex:stylesheet&gt; (A)</strong>: 引用外部 CSS。<br>2. <strong>Inline CSS (B)</strong>: 直接写在 <code>&lt;style&gt;</code> 标签或 <code>style=\"...\"</code> 属性中。<br>3. <strong>Static Resource (E)</strong>: 上传 CSS 文件并通过 <code>URLFOR</code> 引用。<br>❌ C/D: 不存在这些标签。"
    },
    {
        "id": 46,
        "title": "A developer executes the following query in Apex to retrieve a list of contacts for each account: List<Account> accounts = [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account]; Which two exceptions may occur when it executes? (Choose two.)",
        "code": "",
        "options": {
            "A": "CPU limit exception due to the complexity of the query.",
            "B": "SOQL query row limit exception due to the number of contacts.",
            "C": "SOQL query limit exception due to the number of contacts.",
            "D": "SOQL query row limit exception due to the number of accounts."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>SOQL Query Row Limit (查询行数限制) 为 50,000 行。<br>此限制计算的是<strong>所有返回记录的总和</strong>，包括父记录 (Account) 和子记录 (Contact)。<br>因此，如果 Account 太多 (D) 或者 Contact 太多 (B)，都会导致总行数超过 50,000，抛出 Row Limit 异常。<br>❌ C: 指的是查询次数 (100次)，这里只有 1 次查询。"
    },
    {
        "id": 47,
        "title": "Which three tools can deploy metadata to production? (Choose three.)",
        "code": "",
        "options": {
            "A": "Change Set from Developer Org",
            "B": "Force.com IDE",
            "C": "Data Loader",
            "D": "Change Set from Sandbox",
            "E": "Metadata API"
        },
        "correct": "BDE",
        "explanation": "<strong>✅ Correct Answer: B, D & E</strong><br><br><strong>🧠 解析：</strong><br>部署元数据到生产环境的工具：<br>✅ D: <strong>Change Sets</strong> (Sandbox -> Prod)。<br>✅ E: <strong>Metadata API</strong> (ANT, SFDX 等底层)。<br>✅ B: <strong>Force.com IDE</strong> (基于 Metadata API)。<br>❌ A: Developer Org 无法发 Change Set 到 Prod。<br>❌ C: Data Loader 仅处理数据。"
    },
    {
        "id": 48,
        "title": "A developer needs to display all of the available fields for an object. In which two ways can the developer retrieve the available fields if the variable myObject represents the name of the object? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use myObject.sObjectType.getDescribe().fieldSet() to return a set of fields.",
            "B": "Use mySObject.myObject.fields.getMap() to return a map of fields.",
            "C": "Use Schema.describeSObjects(new String[]{myObject})[0].fields.getMap() to return a map of fields.",
            "D": "Use Schema.getGlobalDescribe().get(myObject).getDescribe().fields.getMap() to return a map of fields."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>动态获取字段元数据的两种方式：<br>1. <strong>Global Describe (D)</strong>: <code>Schema.getGlobalDescribe().get('ObjName').getDescribe().fields.getMap()</code>。<br>2. <strong>describeSObjects (C)</strong>: <code>Schema.describeSObjects(new String[]{'ObjName'})[0].fields.getMap()</code>。<br>❌ A/B: 语法错误。"
    },
    {
        "id": 49,
        "title": "How should a developer avoid hitting the governor limits in test methods?",
        "code": "",
        "options": {
            "A": "Use @TestVisible on methods that create records.",
            "B": "Use Test.loadData() to load data from a static resource.",
            "C": "Use @isTest(SeeAllData=true) to use existing data.",
            "D": "Use Test.startTest() to reset governor limits."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在测试方法中，使用 <code>Test.startTest()</code> 和 <code>Test.stopTest()</code> 包裹被测代码。<br><code>Test.startTest()</code> 会为这部分代码提供一套<strong>全新的 Governor Limits 配额</strong> (重置 Limits)，从而避免因为测试数据准备阶段消耗过多资源而导致测试失败。"
    },
    {
        "id": 50,
        "title": "Which three declarative fields are correctly mapped to variable types in Apex? (Choose three.)",
        "code": "",
        "options": {
            "A": "Number maps to Decimal",
            "B": "Number maps to Integer",
            "C": "TextArea maps to List of type String",
            "D": "Date/Time maps to Datetime",
            "E": "Checkbox maps to Boolean"
        },
        "correct": "ADE",
        "explanation": "<strong>✅ Correct Answer: A, D & E</strong><br><br><strong>🧠 解析：</strong><br>Apex 类型映射：<br>✅ <strong>Number -> Decimal (A)</strong> (即使是整数在 DB 层面也是 Number)。<br>✅ <strong>Date/Time -> Datetime (D)</strong>。<br>✅ <strong>Checkbox -> Boolean (E)</strong>。<br>❌ C: TextArea 映射为 String，不是 List。<br>❌ B: Number 不映射为 Integer。"
    },
    {
        "id": 51,
        "title": "A developer is asked to set a picklist field to 'Monitor' on any new Leads owned by a subset of Users. How should the developer implement this request?",
        "code": "",
        "options": {
            "A": "Create an after insert Lead trigger.",
            "B": "Create a before insert Lead trigger.",
            "C": "Create a Lead Workflow Rule Field Update.",
            "D": "Create a Lead formula field."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求是在记录保存前自动设置字段值。<br><strong>Before Insert Trigger</strong> 是最佳选择，因为它允许在数据写入数据库之前修改记录本身，无需额外的 DML 语句。<br>❌ A: After Insert 需要额外的 Update DML，效率低。<br>❌ C: Workflow 规则对复杂的“用户子集”逻辑支持不如 Apex 灵活。<br>❌ D: Formula 字段只读，不能设置值。"
    },
    {
        "id": 52,
        "title": "Why would a developer consider using a custom controller over a controller extension?",
        "code": "",
        "options": {
            "A": "To increase the SOQL query governor limits.",
            "B": "To implement all of the logic for a page and bypass default Salesforce functionality.",
            "C": "To leverage built-in functionality of a standard controller.",
            "D": "To enforce user sharing settings and permissions."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>Custom Controller (自定义控制器)</strong> 完全由开发者编写，不继承标准功能。<br>它的主要用途是当你希望<strong>完全控制页面逻辑</strong>，或者需要绕过标准 Salesforce 行为时。<br>❌ C: 这是 Controller Extension 的用途。"
    },
    {
        "id": 53,
        "title": "A developer wants to override a button using Visualforce on an object. What is the requirement?",
        "code": "",
        "options": {
            "A": "The controller or extension must have a PageReference method.",
            "B": "The standardController attribute must be set to the object.",
            "C": "The action attribute must be set to a controller method.",
            "D": "The object record must be instantiated in a controller or extension."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>要重写标准按钮 (如 New, Edit)，Visualforce 页面必须与该对象关联。<br>实现方式是在 <code>&lt;apex:page&gt;</code> 标签中设置 <strong>standardController=\"ObjectName\"</strong>。<br>❌ A/C/D: 均非必要条件。"
    },
    {
        "id": 54,
        "title": "A Lead object has a custom field Prior_Email__c. The following trigger is intended to copy the current Email into the Prior_Email__c field any time the Email field is changed. Which type of exception will this trigger cause?",
        "code": "trigger test on Lead (before update) {\n  for (Lead ld : trigger.new) {\n    if (ld.Email != trigger.oldMap.get(ld.Id).Email)\n      ld.Prior_Email__c = trigger.oldMap.get(ld.Id).Email;\n    update ld; // ⚠️ Problem here\n  }\n}",
        "options": {
            "A": "A null reference exception",
            "B": "A compile time exception",
            "C": "A DML exception",
            "D": "A limit exception when doing a bulk update"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 <strong>Before Update</strong> 触发器中，你不应该 (也不能) 对正在处理的 <code>Trigger.new</code> 记录再次执行 <code>update</code> DML 操作。<br>这会导致 <strong>System.DmlException</strong> (通常显示为自引用错误或递归错误)。<br>正确做法是直接赋值 <code>ld.Prior_Email__c = ...</code>，系统会在触发器结束后自动保存更改。"
    },
    {
        "id": 55,
        "title": "How should a developer create a new custom exception class?",
        "code": "",
        "options": {
            "A": "public class CustomException extends Exception {}",
            "B": "CustomException ex = new (CustomException)Exception();",
            "C": "public class CustomException implements Exception {}",
            "D": "(Exception) CustomException ex = new Exception();"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中，自定义异常类必须<strong>继承 (extends)</strong> 系统内置的 <code>Exception</code> 类。<br>语法：<code>public class MyException extends Exception {}</code>。<br>❌ C: Exception 是类不是接口，不能 implements。"
    },
    {
        "id": 56,
        "title": "Which two number expressions evaluate correctly? (Choose two.)",
        "code": "",
        "options": {
            "A": "Double d = 3.14159;",
            "B": "Integer i = 3.14159;",
            "C": "Decimal d = 3.14159;",
            "D": "Long l = 3.14159;"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>带小数点的数值只能赋值给浮点类型。<br>✅ <strong>Double (A)</strong>: 双精度浮点。<br>✅ <strong>Decimal (C)</strong>: 高精度小数 (Salesforce 推荐用于货币/计算)。<br>❌ B/D: Integer 和 Long 只能存储整数。"
    },
    {
        "id": 57,
        "title": "How can a developer set up a debug log on a specific user?",
        "code": "",
        "options": {
            "A": "It is not possible to setup debug logs for users other than yourself.",
            "B": "Ask the user for access to their account credentials, log in as the user and debug the issue.",
            "C": "Create Apex code that logs code actions into a custom object.",
            "D": "Set up a trace flag for the user, and define a logging level and time period for the trace."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>标准做法是在 Setup 中设置 <strong>Debug Logs</strong>。<br>你需要为目标用户创建一个 <strong>Trace Flag</strong>，并指定生效时间段和日志级别 (Debug Level)。"
    },
    {
        "id": 58,
        "title": "A developer needs to create a Visualforce page that displays Case data. The page will be used by both support reps and support managers. The Support Rep profile does not allow visibility of the Customer_Satisfaction__c field, but the Support Manager profile does. How can the developer create the page to enforce Field Level Security and keep future maintenance to a minimum?",
        "code": "",
        "options": {
            "A": "Create one Visualforce Page for use by both profiles.",
            "B": "Use a new Support Manager permission set.",
            "C": "Create a separate Visualforce Page for each profile.",
            "D": "Use a custom controller that has the with sharing keywords."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 的标准组件 (如 <code>apex:inputField</code>) 会自动遵循 <strong>字段级安全性 (FLS)</strong>。<br>如果用户没有字段权限，该字段会自动隐藏。<br>因此，只需创建一个页面 (A) 即可自动适应不同 Profile 的权限，维护成本最低。<br>❌ C: 创建两个页面增加了维护成本。"
    },
    {
        "id": 59,
        "title": "When an Account's custom picklist field called Customer Sentiment is changed to a value of “Confused“, a new related Case should automatically be created. Which two methods should a developer use to create this case? (Choose two.)",
        "code": "",
        "options": {
            "A": "Process Builder",
            "B": "Apex Trigger",
            "C": "Custom Button",
            "D": "Workflow Rule"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>需求：自动创建记录。<br>✅ <strong>Process Builder (A)</strong>: 支持“创建记录”动作。<br>✅ <strong>Apex Trigger (B)</strong>: 代码万能，可实现。<br>❌ D: Workflow Rule 只能做字段更新、发邮件、发 Outbound Message、创建 Task，<strong>不支持创建任意记录</strong>。<br>❌ C: 按钮需要人工点击。"
    },
    {
        "id": 60,
        "title": "What are three characteristics of static methods? (Choose three.)",
        "code": "",
        "options": {
            "A": "Initialized only when a class is loaded",
            "B": "A static variable outside of the scope of an Apex transaction",
            "C": "Allowed only in outer classes",
            "D": "Allowed only in inner classes",
            "E": "Excluded from the view state for a Visualforce page"
        },
        "correct": "ACE",
        "explanation": "<strong>✅ Correct Answer: A, C & E</strong><br><br><strong>🧠 解析：</strong><br>静态成员特点：<br>1. <strong>类加载时初始化 (A)</strong>。<br>2. <strong>仅允许在顶层类/外部类定义 (C)</strong> (Inner Class 不能有 static 成员)。<br>3. <strong>不计入 View State (E)</strong>。<br>❌ B: 静态变量生命周期仅限于当前事务，不会跨事务持久化。"
    },
    {
        "id": 61,
        "title": "What are two uses for External IDs? (Choose two.)",
        "code": "",
        "options": {
            "A": "To create relationships between records imported from an external system",
            "B": "To create a record in a development environment with the same Salesforce ID as in another environment",
            "C": "To identify the sObject type in Salesforce",
            "D": "To prevent an import from creating duplicate records using Upsert"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>External ID (外部ID) 的两大核心功能：<br>1. <strong>Upsert 去重 (D)</strong>: 在数据导入时，通过匹配 External ID 决定是插入新记录还是更新旧记录，防止重复。<br>2. <strong>建立关联 (A)</strong>: 导入数据时，通过引用父记录的 External ID 自动建立父子关系，而无需知道 Salesforce ID。<br>❌ B: Salesforce ID 无法在不同环境间强制一致。<br>❌ C: 与对象类型识别无关。"
    },
    {
        "id": 62,
        "title": "A developer wrote a unit test to confirm that a custom exception works properly in a custom controller, but the test failed due to an exception being thrown. Which step should the developer take to resolve the issue and properly test the exception?",
        "code": "",
        "options": {
            "A": "Use try/catch within the unit test to catch the exception.",
            "B": "Use the finally block within the unit test to populate the exception.",
            "C": "Use the database methods with all or none set to FALSE.",
            "D": "Use Test.isRunningTest() within the custom controller."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>测试预期异常的标准方法是：<br>在测试方法中将可能抛出异常的代码包裹在 <code>try/catch</code> 块中。<br>如果异常抛出，进入 <code>catch</code> 块，并在此处使用 <code>System.assert</code> 验证异常类型或消息是否符合预期。<br>❌ B/C/D 均无法正确捕获并验证异常。"
    },
    {
        "id": 63,
        "title": "Which SOQL query successfully returns the Accounts grouped by name?",
        "code": "",
        "options": {
            "A": "SELECT Type, Max(CreatedDate) FROM Account GROUP BY Name",
            "B": "SELECT Name, Max(CreatedDate) FROM Account GROUP BY Name",
            "C": "SELECT Id, Type, Max(CreatedDate) FROM Account GROUP BY Name",
            "D": "SELECT Type, Name, Max(CreatedDate) FROM Account GROUP BY Name LIMIT 5"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>SOQL Group By 规则</strong>：<br>SELECT 子句中只能包含：<br>1. <strong>被分组的字段</strong> (即出现在 GROUP BY 后的字段，如 Name)。<br>2. <strong>聚合函数</strong> (如 MAX, SUM, COUNT)。<br>❌ A/C/D: Type 和 Id 既没有被分组也没有被聚合，因此是非法查询。"
    },
    {
        "id": 64,
        "title": "For which three items can a trace flag be configured? (Choose three.)",
        "code": "",
        "options": {
            "A": "Apex Trigger",
            "B": "Apex Class",
            "C": "Process Builder",
            "D": "User",
            "E": "Visualforce"
        },
        "correct": "ABD",
        "explanation": "<strong>✅ Correct Answer: A, B & D</strong><br><br><strong>🧠 解析：</strong><br>Trace Flag (跟踪标志) 可以配置在以下对象上以生成调试日志：<br>✅ <strong>User (D)</strong>: 记录特定用户的所有操作。<br>✅ <strong>Apex Class (B)</strong>: 记录特定类的执行。<br>✅ <strong>Apex Trigger (A)</strong>: 记录特定触发器的执行。<br>❌ C/E: 无法直接为 Process Builder 或 VF 页面配置，通常是通过用户级别的日志来查看。"
    },
    {
        "id": 65,
        "title": "A developer is asked to create a custom Visualforce page that will be used as a dashboard component. Which three are valid controller options for this page? (Choose three.)",
        "code": "",
        "options": {
            "A": "Use a standard controller.",
            "B": "Use a standard controller with extensions.",
            "C": "Use a custom controller with extensions.",
            "D": "Do not specify a controller.",
            "E": "Use a custom controller."
        },
        "correct": "ABE",
        "explanation": "<strong>✅ Correct Answer: A, B & E</strong><br><br><strong>🧠 解析：</strong><br>作为仪表板组件的 VF 页面支持以下控制器模式：<br>✅ <strong>Standard Controller (A)</strong>。<br>✅ <strong>Standard Controller + Extension (B)</strong>。<br>✅ <strong>Custom Controller (E)</strong>。<br>❌ D: 必须指定控制器。<br>❌ C: \"Custom Controller with Extensions\" 这种组合在 Salesforce 中很少作为标准选项提及，且仪表板组件对此有限制。"
    },
    {
        "id": 66,
        "title": "A Platform Developer needs to implement a declarative solution that will display the most recent Closed Won date for all Opportunity records associated with an Account. Which field is required to achieve this declaratively?",
        "code": "",
        "options": {
            "A": "Roll-up summary field on the Opportunity object",
            "B": "Cross-object formula field on the Opportunity object",
            "C": "Roll-up summary field on the Account object",
            "D": "Cross-object formula field on the Account object"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求：在父对象 (Account) 上聚合子对象 (Opportunity) 的数据。<br>标准方案：在 <strong>Account (父)</strong> 上创建 <strong>Roll-up Summary Field</strong>，选择聚合函数 MAX(CloseDate)，并添加过滤条件 (Stage = 'Closed Won')。<br>❌ A: Roll-up 只能建在主对象上。<br>❌ B/D: Formula 无法进行多记录聚合。"
    },
    {
        "id": 67,
        "title": "Which three statements are true regarding the @isTest annotation? (Choose three.)",
        "code": "",
        "options": {
            "A": "A method annotated @isTest(SeeAllData=true) in a class annotated @isTest(SeeAllData=false) has access to all org data",
            "B": "A method annotated @isTest(SeeAllData=false) in a class annotated @isTest(SeeAllData=true) has access to all org data",
            "C": "A class containing test methods counts toward the Apex code limit regardless of any @isTest annotation",
            "D": "Products and Pricebooks are visible in a test even if a class is annotated @isTest(SeeAllData=false)",
            "E": "Profiles are visible in a test even if a class is annotated @isTest(SeeAllData=false)"
        },
        "correct": "ABE",
        "explanation": "<strong>✅ Correct Answer: A, B & E</strong><br><br><strong>🧠 解析：</strong><br>✅ <strong>A</strong>: 方法级的 <code>SeeAllData=true</code> 可以覆盖类级的 false。<br>✅ <strong>B</strong>: 类级一旦开启 <code>true</code>，就像大门打开，方法级的 false 无效，依然能访问数据。<br>✅ <strong>E</strong>: <strong>Profile (元数据)</strong> 始终可见，无论注解如何。<br>❌ C: 测试代码不计入 6MB 代码限制。<br>❌ D: Product/Pricebook 是业务数据，在默认隔离模式下不可见。"
    },
    {
        "id": 68,
        "title": "What is the data type returned by the following SOSL search?",
        "code": "[FIND \"Acme*\" IN NAME FIELDS RETURNING Account, Opportunity];",
        "options": {
            "A": "List<List<Account>, List<Opportunity>>",
            "B": "Map<sObject, sObject>",
            "C": "List<List<sObject>>",
            "D": "Map<Id, sObject>"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>SOSL 查询始终返回 <code>List&lt;List&lt;sObject&gt;&gt;</code>。<br>这是一个列表的列表：外层列表包含每个对象的搜索结果列表。<br>❌ A: 语法错误。<br>❌ B/D: SOSL 不返回 Map。"
    },
    {
        "id": 69,
        "title": "A company wants to create an employee rating program that allows employees to rate each other. An employee's average rating must be displayed on the employee record. Employees must be able to create rating records, but are not allowed to create employee records. Which two actions should a developer take to accomplish this task? (Choose two.)",
        "code": "",
        "options": {
            "A": "Create a trigger on the Rating object that updates a field on the Employee object.",
            "B": "Create a lookup relationship between the Rating and Employee object.",
            "C": "Create a roll-up summary field on the Employee and use AVG to calculate the average rating score.",
            "D": "Create a master-detail relationship between the Rating and Employee objects."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>关键限制：<strong>员工不能创建 Employee 记录</strong>。<br>这排除了 Master-Detail (D)，因为子记录创建者必须拥有主记录的读/写/创建权限。<br>因此只能用 <strong>Lookup (B)</strong>。<br>由于 Lookup 不支持 Roll-up Summary，且 Roll-up 不支持 AVG (C)，所以必须用 <strong>Trigger (A)</strong> 来计算平均分。"
    },
    {
        "id": 70,
        "title": "Which two SOSL searches will return records matching search criteria contained in any of the searchable text fields on an object? (Choose two.)",
        "code": "",
        "options": {
            "A": "[FIND 'Acme*' IN ANY FIELDS RETURNING Account, Opportunity];",
            "B": "[FIND 'Acme*' RETURNING Account, Opportunity];",
            "C": "[FIND 'Acme*' IN ALL FIELDS RETURNING Account, Opportunity];",
            "D": "[FIND 'Acme*' IN TEXT FIELDS RETURNING Account, Opportunity];"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>搜索所有字段的标准 SOSL 语法是 <code>IN ALL FIELDS</code>。<br>如果省略范围子句 (如选项 B)，默认行为也是 <code>IN ALL FIELDS</code>。<br>❌ A/D: <code>IN ANY FIELDS</code> 和 <code>IN TEXT FIELDS</code> 是无效语法。"
    },
    {
        "id": 71,
        "title": "For which example task should a developer use a trigger rather than a workflow rule?",
        "code": "",
        "options": {
            "A": "To set the Name field of an expense report record to \"Expense\" and the Date when it is saved",
            "B": "To send an email to a hiring manager when a candidate accepts a job offer",
            "C": "To notify an external system that a record has been modified",
            "D": "To set the primary Contact on an Account record when it is saved"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Apex Trigger 适合处理复杂的跨对象逻辑。<br>D 选项需要在保存 Account 时，去查询并设置 Primary Contact (子记录或相关记录逻辑)，这是 Workflow 无法实现的 (Workflow 只能更新自身或父记录，且无法 Query)。<br>❌ A/B: 均可通过 Workflow Field Update / Email Alert 实现。<br>❌ C: 可通过 Workflow Outbound Message 实现。"
    },
    {
        "id": 72,
        "title": "Which feature should a developer use to update an inventory count on related Product records when the status of an Order is modified to indicate it is fulfilled?",
        "code": "",
        "options": {
            "A": "Process Builder process",
            "B": "Lightning component",
            "C": "Visualforce page",
            "D": "Workflow rule"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求是更新<strong>相关子记录 (Product)</strong>。<br>✅ <strong>Process Builder (A)</strong>: 支持更新相关记录 (不仅限于父记录)。<br>❌ D: Workflow Rule 只能更新自身或父记录。<br>❌ B/C: UI 组件无法在后台自动触发。"
    },
    {
        "id": 73,
        "title": "A developer has JavaScript code that needs to be called by controller functions in multiple Aura components by extending a new abstract component. Which resource in the abstract Aura component bundle allows the developer to achieve this?",
        "code": "",
        "options": {
            "A": "helper.js",
            "B": "controller.js",
            "C": "superRender.js",
            "D": "renderer.js"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>在 Aura 组件中，<strong>Helper (helper.js)</strong> 是存放可复用业务逻辑的地方。<br>当子组件继承抽象组件时，子组件的 Controller 可以调用父组件 Helper 中的方法来实现代码复用。<br>❌ B: Controller 是事件入口，不适合复用。<br>❌ C/D: Renderer 用于 DOM 渲染控制。"
    },
    {
        "id": 74,
        "title": "Which option should a developer use to create 500 Accounts and make sure that duplicates are not created for existing Account Sites?",
        "code": "",
        "options": {
            "A": "Sandbox template",
            "B": "Data Loader",
            "C": "Data Import Wizard",
            "D": "Salesforce-to-Salesforce"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>✅ <strong>Data Import Wizard (C)</strong>: 内置了简单的去重逻辑，支持根据 <strong>Account Name & Site</strong> 组合进行匹配去重。<br>❌ B: Data Loader 仅支持根据 ID 或 External ID 去重 (Upsert)，不支持 Name+Site 组合。"
    },
    {
        "id": 75,
        "title": "Which two components are available to deploy using the Metadata API? (Choose two.)",
        "code": "",
        "options": {
            "A": "Lead Conversion Settings",
            "B": "Web-to-Case",
            "C": "Web-to-Lead",
            "D": "Case Settings"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>元数据 API 支持：<br>✅ <strong>Case Settings (D)</strong>: 包含 Web-to-Case 设置。<br>✅ <strong>Lead Convert Settings (A)</strong>。<br>❌ B/C: Web-to-Case/Lead 不是独立的元数据类型名称，它们是 CaseSettings/LeadSettings 的一部分。"
    },
    {
        "id": 76,
        "title": "Which three statements are true regarding cross-object formulas? (Choose three.)",
        "code": "",
        "options": {
            "A": "Cross-object formulas can reference fields from objects that are up to 10 relationships away.",
            "B": "Cross-object formulas can reference fields from master-detail or lookup relationships.",
            "C": "Cross-object formulas can reference child fields to perform an average.",
            "D": "Cross-object formulas can expose data the user does not have access to in a record.",
            "E": "Cross-object formulas can be referenced in roll-up summary fields."
        },
        "correct": "ABD",
        "explanation": "<strong>✅ Correct Answer: A, B & D</strong><br><br><strong>🧠 解析：</strong><br>跨对象公式特点：<br>✅ <strong>A</strong>: 支持最多 10 层父级关系引用。<br>✅ <strong>B</strong>: 支持 Master-Detail 和 Lookup。<br>✅ <strong>D</strong>: 公式字段的值可能会显示用户本无权查看的父记录字段值 (需要注意安全性)。<br>❌ C: 公式无法引用子记录聚合 (需 Roll-up)。<br>❌ E: Roll-up 字段源不能是跨对象公式。"
    },
    {
        "id": 77,
        "title": "Which two statements are true about Apex code executed in Anonymous Blocks? (Choose two.)",
        "code": "",
        "options": {
            "A": "The code runs with the permissions of the user specified in the runAs() statement.",
            "B": "The code runs with the permissions of the logged in user.",
            "C": "The code runs in system mode having access to all objects and fields.",
            "D": "All DML operations are automatically rolled back.",
            "E": "Successful DML operations are automatically committed."
        },
        "correct": "BE",
        "explanation": "<strong>✅ Correct Answer: B & E</strong><br><br><strong>🧠 解析：</strong><br>匿名块 (Anonymous Block)：<br>✅ <strong>B</strong>: 以<strong>当前登录用户</strong>权限运行 (User Mode)，遵循 Sharing Rules。<br>✅ <strong>E</strong>: 执行成功后<strong>自动提交</strong>数据库更改 ( Commit)。<br>❌ A: <code>runAs()</code> 仅限测试类。<br>❌ C: 系统模式通常指 Trigger/Class without sharing。<br>❌ D: 测试方法才会自动回滚。"
    },
    {
        "id": 78,
        "title": "From which two locations can a developer determine the overall code coverage for a sandbox? (Choose two.)",
        "code": "",
        "options": {
            "A": "The Apex Test Execution page",
            "B": "The Test Suite Run panel of the Developer Console",
            "C": "The Apex classes setup page",
            "D": "The Tests tab of the Developer Console"
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>查看总体代码覆盖率的位置：<br>✅ <strong>C</strong>: Setup -> Apex Classes 页面顶部。<br>✅ <strong>D</strong>: Developer Console -> Tests 选项卡 -> Overall Code Coverage 面板。<br>❌ A: 仅显示测试执行状态。"
    },
    {
        "id": 79,
        "title": "Which two practices should be used for processing records in a trigger? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use a Map to reduce the number of SOQL calls.",
            "B": "Use @future methods to handle DML operations.",
            "C": "Use a Set to ensure unique values in a query filter.",
            "D": "Use (callout=true) to update an external system."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>Trigger 最佳实践 (批量化)：<br>✅ <strong>C</strong>: 使用 <strong>Set</strong> 收集 ID 或关键字段，用于 SOQL 过滤，避免循环查询。<br>✅ <strong>A</strong>: 使用 <strong>Map</strong> 存储查询结果，以便通过 ID 快速获取记录，避免重复查询。<br>❌ B: 不应在 Trigger 中随意使用 @future 进行普通 DML。<br>❌ D: Callout 应谨慎使用，且非处理记录的标准方式。"
    },
    {
        "id": 80,
        "title": "Which two statements are acceptable for a developer to use inside procedural loops? (Choose two.)",
        "code": "",
        "options": {
            "A": "delete contactList;",
            "B": "contactList.remove(i);",
            "C": "Contact con = new Contact();",
            "D": "Account a = [SELECT Id, Name FROM Account WHERE Id = :con.AccountId LIMIT 1];"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>循环内<strong>允许</strong>的操作：<br>✅ <strong>C</strong>: 内存操作 (<code>new Contact()</code>)，不涉及数据库交互。<br>✅ <strong>B</strong>: 集合操作 (<code>remove()</code>)。<br>❌ A: <strong>DML (delete)</strong> 禁止在循环内。<br>❌ D: <strong>SOQL</strong> 禁止在循环内。"
    },
    {
        "id": 81,
        "title": "What is the debug output of the following Apex code? Decimal theValue; System.debug(theValue);",
        "code": "",
        "options": {
            "A": "0.0",
            "B": "null",
            "C": "Undefined",
            "D": "0"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中，所有未初始化的变量 (包括 Decimal, Integer, String 等) 的默认值都是 <strong>null</strong>。<br>它们不会默认被初始化为 0 或 0.0。<br>❌ A/D: Apex 不会自动赋默认值 0。<br>❌ C: Apex 中没有 Undefined 这个关键字或状态。"
    },
    {
        "id": 82,
        "title": "A developer needs to provide a way to mass edit, update, and delete records from a list view. In which two ways can this be accomplished? (Choose two.)",
        "code": "",
        "options": {
            "A": "Create a new Visualforce page and Apex Controller for the list view that provides mass edit, update, and delete functionality.",
            "B": "Download a managed package from the AppExchange that provides customizable Enhanced List Views and buttons.",
            "C": "Download an unmanaged package from the AppExchange that provides customizable mass edit, update, and delete functionality.",
            "D": "Configure the user interface and enable both inline editing and enhanced lists."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>标准列表视图支持 Inline Edit (批量编辑)，但<strong>不支持批量删除</strong>。<br>要同时满足 Mass Edit/Update/Delete：<br>✅ <strong>A</strong>: 使用自定义 Visualforce + Apex 实现全功能。<br>✅ <strong>C</strong>: AppExchange 上有许多现成的非托管包 (Unmanaged Packages) 提供此类功能，且代码可见可修改。<br>❌ D: 标准配置做不到批量删除。"
    },
    {
        "id": 83,
        "title": "Which type of code represents the Model in the MVC architecture when using Apex and Visualforce pages?",
        "code": "",
        "options": {
            "A": "A Controller Extension method that saves a list of Account records",
            "B": "Custom JavaScript that processes a list of Account records",
            "C": "A list of Account records returned from a Controller Extension method",
            "D": "A Controller Extension method that uses SOQL to query for a list of Account records"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>MVC 对应关系：<br>🔹 <strong>Model (数据)</strong>: 数据库对象、字段、记录 (如 Account 列表)。<br>🔹 <strong>View (界面)</strong>: Visualforce Page。<br>🔹 <strong>Controller (逻辑)</strong>: Apex Class / Controller Extension。<br>❌ A/D: 属于 Controller 层逻辑。<br>❌ B: 属于 View 层脚本。"
    },
    {
        "id": 84,
        "title": "Requirements state that a child record is deleted when its parent is deleted, and a child can be moved to a different parent when necessary. Which type of relationship should be built between the parent and child objects in Schema builder to support these requirements?",
        "code": "",
        "options": {
            "A": "Master-Detail relationship",
            "B": "Child relationship",
            "C": "Lookup relationship from the parent to the child",
            "D": "Lookup relationship from the child to the parent"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求分析：<br>1. <strong>级联删除 (Cascade Delete)</strong>: 父删子必删 -> 这是 <strong>Master-Detail</strong> 的典型特征。<br>2. <strong>重设父记录 (Reparenting)</strong>: Master-Detail 关系中有一个可选项 \"Allow Reparenting\"，勾选后即可将子记录移动给其他父记录。<br>❌ C/D: Lookup 不支持级联删除。"
    },
    {
        "id": 85,
        "title": "Which tag should a developer include when styling from external CSS is required in a Visualforce page?",
        "code": "",
        "options": {
            "A": "apex:includeStyles",
            "B": "apex:includeScript",
            "C": "apex:require",
            "D": "apex:stylesheet"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Visualforce 中引入外部 CSS 文件的标准标签是 <strong>&lt;apex:stylesheet&gt;</strong>。<br>通常配合 <code>value=\"{!URLFOR($Resource.Name, 'style.css')}\"</code> 使用。<br>❌ B: <code>apex:includeScript</code> 用于引入 JS。<br>❌ A: 不存在此标签。"
    },
    {
        "id": 86,
        "title": "Managed Packages can be created in which type of org?",
        "code": "",
        "options": {
            "A": "Developer Sandbox",
            "B": "Partial Copy Sandbox",
            "C": "Unlimited Edition",
            "D": "Developer Edition"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>创建 <strong>Managed Package (托管包)</strong> 必须在注册了命名空间 (Namespace) 的 <strong>Developer Edition</strong> 组织中进行。<br>❌ A/B: Sandbox 无法创建托管包，只能测试。<br>❌ C: 生产环境 (如 UE, EE) 只能安装包，不能创建托管包。"
    },
    {
        "id": 87,
        "title": "A developer has the following class and trigger code. Which code segment should a developer insert at the XXX to set the baseCost variable to the value of the class variable smokerCharge?",
        "code": "public class InsuranceRates {\n    public static final Decimal smokerCharge = 0.01;\n}\ntrigger ContactTrigger on Contact (before insert) {\n    InsuranceRates rates = new InsuranceRates();\n    Decimal baseCost = XXX;\n}",
        "options": {
            "A": "InsuranceRates.smokerCharge",
            "B": "rates.getSmokeCrharge()",
            "C": "ContactTrigger.lnsurancReates.smokeCrharge",
            "D": "rates.smokerCharge"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br><code>smokerCharge</code> 是一个 <strong>static (静态)</strong> 变量。<br>在 Apex 中，访问静态变量必须使用 <strong>类名.变量名</strong> 的方式，即 <code>InsuranceRates.smokerCharge</code>。<br>❌ D: 不能通过实例对象 (rates) 访问静态变量，这是 Java/Apex 的语法规则。"
    },
    {
        "id": 88,
        "title": "A developer can use the debug log to see which three types of information? (Choose three.)",
        "code": "",
        "options": {
            "A": "HTTP callouts to external systems",
            "B": "Database changes",
            "C": "Resource usage and limits",
            "D": "User login events",
            "E": "Actions triggered by time-based workflow"
        },
        "correct": "ABC",
        "explanation": "<strong>✅ Correct Answer: A, B & C</strong><br><br><strong>🧠 解析：</strong><br>Debug Log 包含：<br>✅ <strong>A</strong>: Callout 事件 (请求/响应状态)。<br>✅ <strong>B</strong>: DML 操作 (Database) 细节。<br>✅ <strong>C</strong>: Governor Limits 使用情况 (Profiling)。<br>❌ D: 登录事件在 Login History 中查看。<br>❌ E: 基于时间的工作流通常在 System 用户下运行，不在当前用户的 Debug Log 中 (除非专门设 Trace)。"
    },
    {
        "id": 89,
        "title": "Which three data types can be returned from an SOQL statement? (Choose three)",
        "code": "",
        "options": {
            "A": "Boolean",
            "B": "List of sObjects",
            "C": "Single sObject",
            "D": "Integer",
            "E": "String"
        },
        "correct": "BCD",
        "explanation": "<strong>✅ Correct Answer: B, C & D</strong><br><br><strong>🧠 解析：</strong><br>SOQL 返回类型：<br>✅ <strong>B</strong>: <code>List&lt;Account&gt;</code> (最常见)。<br>✅ <strong>C</strong>: <code>Account</code> (当使用 LIMIT 1 且赋值给单变量时)。<br>✅ <strong>D</strong>: <code>Integer</code> (当使用 <code>COUNT()</code> 聚合查询时)。<br>❌ A/E: SOQL 不会直接返回 Boolean 或 String (需通过字段访问)。"
    },
    {
        "id": 90,
        "title": "The Review__c object has a lookup relationship up to the Job_Application__c object. The Job_Application__c object has a master-detail relationship up to the Position__c object. The relationship field names are based on the auto-populated defaults. What is the recommended way to display field data from the related Position__c record on a Visualforce page for a single Review__c record?",
        "code": "",
        "options": {
            "A": "Use the Standard Controller for Review__c and cross-object Formula Fields on the Position__c object to display Position__c data.",
            "B": "Use the Standard Controller for Job_Application__c and a Controller Extension to query for Position__c data.",
            "C": "Use the Standard Controller for Job_Application__c and cross-object Formula Fields on the Review__c object to display Position__c data.",
            "D": "Use the Standard Controller for Review__c and expression syntax in the Page to display related Position__c data through the Job_Application__c object."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 支持通过关系名 (Relationship Name) 进行跨对象引用。<br>对于标准控制器 <code>Review__c</code>，可以直接使用表达式：<br><code>{!Review__c.Job_Application__r.Position__r.Name}</code><br>这是最简单、最高效的方法，无需创建额外字段或编写 Apex 查询。<br>❌ A/C: 创建公式字段增加了元数据维护成本。<br>❌ B: 控制器扩展需要写代码，非必要。"
    },
    {
        "id": 91,
        "title": "Which action can a developer take to reduce the execution time of the following code? List<Account> allAccounts = [SELECT Id FROM Account]; List<Contact> allContacts = [SELECT Id, AccountId FROM Contact]; for (Account a : allAccounts) { for (Contact c : allContacts) { if (c.AccountId == a.Id) { // do work } } }",
        "code": "",
        "options": {
            "A": "Put the Account loop inside the Contact loop.",
            "B": "Create an Apex helper class to SOQL.",
            "C": "Add a GROUP BY clause to the Contact SOQL.",
            "D": "Use a Map<Id, List<Contact>> for allContacts."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>原代码是嵌套循环，时间复杂度为 <strong>O(N*M)</strong>，效率极低。<br>最佳实践是将 Contact 数据组织到 <strong>Map&lt;Id, List&lt;Contact&gt;&gt;</strong> 中 (Key 是 AccountId)。<br>这样在遍历 Account 时，可以直接通过 ID 从 Map 中获取对应的 Contact 列表，时间复杂度降为 <strong>O(N+M)</strong>。<br>❌ A: 交换循环顺序并不能降低复杂度。<br>❌ C: GROUP BY 用于聚合，不适合获取明细列表。"
    },
    {
        "id": 92,
        "title": "Given the code below, what can be done so that recordCount can be accessed by a test class, but not by a non-test class? public class MyController { private Integer recordCount; }",
        "code": "",
        "options": {
            "A": "Change recordCount from private to public.",
            "B": "Add the @SeeAllData annotation to the test class.",
            "C": "Add the @TestVisible annotation to recordCount.",
            "D": "Add the @TestVisible annotation to the MyController class."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>@TestVisible</strong> 注解专门用于让测试类能够访问 <code>private</code> 或 <code>protected</code> 的成员变量/方法。<br>这对非测试代码依然保持不可见。<br>❌ A: 改为 public 会对所有类可见。<br>❌ B: SeeAllData 仅影响数据可见性。"
    },
    {
        "id": 93,
        "title": "Which message is logged by the code below?",
        "code": "try {\n  List<Id> idList;\n  Account a;\n  insert a;\n  idList.add(acctId);\n} catch (ListException le) {\n  System.debug('ListException le');\n} catch (NullPointerException npe) {\n  System.debug('NullPointerException npe');\n} catch (Exception e) {\n  System.debug('Exception e');\n}",
        "options": {
            "A": "Generic Exception",
            "B": "List Exception",
            "C": "NullPointer Exception",
            "D": "No message is logged"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>变量 <code>Account a;</code> 被声明但未初始化，默认为 <strong>null</strong>。<br>执行 <code>insert a;</code> 时会抛出 <strong>NullPointerException</strong>。<br>程序流程会跳转到 <code>catch (NullPointerException npe)</code> 块，输出对应的日志。<br>后续的 <code>idList.add</code> 不会被执行。"
    },
    {
        "id": 94,
        "title": "Which governor limit applies to all the code in an Apex transaction?",
        "code": "",
        "options": {
            "A": "Elapsed SOQL query time",
            "B": "Number of classes called",
            "C": "Number of new records created",
            "D": "Elapsed CPU time"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br><strong>CPU Time (CPU 耗时)</strong> 是针对整个事务 (Transaction) 的全局限制。<br>它统计了该事务中所有 Apex 代码、触发器、Flow 等在服务器上执行所消耗的 CPU 时间总和。<br>❌ A: 没有 SOQL 耗时限制，只有查询行数 (Query Rows) 和次数 (Queries) 限制。<br>❌ C: 只有 DML 语句数和 DML 记录数限制。"
    },
    {
        "id": 95,
        "title": "An Apex transaction inserts 100 Account records and 2,000 Contact records before encountering a DML exception when attempting to insert 500 Opportunity records. The Account records are inserted by calling the database.insert() method with the allOrNone argument set to false. The Contact and Opportunity records are inserted using the standalone insert statement. How many total records will be committed to the database in this transaction?",
        "code": "",
        "options": {
            "A": "2,000",
            "B": "2,100",
            "C": "0",
            "D": "100"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 事务中，如果出现<strong>未捕获的异常 (Uncaught Exception)</strong>，整个事务会<strong>回滚 (Rollback)</strong>。<br>虽然 Account 使用了 <code>allOrNone=false</code>，但这只是允许 Account 列表内部部分成功。<br>一旦后续的 Opportunity 插入抛出异常且未被 Catch，整个事务 (包括之前的 Account 和 Contact) 都会回滚，因此提交记录数为 0。"
    },
    {
        "id": 96,
        "title": "The sales team at Universal Containers would like to see a visual indicator appear on both Account and Opportunity page layouts to alert salespeople when an Account is late making payments or has entered the collections process. What can a developer implement to achieve this requirement without having to write custom code?",
        "code": "",
        "options": {
            "A": "Formula Field",
            "B": "Workflow Rule",
            "C": "Quick Action",
            "D": "Roll-up Summary Field"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>要在页面上显示<strong>视觉指示器 (Visual Indicator)</strong> (如红绿灯、图标)，最简单的无代码方案是使用 <strong>Formula Field</strong> 结合 <code>IMAGE()</code> 函数。<br>Opportunity 还可以通过跨对象公式直接引用 Account 的状态。<br>❌ B/C/D: 均不支持在页面直接显示视觉图标。"
    },
    {
        "id": 97,
        "title": "Which is a valid Apex assignment?",
        "code": "",
        "options": {
            "A": "Integer x=5*1.0;",
            "B": "Integer x =5.0;",
            "C": "Double x =5;",
            "D": "Float x =5.0;"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>✅ <strong>C</strong>: 整数 5 可以赋值给更宽的 <strong>Double</strong> 类型。<br>❌ A/B: 带小数点的数值 (如 1.0, 5.0) 是 Decimal/Double 类型，不能赋值给 Integer。<br>❌ D: Apex 没有 Float 类型。"
    },
    {
        "id": 98,
        "title": "The Account object has a custom Percent field, Rating, defined with a length of 2 with 0 decimal places. An Account record has the value of 50% in its Rating field and is processed in the Apex code below after being retrieved from the database with SOQL. What is the value of acctScore after this code executes?",
        "code": "public void processAccount() {\n    Decimal accScore = acct.Rating__c * 100;\n    // ...\n}",
        "options": {
            "A": "5",
            "B": "50",
            "C": "500",
            "D": "5000"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>这是一个特殊的陷阱题。<br>通常 Percent 字段存储小数 (50% -> 0.5)。<br>但题目强调字段定义为 <strong>长度 2，小数位 0</strong>。这意味着数据库实际存储的是<strong>整数 50</strong>。<br>因此 Apex 取到的值是 50.0。<br>计算：<code>50 * 100 = 5000</code>。"
    },
    {
        "id": 99,
        "title": "Which situation prevents a developer from setting sharing rules for a custom object?",
        "code": "",
        "options": {
            "A": "The object's Sharing Settings is set to Public Read/Write.",
            "B": "The object is on the detail side of a Master-Detail relationship.",
            "C": "The developer is not a System Administrator.",
            "D": "The object is referenced in an Owner field of a Master-Detail relationship."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>在 <strong>Master-Detail</strong> 关系中，子对象 (Detail) <strong>没有自己的 Owner</strong>，它的所有权和共享权限完全继承自父对象 (Master)。<br>因此，不能为子对象单独设置 Sharing Rules。<br>❌ A: OWD 设置不影响创建规则的能力 (只是规则可能无实际效果)。"
    },
    {
        "id": 100,
        "title": "A developer wants to store a description of a product that can be entered on separate lines by a user during product setup and later displayed on a Visualforce page for shoppers. Which field type should the developer choose to ensure that the description will be searchable in the custom Apex SOQL queries that are written?",
        "code": "",
        "options": {
            "A": "Text Area",
            "B": "Text",
            "C": "Text Area (Long)",
            "D": "Text Area (Rich)"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：支持多行输入 + <strong>SOQL 可搜索 (Searchable in SOQL)</strong>。<br>✅ <strong>A (Text Area)</strong>: 支持多行，且能在 SOQL WHERE 子句中使用。<br>❌ C/D (Long/Rich): 虽然支持更多内容，但 Salesforce 限制这些字段<strong>不能在 SOQL WHERE 子句中直接搜索</strong> (只能用 SOSL)。<br>❌ B: Text 是单行。"
    },
    {
        "id": 101,
        "title": "A developer wants multiple test classes to use the same set of test data. How should the developer create the test data?",
        "code": "",
        "options": {
            "A": "Reference a test utility class in each test class.",
            "B": "Define variables for test records in each test class.",
            "C": "Create a Test Setup method for each test class.",
            "D": "Use the SeeAllData=true annotation in each test class."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>跨测试类共享数据的最佳实践是使用 <strong>Test Utility Class (测试工具类)</strong>。<br>在该类中定义静态方法来创建并返回常用的测试数据，供所有测试类调用。<br>❌ B/C: 代码重复或仅限单个类内共享。<br>❌ D: SeeAllData=true 依赖真实数据，反模式。"
    },
    {
        "id": 102,
        "title": "A developer wants to display all of the picklist entries for the Opportunity StageName field and all of the available record types for the Opportunity object on a Visualforce page. Which two actions should the developer perform to get the available picklist values and record types in the controller? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use Schema.RecordTypeInfo returned by Opportunity.SObjectType.getDescribe().getRecordTypeInfos()",
            "B": "Use Schema.PicklistEntry returned by Opportunity.SObjectType.getDescribe().getPicklistValues()",
            "C": "Use Schema.RecordTypeInfo returned by RecordType.SObjectType.getDescribe().getRecordTypeInfos()",
            "D": "Use Schema.PicklistEntry returned by Opportunity.StageName.getDescribe().getPicklistValues()"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>Schema Describe 使用规则：<br>1. <strong>获取 RecordType (A)</strong>: 作用于对象级别 -> <code>Opportunity.SObjectType.getDescribe().getRecordTypeInfos()</code>。<br>2. <strong>获取 Picklist 值 (D)</strong>: 作用于字段级别 -> <code>Opportunity.StageName.getDescribe().getPicklistValues()</code>。<br>❌ B: 对象级别无法直接获取字段 Picklist。<br>❌ C: 获取的是 RecordType 对象本身的元数据，而非 Opportunity 的记录类型。"
    },
    {
        "id": 103,
        "title": "In order to override a standard action with a Visualforce page, which attribute must be defined in the <apex:page> tag?",
        "code": "",
        "options": {
            "A": "pageReference",
            "B": "override",
            "C": "controller",
            "D": "standardController"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>要覆盖对象的标准按钮 (如 New, Edit, View)，Visualforce 页面必须绑定该对象的 <strong>standardController</strong>。<br>例如：<code>&lt;apex:page standardController=\"Account\"&gt;</code>。<br>❌ A/B: 非法属性。<br>❌ C: 仅使用 controller 无法覆盖标准动作。"
    },
    {
        "id": 104,
        "title": "Which feature allows a developer to create test records for use in test classes?",
        "code": "",
        "options": {
            "A": "Documents",
            "B": "WebServiceTests",
            "C": "HttpCalloutMocks",
            "D": "Static Resources"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>可以使用 <strong>Static Resources (静态资源)</strong> 存储 CSV 格式的测试数据。<br>在测试类中通过 <code>Test.loadData()</code> 方法加载该资源，快速生成测试记录。<br>❌ A/B/C: 均非用于测试数据创建。"
    },
    {
        "id": 105,
        "title": "How many levels of child records can be returned in a single SOQL query from one parent object?",
        "code": "",
        "options": {
            "A": "1",
            "B": "3",
            "C": "5",
            "D": "7"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>SOQL 关系查询限制：<br>从父对象向下查询子记录 (Parent-to-Child Subquery) 最多支持 <strong>5 层</strong> 嵌套 (父对象算第 1 层)。<br>(注：Salesforce API v58.0+ 放宽至 5 层，此前版本为 1 层或 2 层，考试中选最新限制 5)。"
    },
    {
        "id": 106,
        "title": "Which two declarative process automation features can be directly invoked when a field value changes on a record? (Choose two.)",
        "code": "",
        "options": {
            "A": "Cloud Flow Designer flows",
            "B": "Process Builder processes",
            "C": "Validation rules",
            "D": "Workflow rules"
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>字段变更触发的自动化工具：<br>✅ <strong>B (Process Builder)</strong>: 可设为 \"Record is created or edited\"。<br>✅ <strong>D (Workflow Rule)</strong>: 可设为 \"created, and every time it's edited\"。<br>❌ A: 这里的 \"Cloud Flow Designer flows\" 指旧版手动 Flow，不能自动触发 (Record-Triggered Flow 是后来才有的)。<br>❌ C: 验证规则不是自动化工具。"
    },
    {
        "id": 107,
        "title": "How can a developer warn users of SOQL governor limit violations in a trigger?",
        "code": "",
        "options": {
            "A": "Use Messaging.SendEmail() to continue the transaction and send an alert to the user after the number of SOQL queries exceeds the limit.",
            "B": "Use PageReference.setRedirect() to redirect the user to a custom Visualforce page before the number of SOQL queries exceeds the limit.",
            "C": "Use Limits.getQueries() and display an error message before the number of SOQL queries exceeds the limit.",
            "D": "Use ApexMessage.Message() to display an error message after the number of SOQL queries exceeds the limit."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>一旦 Governor Limit (如 SOQL 100次) 超限，系统会抛出不可捕获的异常，事务立即终止并回滚。<br>因此，唯一的方法是<strong>在超限之前</strong>进行预防性检查。<br>使用 <code>Limits.getQueries()</code> 获取当前已用次数，接近限制时抛出自定义错误或警告。<br>❌ A/D: 超限后代码无法继续执行。"
    },
    {
        "id": 108,
        "title": "Which control statement should a developer use to ensure that a loop body executes at least once?",
        "code": "",
        "options": {
            "A": "for(init_stmt; exit_condition; increment_stmt){}",
            "B": "do { } while (condition);",
            "C": "while (condition) {}",
            "D": "for (variable : list_or_set) {}"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>do-while 循环</strong> 的特性是先执行循环体，再检查条件。<br>因此无论条件是否满足，循环体<strong>至少会执行一次</strong>。<br>❌ A/C/D: 均为先检查条件，若初始条件不满足，可能一次都不执行。"
    },
    {
        "id": 109,
        "title": "A developer creates a custom controller and custom Visualforce page by using the code block below. What can the user expect to see when accessing the custom page?",
        "code": "public class MyController {\n  public String myString {\n    get {\n      if (myString == null) { myString = 'a'; }\n      return myString;\n    }\n    private set;\n  }\n  public String getMyString() {\n    return 'getMyString';\n  }\n  public String getStringMethod() {\n    if (myString == null) { myString = 'b'; }\n    return myString;\n  }\n}\n// Page:\n{!StringMethod},{!myString},{!myString}",
        "options": {
            "A": "a,b,b",
            "B": "a,b,getMyString",
            "C": "a,a,a",
            "D": "b,a,getMyString"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>1. <code>{!StringMethod}</code>: 调用 <code>getStringMethod()</code> -> 内部访问 <code>myString</code> -> 触发属性 getter -> <code>myString</code> 为 null，赋值为 'a'，返回 'a'。<br>2. <code>{!myString}</code>: 触发 getter -> 已有值 'a'，返回 'a'。<br>3. <code>{!myString}</code>: 同上，返回 'a'。<br>最终结果: <strong>a, a, a</strong>。<br>注意: VF 优先解析属性 getter，而非同名的 getXxx 方法。"
    },
    {
        "id": 110,
        "title": "An Account trigger updates all related Contacts and Cases each time an Account is saved using the following two DML statements: update allContacts; update allCases; What is the result if the Case update exceeds the governor limit for maximum number of DML records?",
        "code": "",
        "options": {
            "A": "The Account save fails and no Contacts or Cases are updated.",
            "B": "The Account save succeeds and no Contacts or Cases are updated.",
            "C": "The Account save succeeds,Contacts are updated,but Cases are not.",
            "D": "The Account save is retried using a smaller trigger batch size."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Governor Limit 违规是致命错误。<br>一旦触发 (如 update allCases 超限)，整个事务 (Transaction) 会立即失败并<strong>回滚 (Rollback)</strong>。<br>回滚范围包括：触发器开始前的操作 (Account Save)、第一条 DML (update allContacts) 以及触发错误的操作。<br>结果：Account 保存失败，没有任何记录被更新。"
    },
    {
        "id": 111,
        "title": "A company has a custom object named Region. Each Account in Salesforce can only be related to one Region at a time, but this relationship is optional. Which type of relationship should a developer use to relate an Account to a Region?",
        "code": "",
        "options": {
            "A": "Parent-Child",
            "B": "Hierarchical",
            "C": "Lookup",
            "D": "Master-Detail"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>1对1 关系</strong> 且 <strong>可选 (Optional)</strong>。<br>✅ <strong>Lookup (查找关系)</strong>：允许父子关联，且字段可以为空 (Optional)。<br>❌ D: Master-Detail 字段默认为必填 (Required)，不符合“可选”需求。<br>❌ B: Hierarchical 仅用于 User 对象。"
    },
    {
        "id": 112,
        "title": "Given the code below, which three statements can be used to create the controller variable? (Choose three.)",
        "code": "public class AccountListController {\n  public List<Account> getAccounts() {\n    return controller.getRecords();\n  }\n}",
        "options": {
            "A": "Apexpages.standardcontroller controller = new apexpages.standardcontroller([select id from account]);",
            "B": "Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller(database.getquerylocator('select id from account'));",
            "C": "Apexpages.standardcontroller controller = new apexpages.standardcontroller(database.getquerylocator('select id from account'));",
            "D": "Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller(database.getquerylocator([select id from account]));",
            "E": "Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller(database.query('select id from account'));"
        },
        "correct": "BDE",
        "explanation": "<strong>✅ Correct Answer: B, D & E</strong><br><br><strong>🧠 解析：</strong><br>代码中使用了 <code>controller.getRecords()</code>，这是 <strong>StandardSetController</strong> 的方法。<br>StandardSetController 构造函数支持以下参数：<br>1. <strong>Database.QueryLocator</strong> (B, D)<br>2. <strong>List&lt;sObject&gt;</strong> (E)<br>❌ A/C: StandardController 不支持 getRecords()，且构造参数不支持 QueryLocator。"
    },
    {
        "id": 113,
        "title": "How can a developer get all of the available record types for the current user on the Case object?",
        "code": "",
        "options": {
            "A": "Use DescribeSObjectResult of the Case object.",
            "B": "Use SOQL to get all Cases.",
            "C": "Use DescribeFieldResult of the Case.RecordType field.",
            "D": "Use Case.getRecordTypes()."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>要获取当前用户可用的 RecordType，应使用 Schema Describe。<br>代码示例：<br><code>Schema.DescribeSObjectResult R = Case.SObjectType.getDescribe();</code><br>然后通过 <code>R.getRecordTypeInfos()</code> 获取列表，并检查 <code>isAvailable()</code>。"
    },
    {
        "id": 114,
        "title": "A developer needs to create an audit trail for records that are sent to the recycle bin. Which type of trigger is most appropriate to create?",
        "code": "",
        "options": {
            "A": "after delete",
            "B": "after undelete",
            "C": "before undelete",
            "D": "before delete"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>记录“被发送到回收站”意味着删除操作已完成。<br>✅ <strong>after delete</strong>: 记录已从数据库表中移除并进入回收站，适合记录日志。<br>❌ D: before delete 是在删除动作发生前，记录还在原处。<br>❌ B/C: undelete 是从回收站恢复。"
    },
    {
        "id": 115,
        "title": "In which three areas can a Lightning component be used in the Lightning Experience? (Choose three.)",
        "code": "",
        "options": {
            "A": "Lightning Report page",
            "B": "Lightning Connect page",
            "C": "Lightning Record Page",
            "D": "Lightning Community Page",
            "E": "Lightning Home page"
        },
        "correct": "CDE",
        "explanation": "<strong>✅ Correct Answer: C, D & E</strong><br><br><strong>🧠 解析：</strong><br>Lightning App Builder 支持将自定义组件添加到：<br>✅ <strong>C: Record Page</strong> (记录详情页)。<br>✅ <strong>E: Home Page</strong> (首页)。<br>✅ <strong>D: Community/Experience Page</strong> (社区页面)。<br>❌ A: Report 页面不可定制。<br>❌ B: Lightning Connect 是数据集成功能。"
    },
    {
        "id": 116,
        "title": "What is the impact of declaring an Apex class using the \"without sharing\" keywords?",
        "code": "",
        "options": {
            "A": "Only records owned by the current user can be updated.",
            "B": "Sharing restrictions for the current user are bypassed.",
            "C": "Records created by the class cannot have sharing rules.",
            "D": "The class can only be used by users with developer rights."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><code>without sharing</code> 关键字会强制 Apex 类在<strong>系统模式 (System Mode)</strong> 下运行，忽略当前用户的<strong>共享规则 (Sharing Rules)</strong> 限制。<br>这意味着即使用户本身没有查看某些记录的权限，代码依然可以查询和修改这些记录。"
    },
    {
        "id": 117,
        "title": "Using DescribeSObjectResult, which Apex method can a developer use to determine if the current user can edit records for an object?",
        "code": "",
        "options": {
            "A": "canUpdate()",
            "B": "canEdit()",
            "C": "isUpdateable()",
            "D": "isEditable()"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>检查对象/字段权限的标准 Describe 方法：<br>✅ <strong>isUpdateable()</strong>: 检查是否有编辑权限。<br>✅ <strong>isCreateable()</strong>: 检查是否有创建权限。<br>✅ <strong>isAccessible()</strong>: 检查是否有读取权限。<br>❌ A/B/D: 方法名不存在。"
    },
    {
        "id": 118,
        "title": "A change set deployment from a sandbox to production fails due to a failure in a managed package unit test. The developer spoke with the managed package owner and they determined it is a false positive and can be ignored. What should the developer do to successfully deploy?",
        "code": "",
        "options": {
            "A": "Select \"Run local tests\" to run all tests in the org that are not in the managed package.",
            "B": "Select \"Fast Deploy\" to run only the tests that are in the change set.",
            "C": "Select \"Run local tests\" to run only the tests that are in the change set.",
            "D": "Edit the managed package's unit test."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Managed Package 的单元测试失败通常无法由开发者修复 (代码只读)。<br>部署时选择 <strong>Run local tests</strong> 选项，系统只会运行<strong>非托管 (Unmanaged)</strong> 代码的测试，从而跳过托管包中的测试，绕过错误。<br>❌ D: 托管包测试不可编辑。"
    },
    {
        "id": 119,
        "title": "A developer needs to include a Visualforce page in the detail section of a page layout for the Account object, but does not see the page as an available option in the Page Layout Editor. Which attribute must the developer include in the <apex:page> tag to ensure the Visualforce page can be embedded in a page layout?",
        "code": "",
        "options": {
            "A": "standardController=\"Account\"",
            "B": "extensions=\"AccountController\"",
            "C": "controller=\"Account\"",
            "D": "action=\"AccountId\""
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>要将 Visualforce 页面嵌入到标准 Page Layout 中，该页面必须绑定该对象的标准控制器。<br>即：<code>&lt;apex:page standardController=\"Account\"&gt;</code>。<br>这样 Salesforce 才知道这个页面是属于 Account 的，才会显示在布局编辑器里。"
    },
    {
        "id": 120,
        "title": "Candidates are reviewed by four separate reviewers and their comments and scores which range from 1 (lowest) to 5 (highest) are stored on a review record that is a detail record for a candidate. What is the best way to indicate that a combined review score of 15 or better is required to recommend that the candidate come in for an interview?",
        "code": "",
        "options": {
            "A": "Use a Validation Rule on a total score field on the candidate record that prevents a recommended field from being true if the total score is less than 15.",
            "B": "Use a Rollup Summary field to calculate the sum of the review scores, and store this in a total score field on the candidate.",
            "C": "Use Visual Workflow to set a recommended field on the candidate whenever the cumulative review score is 15 or better.",
            "D": "Use a Workflow Rule to calculate the sum of the review scores and send an email to the hiring manager when the total is 15 or better."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求核心：计算子记录 (Review) 的总分。<br>✅ <strong>Roll-up Summary (B)</strong>: 声明式、自动实时计算子记录总和 (SUM)。这是实现此类需求的最基础、最高效步骤。<br>(注：虽然 A 也是一部分逻辑，但如果没有 B 这一步先算出总分，A 是无法实施的。题目问 best way，B 是核心基础。)"
    },
    {
        "id": 121,
        "title": "A developer needs to find information about @future methods that were invoked. From which system monitoring feature can the developer see this information?",
        "code": "",
        "options": {
            "A": "Scheduled Jobs",
            "B": "Apex Jobs",
            "C": "Background Jobs",
            "D": "Asynchronous Jobs"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>所有异步 Apex (包括 <strong>@future</strong>, Batch Apex, Queueable Apex) 的执行状态都可以在 <strong>Apex Jobs</strong> 页面监控。<br>路径：Setup -> Jobs -> Apex Jobs。<br>❌ A: Scheduled Jobs 仅显示计划任务。<br>❌ C/D: 不是标准的 Setup 菜单名称。"
    },
    {
        "id": 122,
        "title": "A developer declared a class as follows: public class wysiwyg { // properties and methods including DML } Which invocation of a class method will obey the organization-wide defaults and sharing settings for the running user in the Salesforce organization?",
        "code": "",
        "options": {
            "A": "An Apex trigger that invokes a helper method in this class",
            "B": "A developer using the Developer Console that invokes a method in this class from the execute anonymous window",
            "C": "A Visualforce page with an Apex controller that invokes a method in this class",
            "D": "A user on an external system that has an API call into Salesforce that invokes a method in this class"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>该类没有声明 <code>with sharing</code>，因此默认在 System Mode 下运行 (不遵循 Sharing Rules)。<br>但是，<strong>Execute Anonymous (匿名执行)</strong> 始终以当前用户的权限运行，并<strong>强制执行</strong> Sharing Settings，即使调用的类没有声明 sharing。<br>❌ A/C/D: 在未声明 sharing 的类中，这些场景通常以 System Mode 运行 (忽略共享规则)。"
    },
    {
        "id": 123,
        "title": "When a Task is created for a Contact, how can a developer prevent the task from being included on the Activity Timeline of the Contact's Account record?",
        "code": "",
        "options": {
            "A": "In Activity Setting, uncheck \"Roll up activities to a contact's primary account.\"",
            "B": "Create a Task trigger to set the Account field to NULL.",
            "C": "Use Process Builder to create a process to set the Task Account field to blank.",
            "D": "By default, tasks do not display on the Account Activity Timeline."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 有一个名为 \"Roll up activities to a contact's primary account\" 的活动设置。<br>默认情况下，Contact 的活动会自动显示在其主 Account 的时间轴上。<br>要阻止此行为，只需在 <strong>Setup -> Activity Settings</strong> 中取消勾选该选项即可。<br>❌ B/C: 不推荐通过清空字段来解决显示逻辑问题。"
    },
    {
        "id": 124,
        "title": "What is a benefit of using a trigger framework?",
        "code": "",
        "options": {
            "A": "Reduces trigger execution time",
            "B": "Allows functional code to be tested by a test class",
            "C": "Increases trigger governor limits",
            "D": "Simplifies addition of context-specific logic"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Trigger Framework (触发器框架) 的主要目的是将业务逻辑与触发器入口分离，并按上下文 (Before Insert, After Update 等) 组织代码。<br>✅ <strong>D</strong>: 它使添加、修改特定上下文的逻辑变得清晰简单，避免了触发器内的\"面条代码\"。<br>❌ A: 框架本身不会直接减少执行时间 (可能还会微增)。<br>❌ C: Governor Limits 是平台硬限制，无法增加。"
    },
    {
        "id": 125,
        "title": "A developer needs to save a List of existing Account records named myAccounts to the database, but the records do not contain Salesforce Id values. Only the value of a custom text field configured as an External ID with an API name of Foreign_Key__c is known. Which two statements enable the developer to save the records to the database without an Id? (Choose two.)",
        "code": "",
        "options": {
            "A": "Upsert myAccounts Foreign_Key__c;",
            "B": "Upsert myAccounts(Foreign_Key__c);",
            "C": "Database.upsert(myAccounts, Foreign_Key__c);",
            "D": "Database.upsert(myAccounts).Foreign_Key__c;"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>使用 External ID 进行 Upsert 的语法：<br>✅ <strong>A (DML 语句)</strong>: <code>upsert ListName ExternalIdField;</code><br>✅ <strong>C (Database 方法)</strong>: <code>Database.upsert(ListName, ExternalIdField);</code><br>(注：实际字段引用通常为 <code>Account.Fields.Foreign_Key__c</code>，但选项 C 是标准简写描述)。<br>❌ B/D: 语法错误。"
    },
    {
        "id": 126,
        "title": "Which standard field is required when creating a new Contact record?",
        "code": "",
        "options": {
            "A": "LastName",
            "B": "Name",
            "C": "AccountId",
            "D": "FirstName"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>在 Salesforce 标准对象 <strong>Contact</strong> 中，唯一必填的标准字段是 <strong>LastName (姓氏)</strong>。<br>❌ B: Name 是复合字段 (First + Last)。<br>❌ C: AccountId 在某些配置下非必填 (如 Private Contact)。<br>❌ D: FirstName 非必填。"
    },
    {
        "id": 127,
        "title": "An org has a data model with a Buyer__c object that has a lookup relationship to Region__c, and a Supplier__c object has a lookup relationship to Region__c. How can a developer display data from the related Supplier__c records on a Visualforce page that has a standard controller for the Buyer__c object?",
        "code": "",
        "options": {
            "A": "Use roll-up formula fields on the Buyer__c object to reference the related Supplier__c records through the Region__c",
            "B": "Use SOQL in a controller extension to query for related Supplier__c records",
            "C": "Use a second standard controller for the Region__c object on a page to display the related Supplier__c records",
            "D": "Use merge field syntax to retrieve the Supplier__c records related to the Buyer__c record through the Region__c"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Buyer__c 和 Supplier__c 是通过 Region__c <strong>间接关联</strong>的 (Sibling 关系)。<br>标准控制器只能直接访问当前记录及其直接父/子记录。<br>要访问这种间接关系数据，必须使用 <strong>Controller Extension (控制器扩展)</strong>，在 Apex 中编写 SOQL 查询：<br><code>SELECT ... FROM Supplier__c WHERE Region__c = :buyer.Region__c</code>。"
    },
    {
        "id": 128,
        "title": "What can be used to delete components from production?",
        "code": "",
        "options": {
            "A": "A change set deployment with a destructiveChanges.xml file",
            "B": "A change set deployment with the delete option checked",
            "C": "An Ant Migration Tool deployment with a destructiveChanges.xml file and an empty package.xml file",
            "D": "An Ant Migration Tool deployment with a destructiveChanges.xml file and the components to delete in the package.xml file"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>从生产环境删除元数据的标准方法是使用 <strong>destructiveChanges.xml</strong>。<br>Change Set 不支持 destructiveChanges.xml。<br>必须使用基于 Metadata API 的工具 (如 Ant Migration Tool 或 SFDX)。<br>部署包结构：包含 <code>destructiveChanges.xml</code> (列出要删的) 和一个空的 (或最小化的) <code>package.xml</code>。<br>❌ D: <code>package.xml</code> 是用来部署/新增组件的，不应包含要删除的组件。"
    },
    {
        "id": 129,
        "title": "What are three techniques that a developer can use to invoke an anonymous block of code? (Choose three.)",
        "code": "",
        "options": {
            "A": "Use the SOAP API to make a call to execute anonymous code",
            "B": "Create a Visualforce page that uses a controller class that is declared without sharing",
            "C": "Run code using the Anonymous Apex feature of the Developer's IDE",
            "D": "Type code into the Developer Console and execute it directly",
            "E": "Create and execute a test method that does not specify a runAs() call"
        },
        "correct": "ACD",
        "explanation": "<strong>✅ Correct Answer: A, C & D</strong><br><br><strong>🧠 解析：</strong><br>执行匿名 Apex (Execute Anonymous) 的途径：<br>✅ <strong>D</strong>: Developer Console (最常用)。<br>✅ <strong>C</strong>: IDE 工具 (如 VS Code, Force.com IDE)。<br>✅ <strong>A</strong>: 通过 API 调用 (Tooling API/SOAP API 的 executeAnonymous 方法)。<br>❌ B/E: 都是执行已保存的类或测试方法，不属于匿名代码块。"
    },
    {
        "id": 130,
        "title": "Which declarative process automation feature supports iterating over multiple records?",
        "code": "",
        "options": {
            "A": "Workflow rules",
            "B": "Flows",
            "C": "Validation rules",
            "D": "Approval processes"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>只有 <strong>Salesforce Flow (B)</strong> 支持循环 (Loop) 逻辑，可以遍历集合变量并在循环中处理多条记录。<br>❌ A/C/D: 均针对单条记录触发，不支持循环处理多条记录。"
    },
    {
        "id": 131,
        "title": "An after trigger on the Account object performs a DML update operation on all of the child Opportunities of an Account. There are no active triggers on the Opportunity object yet a \"maximum trigger depth exceeded\" error occurs in certain situations. Which two reasons possibly explain the Account trigger firing recursively? (Choose two.)",
        "code": "",
        "options": {
            "A": "Changes to Opportunities are causing cross-object workflow field updates to be made on the Account",
            "B": "Changes to Opportunities are causing roll-up summary fields to update on the Account",
            "C": "Changes are being made to the Account during an unrelated parallel save operation",
            "D": "Changes are being made to the Account during Criteria Based Sharing evaluation"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>Account Trigger 递归的成因：<br>Account Trigger 更新了 Opportunity (子)。<br>Opportunity 的变更又反向触发了父对象 (Account) 的更新，导致 Account Trigger 再次运行。<br>反向触发机制包括：<br>✅ <strong>A: 跨对象工作流 (Cross-object Workflow Field Update)</strong>。<br>✅ <strong>B: 汇总摘要字段 (Roll-up Summary Field)</strong> 重算。<br>❌ C/D: 不会导致触发器递归。"
    },
    {
        "id": 132,
        "title": "Which statement is true about developing in a multi-tenant environment?",
        "code": "",
        "options": {
            "A": "Apex Sharing controls access to records from multiple tenants on the same instance.",
            "B": "Org-level data security controls which users can see data from multiple tenants on the same instance.",
            "C": "Governor limits prevent Apex from impacting the performance of multiple tenants on the same instance.",
            "D": "Global Apex classes can be referenced from multiple tenants on the same instance."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>多租户 (Multi-tenant) 架构核心原则：<br>资源共享，数据隔离。<br>✅ <strong>C (Governor Limits)</strong>: 平台强制限制 CPU/内存/数据库等资源使用，防止单一租户 (Org) 独占资源，影响其他租户的性能。<br>❌ A/B/D: 租户之间是完全隔离的，无法跨 Org 访问数据或引用代码。"
    },
    {
        "id": 133,
        "title": "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
        "code": "",
        "options": {
            "A": "public void doWork(Account || Contact)",
            "B": "public void doWork(Record theRecord)",
            "C": "public void doWork(Account Contact)",
            "D": "public void doWork(sObject theRecord)"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中，所有标准和自定义对象都继承自 <strong>sObject</strong> 类。<br>要编写处理多种对象的通用方法，参数类型应使用 <code>sObject</code>。<br>❌ A/C: 语法错误。<br>❌ B: Record 不是 Apex 关键字。"
    },
    {
        "id": 134,
        "title": "A developer needs to update an unrelated object when a record gets saved. Which two trigger types should the developer create? (Choose two.)",
        "code": "",
        "options": {
            "A": "after insert",
            "B": "before update",
            "C": "before insert",
            "D": "after update"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>更新<strong>无关/其他对象</strong>的最佳时机是 <strong>After Trigger</strong>。<br>Before Trigger 通常用于更新当前记录本身。<br>✅ <strong>A (after insert)</strong> & <strong>D (after update)</strong>。<br>❌ B/C: 在 Before 阶段更新其他对象不是最佳实践 (虽然技术上可行，但 After 更稳健)。"
    },
    {
        "id": 135,
        "title": "Which three statements are true regarding trace flags? (Choose three.)",
        "code": "",
        "options": {
            "A": "Setting trace flags automatically cause debug logs to be generated.",
            "B": "Logging levels override trace flags",
            "C": "Trace flags override logging levels.",
            "D": "If active trace flags are not set, Apex tests execute with default logging levels",
            "E": "Trace flags can be set in the Developer Console, Setup, or using the Tooling API"
        },
        "correct": "ADE",
        "explanation": "<strong>✅ Correct Answer: A, D & E</strong><br><br><strong>🧠 解析：</strong><br>Trace Flag (跟踪标志) 机制：<br>✅ <strong>A</strong>: 设置后，只要有符合条件的活动，系统会自动记录 Debug Log。<br>✅ <strong>D</strong>: 如果没设 Flag，测试会使用默认日志级别。<br>✅ <strong>E</strong>: 可在 Setup, Dev Console, Tooling API 中设置。<br>❌ B/C: Trace Flag 与 Logging Level 是绑定关系，不存在覆盖 (Override)。"
    },
    {
        "id": 136,
        "title": "Which two conditions cause workflow rules to fire? (Choose two.)",
        "code": "",
        "options": {
            "A": "An Apex Batch process that changes field values",
            "B": "Updating records using the bulk API",
            "C": "Converting leads to person accounts",
            "D": "Changing the territory assignments of accounts and opportunities"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>Workflow Rule 触发条件：记录被<strong>插入 (Insert)</strong> 或 <strong>更新 (Update)</strong>。<br>✅ <strong>A (Apex Batch)</strong>: 涉及 DML 操作，会触发。<br>✅ <strong>B (Bulk API)</strong>: 涉及 DML 操作，会触发。<br>❌ C: Lead 转换过程特殊，通常不触发标准 Workflow。<br>❌ D: Territory 分配是后台关联表变更，不视为记录本身的 Update。"
    },
    {
        "id": 137,
        "title": "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. What is the correct implementation of the ShippingCalculator class?",
        "code": "",
        "options": {
            "A": "public abstract class ShippingCalculator { public abstract calculate() { // implementation } }",
            "B": "public abstract class ShippingCalculator { public virtual void calculate() { // implementation } }",
            "C": "public abstract class ShippingCalculator { public void calculate() { // implementation } }",
            "D": "public abstract class ShippingCalculator { public override calculate() { // implementation } }"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>要求 1: 不可实例化 -> <strong>abstract class</strong>。<br>要求 2: 有默认实现 -> 方法不能是 abstract。<br>要求 3: 子类可重写 -> 方法必须是 <strong>virtual</strong>。<br>✅ <strong>B</strong>: <code>public virtual void calculate() { ... }</code> 完美符合。<br>❌ A: abstract 方法不能有方法体。<br>❌ C: 非 virtual 方法不可被 override。<br>❌ D: override 关键字仅用于子类重写父类方法时。"
    },
    {
        "id": 138,
        "title": "A Licensed_Professional__c custom object exists in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the \"Certification Representative\" role can access the Certification records they own and view the related Licensed Professional records, however users with the \"Sales Representative\" role report they cannot view any Licensed Professional records even though they own the associated Contact record. What are two likely causes of users in the \"Sales Representative\" role not being able to access the Licensed Professional records? (Choose two.)",
        "code": "",
        "options": {
            "A": "The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object",
            "B": "The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process",
            "C": "The organization recently modified the Sales Representative role to restrict Read/Write access to Licensed_Professional__c",
            "D": "The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>在拥有两个 Master-Detail 的对象中，子记录的可见性由 <strong>Primary Master (主控关系)</strong> 决定。<br>✅ <strong>A</strong>: 如果 Certification__c 是 Primary Master 且为 Private，那么用户必须对 Certification 有权限才能看到 Licensed_Professional__c。Sales Rep 只有 Contact 权限，没有 Certification 权限，因此不可见。<br>✅ <strong>B</strong>: 共享规则重算延迟也可能导致临时不可见。<br>❌ D: 如果 Contact 是 Primary，Sales Rep 就应该能看见了。"
    },
    {
        "id": 139,
        "title": "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
        "code": "",
        "options": {
            "A": "Declare maxAttempts as a private static variable on a helper class",
            "B": "Declare maxAttempts as a variable on a helper class",
            "C": "Declare maxAttempts as a member variable on the trigger definition",
            "D": "Declare maxAttempts as a constant using the static and final keywords"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>要在同一事务 (Transaction) 的多次触发器执行之间共享状态，必须使用 <strong>static (静态)</strong> 变量。<br>最佳实践是将该变量放在 <strong>Helper Class</strong> 中。<br>✅ <strong>A</strong>: <code>private static</code> 配合 getter/setter，既能保持状态，又保证封装性。<br>❌ B/C: 非静态变量每次实例化都会重置。<br>❌ D: final 会使其变为常量，不可修改。"
    },
    {
        "id": 140,
        "title": "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use Data Loader instead of Data Import Wizard?",
        "code": "",
        "options": {
            "A": "Data Loader runs from the developer's browser.",
            "B": "Data Loader automatically relates Opportunities to Accounts.",
            "C": "Data Import Wizard does not support Opportunities.",
            "D": "Data Import Wizard can not import all 500 records."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>Data Import Wizard</strong> 仅支持标准对象：Account, Contact, Lead, Solution, Campaign Member。<br>它<strong>不支持 Opportunity</strong>。<br>因此必须使用 <strong>Data Loader</strong>。<br>❌ D: Wizard 支持最多 50,000 条，500 条并非限制原因。"
    },
    {
        "id": 141,
        "title": "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
        "code": "",
        "options": {
            "A": "Event Monitoring Log",
            "B": "Calendar Events",
            "C": "Developer Log",
            "D": "Asynchronous Data Capture Events"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br><strong>Event Monitoring (事件监控)</strong> 提供了详细的用户活动日志，包括登录事件 (Login Events)。<br>题目强调\"不需要实时通知 (real-time notification is not required)\"，这正是 Event Monitoring Log 的典型应用场景 (通常是延时下载 CSV 日志进行审计)。<br>❌ C: Developer Log 是调试代码的。<br>❌ B/D: 与登录审计无关。"
    },
    {
        "id": 142,
        "title": "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
        "code": "",
        "options": {
            "A": "Schema.sObjectType.Account.isDeletable()",
            "B": "Account.isDeletable()",
            "C": "accountRec.isDeletable()",
            "D": "accountRec.sObjectType.isDeletable()"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中检查对象级权限 (CRUD) 的标准方式是使用 <strong>Schema Describe</strong>。<br>语法：<code>Schema.sObjectType.ObjectName.isDeletable()</code>。<br>❌ B/C/D: 这些方法不存在或语法错误。"
    },
    {
        "id": 143,
        "title": "Which three process automations can immediately send an email notification to the owner of an Opportunity when its Amount is changed to be greater than $10,000? (Choose three.)",
        "code": "",
        "options": {
            "A": "Process Builder",
            "B": "Escalation Rule",
            "C": "Flow Builder",
            "D": "Approval Process",
            "E": "Workflow Rule"
        },
        "correct": "ACE",
        "explanation": "<strong>✅ Correct Answer: A, C & E</strong><br><br><strong>🧠 解析：</strong><br>支持基于记录更新触发并发送邮件的自动化工具：<br>✅ <strong>A (Process Builder)</strong>: 支持 Immediate Action -> Email Alert。<br>✅ <strong>C (Flow Builder)</strong>: Record-Triggered Flow 支持 Send Email。<br>✅ <strong>E (Workflow Rule)</strong>: 经典功能，支持 Email Alert。<br>❌ B: Escalation Rule 仅用于 Case。<br>❌ D: Approval Process 需要用户手动提交审批，不能仅凭字段变更自动触发。"
    },
    {
        "id": 144,
        "title": "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
        "code": "",
        "options": {
            "A": "registerEvent()",
            "B": "fireEvent()",
            "C": "emit()",
            "D": "fire()"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Aura 框架中，无论是 Component Event 还是 Application Event，触发事件的标准方法都是 <code>event.fire()</code>。<br>❌ A: <code>registerEvent</code> 是在 markup 中注册事件。<br>❌ B/C: 框架中无此方法。"
    },
    {
        "id": 145,
        "title": "CloudKicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class BodyFat and its method calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace. Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
        "code": "",
        "options": {
            "A": "Declare the class and method using the public access modifier.",
            "B": "Declare the class as global and use the public access modifier on the method.",
            "C": "Declare the class as public and use the global access modifier on the method.",
            "D": "Declare the class and method using the global access modifier."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>对于 Managed Package (托管包)：<br>如果希望代码在<strong>包的命名空间之外 (Outside Namespace)</strong> 被访问，必须使用 <strong>global</strong> 访问修饰符。<br>且类和方法<strong>都必须</strong>声明为 global。<br>❌ A/B/C: public 仅在包内部可见。"
    },
    {
        "id": 146,
        "title": "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the user. How can the developer make sure that validation rule violations are displayed?",
        "code": "",
        "options": {
            "A": "Add custom controller attributes to display the message.",
            "B": "Use a try/catch with a custom exception class.",
            "C": "Include <apex:messages> on the Visualforce page.",
            "D": "Perform the DML using the Database.upsert() method."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 标准机制：<br>当 DML 操作触发 Validation Rule 错误时，系统会自动将错误添加到页面消息队列中。<br>只需在页面中添加 <strong>&lt;apex:messages&gt;</strong> 或 <strong>&lt;apex:message&gt;</strong> 标签，即可自动渲染这些错误信息。<br>无需额外的 try/catch 或自定义属性。"
    },
    {
        "id": 147,
        "title": "What is a fundamental difference between a Master-Detail relationship and a Lookup relationship?",
        "code": "",
        "options": {
            "A": "In a Master-Detail relationship, when a record of a master object is deleted, the detail records are not deleted",
            "B": "In a Lookup relationship when the parent record is deleted, the child records are always deleted",
            "C": "A Master-Detail relationship detail record inherits the sharing and security of its master record",
            "D": "In a Lookup relationship, the field value is mandatory"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Master-Detail 的核心特征：<br>1. <strong>安全性继承 (Inherited Sharing)</strong>: 子记录没有自己的 Owner，直接继承父记录的权限。<br>2. <strong>级联删除</strong>: 父删子必删。<br>Lookup 则是独立共享，独立删除。<br>❌ A: Master-Detail 会级联删除。<br>❌ B: Lookup 默认不级联删除。<br>❌ D: Lookup 默认是可选的 (Optional)。"
    },
    {
        "id": 148,
        "title": "A Lightning component has a wired property searchResults that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
        "code": "",
        "options": {
            "A": "@AuraEnabled(cacheable=false) public static List<Opportunity> search(String term) { ... }",
            "B": "@AuraEnabled(cacheable=false) public List<Opportunity> search(String term) { ... }",
            "C": "@AuraEnabled(cacheable=true) public static List<Opportunity> search(String term) { ... }",
            "D": "@AuraEnabled(cacheable=true) public List<Opportunity> search(String term) { ... }"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>LWC <code>@wire</code> 服务的两个强制要求：<br>1. Apex 方法必须是 <strong>static</strong>。<br>2. 必须标记 <strong>@AuraEnabled(cacheable=true)</strong>。<br>❌ A: cacheable=false 不能用于 @wire (只能用于命令式调用)。<br>❌ B/D: 非 static 方法无法被 LWC 调用。"
    },
    {
        "id": 149,
        "title": "What are two ways for a developer to execute tests in an org? (Choose two.)",
        "code": "",
        "options": {
            "A": "Tooling API",
            "B": "Developer Console",
            "C": "Metadata API",
            "D": "Bulk API"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>执行 Apex 测试的方式：<br>✅ <strong>B</strong>: Developer Console (UI 操作)。<br>✅ <strong>A</strong>: Tooling API (提供了 <code>/runTestsAsynchronous/</code> 等端点)。<br>❌ C: Metadata API 负责部署，不直接运行测试。<br>❌ D: Bulk API 负责数据，不运行测试。"
    },
    {
        "id": 150,
        "title": "A developer identifies the following triggers on the Expense__c object: deleteExpense – before delete, applyDefaultsToExpense – before insert, validateExpenseUpdate – before update. Which two techniques should the developer implement to ensure trigger best practices are followed? (Choose two.)",
        "code": "",
        "options": {
            "A": "Unify the before insert and before update triggers and use Process Builder for the delete action.",
            "B": "Create helper classes to execute the appropriate logic when a record is saved.",
            "C": "Maintain all three triggers on the Expense__c object, but move the Apex logic out of the trigger definition.",
            "D": "Unify all three triggers in a single trigger on the Expense__c object that includes all events."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>Trigger 最佳实践：<br>1. <strong>One Trigger Per Object (D)</strong>: 每个对象只写一个触发器，避免执行顺序不可控。<br>2. <strong>Helper/Handler Class (B)</strong>: 逻辑移出触发器，放入 Helper 类中，便于复用和测试。<br>❌ A: 建议合并所有事件，不建议拆分给 Process Builder (分散逻辑)。<br>❌ C: 保留多个触发器违反最佳实践。"
    },
    {
        "id": 151,
        "title": "When using Salesforce DX, what does a developer need to enable to create and manage scratch orgs?",
        "code": "",
        "options": {
            "A": "Production",
            "B": "Environment Hub",
            "C": "Dev Hub",
            "D": "Sandbox"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 Salesforce DX 中，<strong>Dev Hub (开发中心)</strong> 是管理和创建 <strong>Scratch Org (临时组织)</strong> 的核心功能。<br>必须在某个组织 (通常是 Prod 或 Developer Edition) 中启用 Dev Hub，才能使用 SFDX CLI 创建 Scratch Orgs。<br>❌ B: Environment Hub 用于管理多 Org 登录，非 Scratch Org 专用。"
    },
    {
        "id": 152,
        "title": "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component-based development over Visualforce? (Choose two.)",
        "code": "",
        "options": {
            "A": "Self-contained and reusable units of an application",
            "B": "Rich component ecosystem",
            "C": "Server-side run-time debugging",
            "D": "Automatic code generation"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>LWC (及 Aura) 相比 Visualforce 的核心优势：<br>✅ <strong>A</strong>: 组件化架构 (Component-based)，强调独立、封装和复用。<br>✅ <strong>B</strong>: 拥有丰富的生态系统 (Base Components, AppExchange)。<br>❌ C: LWC 是客户端渲染，调试主要在浏览器，而非服务器端。<br>❌ D: 代码需手写，非自动生成。"
    },
    {
        "id": 153,
        "title": "Which two are best practices when it comes to component and application event handling? (Choose two.)",
        "code": "",
        "options": {
            "A": "Reuse the event logic in a component bundle, by putting the logic in the helper",
            "B": "Use component events to communicate actions that should be handled at the application level",
            "C": "Handle low-level events in the event handler and re-fire them as higher-level events",
            "D": "Try to use application events as opposed to component events"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>事件处理最佳实践：<br>✅ <strong>A</strong>: 逻辑复用应放在 <strong>Helper</strong> 中。<br>✅ <strong>C</strong>: 捕获底层事件 (Low-level) 并转换为业务语义的高层事件 (Higher-level) 再传播，有助于解耦。<br>❌ B: 应用级通信应使用 Application Event。<br>❌ D: 应优先使用 Component Event (耦合度低)，仅在必要时使用 Application Event。"
    },
    {
        "id": 154,
        "title": "What is the maximum number of SOQL queries used by the following code?",
        "code": "List<Account> aList = [SELECT Id FROM Account LIMIT 5];\nfor (Account a : aList) {\n  List<Contact> CList = [SELECT Id FROM Contact WHERE AccountId = :a.Id];\n}",
        "options": {
            "A": "1",
            "B": "5",
            "C": "6",
            "D": "2"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>计算查询次数：<br>1. 第一行查询 Account -> <strong>1次</strong>。<br>2. 循环 5 次 (LIMIT 5)。<br>3. 循环内部每次执行一次 Contact 查询 -> <strong>5次</strong>。<br>总计：1 + 5 = <strong>6次</strong>。<br>(注：这是典型的反模式代码，应批量化处理)"
    },
    {
        "id": 155,
        "title": "Which three steps allow a custom SVG to be included in a Lightning Web Component? (Choose three.)",
        "code": "",
        "options": {
            "A": "Upload the SVG as a static resource.",
            "B": "Reference the getter in the HTML template.",
            "C": "Import the SVG as a content asset file.",
            "D": "Import the static resource and provide a getter for it in JavaScript.",
            "E": "Reference the import in the HTML template."
        },
        "correct": "ABD",
        "explanation": "<strong>✅ Correct Answer: A, B & D</strong><br><br><strong>🧠 解析：</strong><br>在 LWC 中使用自定义 SVG 的标准步骤：<br>1. <strong>上传静态资源 (A)</strong>。<br>2. <strong>JS 中导入 (D)</strong>: 使用 <code>@salesforce/resourceUrl</code> 导入并定义 Getter。<br>3. <strong>HTML 中引用 (B)</strong>: 使用 <code>&lt;img src={svgGetterName} ...&gt;</code>。<br>❌ C: 不支持 Content Asset 直接导入。<br>❌ E: HTML 不能直接引用 import 变量，必须通过 Getter。"
    },
    {
        "id": 156,
        "title": "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
        "code": "",
        "options": {
            "A": "<lightning-input type=\"number\" value=\"Salary__c\" format-style=\"currency\"></lightning-input>",
            "B": "<lightning-formatted-number value=\"Salary__c\" format-style=\"currency\"></lightning-formatted-number>",
            "C": "<lightning-input-field field-name=\"Salary__c\"></lightning-input-field>",
            "D": "<lightning-input-currency value=\"Salary__c\"></lightning-input-currency>"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 <code>lightning-record-edit-form</code> 中：<br>只有 <strong>&lt;lightning-input-field&gt; (C)</strong> 会自动根据字段元数据 (Metadata) 渲染正确的 UI (如货币格式)，并<strong>自动遵循字段级安全性 (FLS)</strong>。<br>❌ A: <code>lightning-input</code> 不会自动处理 FLS。<br>❌ B: 仅用于只读显示。"
    },
    {
        "id": 157,
        "title": "What is the order of operations when a record is saved in Salesforce?",
        "code": "",
        "options": {
            "A": "workflow, process flows, triggers, commit",
            "B": "process flows, triggers, workflow, commit",
            "C": "triggers, workflow, process flows, commit",
            "D": "workflow, triggers, process flows, commit"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 执行顺序口诀：<br>1. <strong>Triggers</strong> (Before -> Validation -> After)。<br>2. <strong>Workflow</strong> Rules。<br>3. <strong>Process</strong> Builder / Flows。<br>4. <strong>Commit</strong>。<br>即：代码优先，自动化在后。"
    },
    {
        "id": 158,
        "title": "Universal Containers (UC) decided it will not send emails to support personnel directly from Salesforce in the event that an unhandled exception occurs. Instead, UC wants an external system be notified of the error. What is the appropriate publish/subscribe logic to meet these requirements?",
        "code": "",
        "options": {
            "A": "Publish the error event using the addError() method and write a trigger to subscribe to the event and notify the external system.",
            "B": "Publish the error event using the EventBus.publish() method and have the external system subscribe to the event using CometD",
            "C": "Have the external system subscribe to the BatchApexError event, no publishing is necessary",
            "D": "Publish the error event using the addError() method and have the external system subscribe to the event using CometD"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>实现 Salesforce 到外部系统的事件通知，最佳架构是 <strong>Platform Events (平台事件)</strong>。<br>✅ <strong>Salesforce 端</strong>: 使用 <code>EventBus.publish()</code> 发布事件。<br>✅ <strong>外部系统端</strong>: 使用 <strong>CometD (Streaming API)</strong> 订阅该事件频道。<br>❌ A/D: addError() 仅用于 UI 报错阻止保存，无法发布事件。"
    },
    {
        "id": 159,
        "title": "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
        "code": "",
        "options": {
            "A": "The test method has a syntax error in the code.",
            "B": "The test method does not use System.runAs to execute as a specific user.",
            "C": "The test method is calling an @future method.",
            "D": "The test method relies on existing data in the sandbox."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>根本差异：<strong>数据可见性</strong>。<br>✅ <strong>Execute Anonymous</strong>: 可以访问 Org 中的真实数据。<br>✅ <strong>Test Method</strong>: 默认与真实数据隔离 (看不到数据)。<br>如果代码通过查询真实数据 (如 'SELECT Id FROM Account WHERE Name=...') 来运行，那么它在匿名窗口能跑通，但在测试方法中会查不到数据从而报错。"
    },
    {
        "id": 160,
        "title": "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
        "code": "",
        "options": {
            "A": "[SELECT Id,(SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology']",
            "B": "[SELECT Id,(SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Indursyt='Technology']",
            "C": "[SELECT Id,(SELECT Id FROM Job_Applications__c) FROM Contact WHERE Accounts.Indusyt='Technology']",
            "D": "[SELECT Id,(SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Indust=ry'Technology']"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>SOQL 语法要点：<br>1. <strong>子查询 (Subquery)</strong>: 必须使用<strong>子关系名 (Child Relationship Name)</strong>，通常是复数形式加 `__r`。即 `Job_Applications__r`。<br>2. <strong>父字段过滤</strong>: 使用点符号导航。即 `Account.Industry`。<br>❌ C/D: 使用了 `__c` (这是字段名，不是关系名)。<br>❌ B: `Accounts` 拼写错误 (单数 Account)。"
    },
    {
        "id": 161,
        "title": "A custom picklist field, Food_Preference__c, exists on a custom object. The picklist contains the following options: \"Vegan\", \"Kosher\", \"No Preference\". The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
        "code": "",
        "options": {
            "A": "Mark the field as Required on the field definition.",
            "B": "Set \"Use the first value in the list as the default value\" as True.",
            "C": "Mark the field as Required on the object's page layout.",
            "D": "Set a validation rule to enforce a value is selected."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>保证字段必填的最严格、最高效的方式是<strong>在字段定义 (Field Definition) 上标记为 Required</strong>。<br>这会强制所有数据入口 (UI, API, Apex, Data Import) 都必须提供值。<br>❌ C: Page Layout 仅限制 UI。<br>❌ B: Default Value 不能防止用户清空字段。<br>❌ D: Validation Rule 需要额外维护。"
    },
    {
        "id": 162,
        "title": "A developer must create an Apex class, ContactController, that a Lightning component can use to search for Contact records. Users of the Lightning component should only be able to search for Contact records to which they have access. Which two will restrict the records correctly? (Choose two.)",
        "code": "",
        "options": {
            "A": "public class ContactController",
            "B": "public with sharing class ContactController",
            "C": "public without sharing class ContactController",
            "D": "public inherited sharing class ContactController"
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>确保用户只能访问其有权查看的记录：<br>✅ <strong>B (with sharing)</strong>: 强制执行当前用户的共享规则。<br>✅ <strong>D (inherited sharing)</strong>: 继承调用者的共享模式 (如果由 Aura/LWC 调用，通常默认为 with sharing)。<br>❌ A: 默认是 without sharing (System Mode)。<br>❌ C: 显式声明忽略共享规则。"
    },
    {
        "id": 163,
        "title": "Which aspect of Apex programming is limited due to multitenancy?",
        "code": "",
        "options": {
            "A": "The number of methods in an Apex class",
            "B": "The number of records returned from database queries",
            "C": "The number of active Apex classes",
            "D": "The number of records processed in a loop"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Governor Limits (治理限制) 是多租户架构的核心。<br>✅ <strong>B (SOQL Query Limit)</strong>: 单次事务最多返回 50,000 条记录。<br>❌ A/C/D: 类的方法数、类总数、循环次数本身没有硬性上限 (循环受 CPU Time 限制)。"
    },
    {
        "id": 164,
        "title": "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
        "code": "",
        "options": {
            "A": "A custom exception class must extend the system Exception class.",
            "B": "A custom exception class can implement one or many interfaces.",
            "C": "A custom exception class cannot contain member variables or methods.",
            "D": "A custom exception class name must end with \"Exception\".",
            "E": "A custom exception class can extend other classes besides the Exception class."
        },
        "correct": "ABD",
        "explanation": "<strong>✅ Correct Answer: A, B & D</strong><br><br><strong>🧠 解析：</strong><br>Apex 自定义异常规则：<br>✅ <strong>A</strong>: 必须 <code>extends Exception</code>。<br>✅ <strong>B</strong>: 作为普通类，可以实现接口。<br>✅ <strong>D</strong>: 类名必须以 \"Exception\" 结尾。<br>❌ C: 可以包含成员变量和方法。<br>❌ E: 只能继承 Exception 类。"
    },
    {
        "id": 165,
        "title": "What will be the output in the debug log in the event of a QueryException during a call to the aQuery method in the following example?",
        "code": "class myclass {\n  class CustomException extends QueryException {}\n  public static Account aQuery () {\n    try {\n      System.debug('Querying Accounts.');\n      // SOQL throws standard QueryException here\n      theAccount = [SELECT Id FROM Account ...];\n    } catch (CustomException ex) {\n      System.debug('Custom Exception.');\n    } catch (QueryException ex) {\n      System.debug('Query Exception.');\n    } finally {\n      System.debug('Done.');\n    }\n  }\n}",
        "options": {
            "A": "Querying Accounts. Query Exception",
            "B": "Querying Accounts. Custom Exception",
            "C": "Querying Accounts. Custom Exception Done.",
            "D": "Querying Accounts. Query Exception Done."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>执行流：<br>1. 打印 \"Querying Accounts.\"<br>2. 抛出标准 <code>QueryException</code>。<br>3. 检查 <code>catch (CustomException)</code> -> 不匹配 (Custom 是 Query 的子类，不能捕获父类异常)。<br>4. 检查 <code>catch (QueryException)</code> -> 匹配！打印 \"Query Exception.\"<br>5. 执行 <code>finally</code> -> 打印 \"Done.\""
    },
    {
        "id": 166,
        "title": "When a user edits the Postal Code on an Account, a custom Account text field named Timezone must be updated based on the values in a PostalCodeToTimezone__c custom object. How should a developer implement this feature?",
        "code": "",
        "options": {
            "A": "Build an Account Workflow Rule.",
            "B": "Build an Account Assignment Rule.",
            "C": "Build an Account custom Trigger.",
            "D": "Build an Account Approval Process."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求涉及<strong>跨对象查询 (Query)</strong>。<br>需要根据 Account 的 Postal Code 去查询另一个自定义对象 <code>PostalCodeToTimezone__c</code> 的数据。<br>Workflow 和 Assignment Rule 无法执行跨对象查询。<br>必须使用 <strong>Apex Trigger (C)</strong> 来实现查询和更新逻辑。"
    },
    {
        "id": 167,
        "title": "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience. What should the developer do to provide the custom user interface?",
        "code": "",
        "options": {
            "A": "Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
            "B": "Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience.",
            "C": "Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
            "D": "Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 允许为 Classic 和 LEX 分别配置按钮覆盖。<br>✅ <strong>Salesforce Classic</strong>: 仅支持 Visualforce。<br>✅ <strong>Lightning Experience</strong>: 支持 Aura/LWC 组件。<br>因此最佳方案是分别指定：Classic 用 VF，LEX 用 Lightning Component。"
    },
    {
        "id": 168,
        "title": "A developer is writing tests for a class and needs to insert records to validate functionality. Which annotation method should be used to create records for every method in the test class?",
        "code": "",
        "options": {
            "A": "@Starttest",
            "B": "@PreTest",
            "C": "@TestSetup",
            "D": "@isTest(SeeAllData=true)"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>@TestSetup</strong> 注解的方法会在测试类执行之初运行一次。<br>它创建的数据对该类中的<strong>所有测试方法</strong>可见 (每个方法会获得一份数据副本)。<br>这是创建公共测试数据的标准做法。<br>❌ A/B: 无此注解。"
    },
    {
        "id": 169,
        "title": "Given the following Apex statement: Account myAccount = [SELECT Id, Name FROM Account]; What occurs when more than one Account is returned by the SOQL query?",
        "code": "",
        "options": {
            "A": "The variable, myAccount, is automatically cast to the List data type.",
            "B": "The first Account returned is assigned to myAccount.",
            "C": "The query fails and an error is written to the debug log.",
            "D": "An unhandled exception is thrown and the code terminates."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>将 SOQL 查询结果直接赋值给<strong>单个 sObject 变量</strong>时：<br>查询必须<strong>恰好返回 1 条记录</strong>。<br>如果返回 0 条 -> <code>System.QueryException: List has no rows for assignment</code><br>如果返回多条 -> <code>System.QueryException: List has more than 1 row for assignment</code><br>这属于未处理异常，会导致代码终止。"
    },
    {
        "id": 170,
        "title": "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussions, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
        "code": "",
        "options": {
            "A": "The Vendor records have existing values in the Account object.",
            "B": "The Account object is included on a workflow on the Vendor object.",
            "C": "The Account records contain Vendor roll-up summary fields.",
            "D": "The Vendor object must use a Master-Detail field for reporting."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>将 Master-Detail 转换为 Lookup 的硬性限制：<br>如果 Master 对象 (Account) 上存在基于 Detail 对象 (Vendor) 的 <strong>Roll-up Summary (汇总摘要字段)</strong>，则无法转换关系类型。<br>必须先删除这些 Roll-up 字段才能转换。<br>❌ A/B/D: 均不影响转换。"
    },
    {
        "id": 171,
        "title": "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. Which Visualforce feature supports this requirement?",
        "code": "",
        "options": {
            "A": "<apex:listButton> tag",
            "B": "recordSetVar page attribute",
            "C": "Custom controller",
            "D": "Controller extension"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>要实现<strong>批量处理 (Batch Process)</strong> List View 中选中的记录，Visualforce 页面必须使用 <strong>StandardListController</strong>。<br>激活这一功能的关键属性是 <code>&lt;apex:page&gt;</code> 标签中的 <strong>recordSetVar</strong>。<br>它将选中的记录集合绑定到一个变量中，供页面遍历和处理。<br>❌ A: 不存在此标签。"
    },
    {
        "id": 172,
        "title": "The following Apex method is part of the ContactService class that is called from a trigger. How should the developer modify the code to ensure best practices are met? public static void setBusinessUnitToEMEA(Contact thisContact){ thisContact.Business_Unit__c = 'EMEA'; update thisContact; }",
        "code": "",
        "options": {
            "A": "public void setBusinessUnitToEMEA(List<Contact> contacts){ contacts[0].Business_Unit__c = 'EMEA'; update contacts[0]; }",
            "B": "public static void setBusinessUnitToEMEA(List<Contact> contacts){ for(Contact thisContact : contacts){ thisContact.Business_Unit__c = 'EMEA'; update contacts[0]; } }",
            "C": "public static void setBusinessUnitToEMEA(Contact thisContact){ List<Contact> contacts = new List<Contact>(); contacts.add(thisContact); thisContact.Business_Unit__c = 'EMEA'; update contacts; }",
            "D": "public static void setBusinessUnitToEMEA(List<Contact> contacts){ for (Contact thisContact : contacts){ thisContact.Business_Unit__c = 'EMEA'; } update contacts; }"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Apex 最佳实践的核心：<strong>批量化 (Bulkification)</strong>。<br>1. 接受 <strong>List</strong> 而非单个对象作为参数。<br>2. <strong>循环处理</strong>集合中的每个对象。<br>3. <strong>DML 操作移出循环</strong>，只在最后执行一次 <code>update contacts;</code>。<br>❌ A/C: 仍处理单条记录。<br>❌ B: 在循环内执行 DML (update)，严重违反最佳实践。"
    },
    {
        "id": 173,
        "title": "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
        "code": "",
        "options": {
            "A": "1",
            "B": "3",
            "C": "4",
            "D": "2"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>执行顺序模拟：<br>1. <strong>Insert (Initial: 0)</strong><br>2. <strong>Before Insert Trigger</strong> (无代码，跳过)<br>3. <strong>Workflow Rule</strong> 触发 -> 字段更新 (Count = 1)<br>4. Workflow 字段更新导致 <strong>系统内部 Update</strong>。<br>5. <strong>Before Update Trigger</strong> 触发 -> Count 自增 (Count = 2)。<br>6. <strong>After Update Trigger</strong> (无代码)。<br>7. Workflow 再次触发？-> 题目说 \"not re-evaluate\"，所以不再触发。<br>8. 最终结果：<strong>2</strong>。"
    },
    {
        "id": 174,
        "title": "A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class. Which is the correct implementation? public virtual class Payment { public virtual void makePayment(Decimal amount) { // implementation } }",
        "code": "",
        "options": {
            "A": "public class CreditCardPayment extends Payment { public virtual void makePayment(Decimal amount) { // implementation } }",
            "B": "public class CreditCardPayment extends Payment { public override void makePayment(Decimal amount) { // implementation } }",
            "C": "public class CreditCardPayment implements Payment { public virtual void makePayment(Decimal amount) { // implementation } }",
            "D": "public class CreditCardPayment implements Payment { public override void makePayment(Decimal amount) { // implementation } }"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>面向对象基础：<br>1. 继承类使用 <strong>extends</strong>。<br>2. 重写父类方法 (virtual/abstract) 使用 <strong>override</strong>。<br>❌ A: 子类重写方法不能用 virtual，必须用 override。<br>❌ C/D: implements 用于接口 (Interface)。"
    },
    {
        "id": 175,
        "title": "A developer is debugging the following code to determine why Accounts are not being created. How should the code be altered to help debug the issue? Account a = new Account(Name = 'A'); Database.insert(a, false);",
        "code": "",
        "options": {
            "A": "Add a System.debug() statement before the insert method.",
            "B": "Collect the insert method return value in a SaveResult record.",
            "C": "Set the second insert method parameter to TRUE.",
            "D": "Add a try/catch around the insert method."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><code>Database.insert(record, false)</code> 的行为是：<strong>部分成功，不抛出异常</strong>。<br>如果有错误，错误信息会包含在返回的 <strong>Database.SaveResult</strong> 对象中。<br>如果不接收返回值，错误信息就丢失了，无法调试。<br>因此必须接收返回值：<code>Database.SaveResult sr = Database.insert(a, false);</code> 并检查 <code>sr.getErrors()</code>。"
    },
    {
        "id": 176,
        "title": "Which Salesforce org has a complete duplicate copy of the production org including data and configuration?",
        "code": "",
        "options": {
            "A": "Developer Pro Sandbox",
            "B": "Partial Copy Sandbox",
            "C": "Production",
            "D": "Full Sandbox"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>沙盒类型对比：<br>✅ <strong>Full Sandbox (D)</strong>: 完整复制生产环境的所有配置和所有数据。<br>❌ B (Partial Copy): 仅复制配置和少量样本数据 (最多 5GB)。<br>❌ A (Developer Pro): 仅复制配置，无生产数据。"
    },
    {
        "id": 177,
        "title": "A developer created this Apex trigger that calls MyClass.myStaticMethod: trigger myTrigger on Contact (before insert) { MyClass.myStaticMethod(trigger.new, trigger.oldMap); } The developer creates a test class with a test method that calls MyClass.myStaticMethod directly, resulting in 81% overall code coverage. What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?",
        "code": "",
        "options": {
            "A": "The deployment fails because no assertions were made in the test method",
            "B": "The deployment passes because both classes and the trigger were included in the deployment",
            "C": "The deployment passes because the Apex code has required (>75%) code coverage",
            "D": "The deployment fails because the Apex trigger has no code coverage"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>部署要求：<br>1. 总体代码覆盖率 >= 75%。<br>2. <strong>每个 Trigger 必须至少有 1% 的覆盖率 (不能为 0%)</strong>。<br>题目中测试类只直接调用了方法 (Class 有覆盖)，但没有执行 DML 操作 (如 <code>insert contact</code>) 来触发 Trigger。<br>导致 Trigger 覆盖率为 0%，因此部署失败。"
    },
    {
        "id": 178,
        "title": "A developer considers the following snippet of code: Boolean isOK; Integer x; String theString = 'Hello'; if (isOK == false && theString == 'Hello') { x = 1; } else if (isOK == true && theString == 'Hello') { x = 2; } else if (isOK != null && theString == 'Hello') { x = 3; } else { x = 4; } Based on this code, what is the value of x?",
        "code": "",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>关键点：<strong>未初始化的 Boolean 默认为 null</strong>。<br>1. <code>isOK == false</code> -> <code>null == false</code> -> <strong>False</strong>。<br>2. <code>isOK == true</code> -> <code>null == true</code> -> <strong>False</strong>。<br>3. <code>isOK != null</code> -> <code>null != null</code> -> <strong>False</strong>。<br>4. 进入 <strong>else</strong> 分支 -> <strong>x = 4</strong>。"
    },
    {
        "id": 179,
        "title": "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?",
        "code": "",
        "options": {
            "A": "Use the schema describe calls to determine if the logged-in user has access to the Account object",
            "B": "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user",
            "C": "Use the with sharing keyword on the class declaration",
            "D": "Use the without sharing keyword on the class declaration"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Apex 类默认运行在系统模式下 (不检查共享规则)。<br>要强制 SOQL 查询遵守当前用户的共享规则 (Sharing Rules)，必须在类声明时使用 <strong>with sharing</strong> 关键字。<br>即：<code>public with sharing class MySearchController { ... }</code>。<br>❌ A: 仅检查对象权限，不解决记录共享问题。"
    },
    {
        "id": 180,
        "title": "How should a developer write unit tests for a private method in an Apex class?",
        "code": "",
        "options": {
            "A": "Add a test method in the Apex class.",
            "B": "Mark the Apex class as global.",
            "C": "Use the SeeAllData annotation.",
            "D": "Use the TestVisible annotation."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>正常情况下，测试类无法访问被测类中的 <strong>private</strong> 成员。<br>使用 <strong>@TestVisible</strong> 注解可以打破这一限制，允许测试类访问私有方法和变量。<br>❌ A: 测试方法必须写在独立的 @isTest 类中，不能写在业务类里。"
    },
    {
        "id": 181,
        "title": "An Approval Process is defined on the Expense_Item__c object. A business rule states: when a user changes the Status to “Submitted” on an Expense_Report__c record, all related Expense_Item__c records must enter the approval process individually. Which approach should be used to ensure this requirement is met?",
        "code": "",
        "options": {
            "A": "Create a Process Builder on Expense_Report__c with an \"Apex\" action type to submit all related Expense_Item__c records when the criteria is met.",
            "B": "Create a Process Builder on Expense_Report__c to mark the related Expense_Item__c as submittable and a trigger on Expense_Item__c to submit the records for approval.",
            "C": "Create two Process Builders: one on Expense_Report__c to mark the related Expense_Item__c as submittable and the second on Expense_Item__c to submit the records for approval.",
            "D": "Create a Process Builder on Expense_Report__c with a \"Submit for Approval\" action type to submit all related Expense_Item__c records when the criteria are met."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求核心：当父记录变更时，批量提交子记录审批。<br>✅ <strong>A</strong>: Process Builder 监听父记录变更，调用 <strong>Invocable Apex Method</strong>。在 Apex 中查询所有子记录并批量调用 <code>Approval.ProcessSubmitRequest</code>。<br>❌ D: \"Submit for Approval\" 动作只能提交<strong>当前记录</strong> (即父记录)，无法提交子记录。"
    },
    {
        "id": 182,
        "title": "If Apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which two statements are true regarding governor limits? (Choose two.)",
        "code": "",
        "options": {
            "A": "The Apex governor limits are reset for each iteration of the execute() method.",
            "B": "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction.",
            "C": "The Apex governor limits might be higher due to the asynchronous nature of the transaction.",
            "D": "The Apex governor limits are relaxed while calling the constructor of the Apex class."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>Batch Apex 特性：<br>✅ <strong>A</strong>: 每个 <code>execute()</code> 批次都是一个<strong>独立的事务 (Transaction)</strong>，Governor Limits 会重置。<br>✅ <strong>C</strong>: 属于<strong>异步事务 (Asynchronous Transaction)</strong>，部分限制比同步事务宽松 (如 SOQL 查询数限制为 200，Heap Size 为 12MB 等)。<br>❌ B: 即使异步，如果代码写得烂，依然会超限。"
    },
    {
        "id": 183,
        "title": "What are two ways a developer can get the status of an enqueued job for a class that implements the queueable interface? (Choose two.)",
        "code": "",
        "options": {
            "A": "View the Apex Jobs Page",
            "B": "View the Apex Status Page",
            "C": "Query the AsyncApexJob object",
            "D": "View the Apex Flex Queue"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>Queueable Apex 也是一种异步作业，其执行记录存储在 <strong>AsyncApexJob</strong> 表中。<br>✅ <strong>A</strong>: Setup -> Jobs -> <strong>Apex Jobs</strong> 页面。<br>✅ <strong>C</strong>: 使用 SOQL 查询 <strong>AsyncApexJob</strong> 对象。<br>❌ D: Flex Queue 仅用于 Batch Apex。"
    },
    {
        "id": 184,
        "title": "An Apex method getAccounts, which returns a List of Accounts given a searchTerm, is available for Lightning Web Components to use. What is the correct definition of a Lightning Web Component property that uses the getAccounts method?",
        "code": "",
        "options": {
            "A": "@wire(getAccounts, { searchTerm: '$searchTerm' }) accountList;",
            "B": "@AuraEnabled(getAccounts, 'SsearchTerm') accountList;",
            "C": "@AuraEnabled(getAccounts, { searchTerm: 'SsearchTerm' }) accountList;",
            "D": "@wire(getAccounts, 'SsearchTerm') accountList;"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>LWC Wire Service 语法：<br><code>@wire(apexMethod, { param: '$reactiveProp' }) property;</code><br>✅ <strong>A</strong>: 语法正确，且使用了 <code>$</code> 符号来实现响应式参数绑定。<br>❌ B/C: @AuraEnabled 是 Apex 注解，不是 LWC JS 语法。<br>❌ D: 参数格式错误。"
    },
    {
        "id": 185,
        "title": "Which process automation should be used to send an outbound message without using Apex code?",
        "code": "",
        "options": {
            "A": "Flow Builder",
            "B": "Process Builder",
            "C": "Workflow Rule",
            "D": "Approval Process"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>Outbound Message (出站消息)</strong> 是 <strong>Workflow Rule (工作流规则)</strong> 的独有动作类型。<br>Flow 和 Process Builder 均不支持原生的 Outbound Message (Flow 可以发 HTTP Callout，但那不是 Outbound Message)。<br>Approval Process 虽然可以包含 Workflow Actions，但题目问的是通用的自动化工具，Workflow 是最直接的答案。"
    },
    {
        "id": 186,
        "title": "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
        "code": "public class without sharing OpportunityService {\n    public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds) {\n        List<OpportunityLineItem> oppLineItems = new List<OpportunityLineItem>();\n        for (Id thisOppId : opportunityIds) {\n            oppLineItems.addAll([\n                SELECT Id FROM OpportunityLineItem WHERE OpportunityId = :thisOppId\n            ]);\n        }\n        return oppLineItems;\n    }\n}",
        "options": {
            "A": "Refactor the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
            "B": "Use the System.Limits.getLimitQueries() method to ensure the number of queries is less than 100.",
            "C": "Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
            "D": "Use the System.Limits.getQueries() method to ensure the number of queries is less than 100."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>原代码犯了 <strong>循环内 SOQL (SOQL inside Loop)</strong> 的大忌。<br>如果 <code>opportunityIds</code> 集合很大，查询次数会迅速超过 100 次限制。<br>✅ <strong>C (Bulkification)</strong>: 将查询移出循环，使用 <code>IN</code> 子句一次性查询所有数据：<br><code>SELECT Id FROM OpportunityLineItem WHERE OpportunityId IN :opportunityIds</code>。"
    },
    {
        "id": 187,
        "title": "How does the Lightning Component framework help developers implement solutions faster?",
        "code": "",
        "options": {
            "A": "By providing an Agile process with default steps",
            "B": "By providing code review standards and processes",
            "C": "By providing device-awareness for mobile and desktops",
            "D": "By providing change history and version control"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Lightning Component 框架是<strong>响应式 (Responsive)</strong> 且<strong>设备感知 (Device-aware)</strong> 的。<br>这意味着开发者编写一次组件，就可以自动适配桌面端和移动端 (Salesforce Mobile App)，无需为不同设备开发两套代码，从而显著提升开发效率。<br>❌ A/B/D: 这些是项目管理或 DevOps 工具的功能，非框架本身特性。"
    },
    {
        "id": 188,
        "title": "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
        "code": "",
        "options": {
            "A": "JavaScript",
            "B": "CSS",
            "C": "Java",
            "D": "PHP",
            "E": "HTML"
        },
        "correct": "ABE",
        "explanation": "<strong>✅ Correct Answer: A, B & E</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 页面本质上是服务器渲染的 <strong>HTML (E)</strong> 页面。<br>它完全支持标准的 Web 前端技术：<strong>JavaScript (A)</strong> 和 <strong>CSS (B)</strong>。<br>❌ C/D: Java 和 PHP 是服务端语言，不能直接嵌入 Visualforce (VF 的服务端逻辑由 Apex 处理)。"
    },
    {
        "id": 189,
        "title": "What should be used to create scratch orgs?",
        "code": "",
        "options": {
            "A": "Developer Console",
            "B": "Salesforce CLI",
            "C": "Workbench",
            "D": "Sandbox Refresh"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>Scratch Org</strong> 是 Salesforce DX 体系的一部分。<br>只能通过 <strong>Salesforce CLI (sfdx)</strong> 命令行工具创建和管理。<br>命令：<code>sfdx force:org:create ...</code><br>❌ A/C/D: 均不支持创建 Scratch Org。"
    },
    {
        "id": 190,
        "title": "Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
        "code": "",
        "options": {
            "A": "Set the attribute enableLightning to true in the definition.",
            "B": "Enable \"Available for Lightning Experience, Lightning Communities, and the mobile app\" on Visualforce pages used by the custom application.",
            "C": "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
            "D": "Rewrite all Visualforce pages as Lightning components."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>要让旧的 Visualforce 页面快速获得 Lightning 风格 (Look & Feel)，最快的方法是引入 <strong>Salesforce Lightning Design System (SLDS)</strong>。<br>只需在页面中添加 <code>&lt;apex:slds /&gt;</code> 或手动引入 SLDS 的 CSS 样式表，即可让第三方 JS 框架渲染出的元素符合 Lightning 规范。<br>❌ D: 重写成本太高。<br>❌ A: 属性不存在。"
    },
    {
        "id": 191,
        "title": "A developer wrote Apex code that calls out to an external system. How should a developer write the test to provide test coverage?",
        "code": "",
        "options": {
            "A": "Write a class that implements the HttpCalloutMock interface.",
            "B": "Write a class that extends HttpCalloutMock.",
            "C": "Write a class that extends WebServiceMock.",
            "D": "Write a class that implements the WebServiceMock interface."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>测试 <strong>HTTP Callout</strong> 的标准做法是使用 <strong>Mock</strong>。<br>必须创建一个类<strong>实现 (implements) <code>HttpCalloutMock</code> 接口</strong>。<br>并在测试方法中使用 <code>Test.setMock(HttpCalloutMock.class, new MyMock());</code>。<br>❌ C/D: <code>WebServiceMock</code> 用于 SOAP Web Service 测试。"
    },
    {
        "id": 192,
        "title": "Which two operations can be performed using a formula field? (Choose two.)",
        "code": "",
        "options": {
            "A": "Displaying the last four digits of an encrypted Social Security number",
            "B": "Triggering a Process Builder",
            "C": "Displaying an Image based on the Opportunity Amount",
            "D": "Calculating a score on a Lead based on the information from another field"
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>公式字段的能力：<br>✅ <strong>C</strong>: 使用 <code>IMAGE()</code> 函数显示图片。<br>✅ <strong>D</strong>: 基于其他字段值进行计算 (如 Lead Score)。<br>❌ A: 公式无法解密 Encrypted Fields。<br>❌ B: 公式值的变化不会触发 Trigger/Process Builder (除非该记录被显式 Update)。"
    },
    {
        "id": 193,
        "title": "Universal Containers stores Orders and Line Items in Salesforce. For security reasons, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line Items on the Order. Which type of relationship should be used?",
        "code": "",
        "options": {
            "A": "Direct Lookup",
            "B": "Indirect Lookup",
            "C": "Master-Detail",
            "D": "Lookup"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>关键需求：<strong>独立控制子对象的可见性</strong> (父可见，子不可见)。<br>✅ <strong>Lookup</strong>: 父子记录的权限是<strong>独立</strong>的。<br>❌ C: Master-Detail 强制继承权限，如果父记录可见，子记录一定可见。<br>❌ A/B: 用于外部对象。"
    },
    {
        "id": 194,
        "title": "Which three code lines are required to create a Lightning component on a Visualforce page? (Choose three.)",
        "code": "",
        "options": {
            "A": "$Lightning.useComponent",
            "B": "<apex:slds />",
            "C": "$Lightning.use",
            "D": "<apex:includeLightning />",
            "E": "$Lightning.createComponent"
        },
        "correct": "CDE",
        "explanation": "<strong>✅ Correct Answer: C, D & E</strong><br><br><strong>🧠 解析：</strong><br>Lightning Out (在 VF 中用 LWC/Aura) 的标准三步：<br>1. <code>&lt;apex:includeLightning /&gt;</code> (D) - 引入库。<br>2. <code>$Lightning.use(\"c:App\", ...)</code> (C) - 加载应用。<br>3. <code>$Lightning.createComponent(...)</code> (E) - 创建组件。<br>❌ A: 无此 API。<br>❌ B: 引入样式，非必须代码行。"
    },
    {
        "id": 195,
        "title": "The sales management team at Universal Containers requires that the LeadSource field of the Lead record be populated when a Lead is converted. What should be used to ensure that a user populates the Lead Source field prior to converting a Lead?",
        "code": "",
        "options": {
            "A": "Workflow Rule",
            "B": "Validation Rule",
            "C": "Formula Field",
            "D": "Process Builder"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>要在操作 (转换) 发生前<strong>阻止</strong>并强制用户输入，必须使用 <strong>Validation Rule (验证规则)</strong>。<br>规则示例：<code>AND(IsConverted, ISBLANK(Text(LeadSource)))</code>。<br>❌ A/D: 均为事后自动化，无法阻止用户操作。"
    },
    {
        "id": 196,
        "title": "How many Accounts will be inserted by the following block of code?",
        "code": "for (Integer i = 0; i < 500; i++) {\n  Account a = new Account(Name = 'New Account ' + i);\n  insert a;\n}",
        "options": {
            "A": "100",
            "B": "150",
            "C": "0",
            "D": "500"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Governor Limit: <strong>DML Statements Limit = 150</strong>。<br>循环执行到第 151 次 <code>insert</code> 时，会抛出 <code>System.LimitException: Too many DML statements: 151</code>。<br>由于未捕获异常，整个事务<strong>回滚 (Rollback)</strong>。<br>最终数据库中插入的记录数为 <strong>0</strong>。"
    },
    {
        "id": 197,
        "title": "Which relationship implementation supports these requirements? A developer has the following requirements: Calculate the total amount on an Order. Calculate the line amount for each Line Item based on quantity selected and price. Move Line Items to a different Order if a Line Item is not in stock.",
        "code": "",
        "options": {
            "A": "Order has a Lookup field to Line Item and there can be many Line Items per Order.",
            "B": "Line Item has a Lookup field to Order and there can be many Line Items per Order.",
            "C": "Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
            "D": "Line Item has a Master-Detail field to Order and the Master can be re-parented."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求拆解：<br>1. 计算 Order 总金额 -> 需要 <strong>Roll-up Summary</strong> -> 必须是 <strong>Master-Detail</strong>。<br>2. 移动 Line Item -> 需要 <strong>Reparenting (重新归属)</strong>。<br>因此：Line Item (子) 与 Order (父) 建立 Master-Detail 关系，并勾选 \"Allow Reparenting\"。<br>❌ A/B: Lookup 不支持 Roll-up。<br>❌ C: 关系反了 (父不该有指向子的字段)。"
    },
    {
        "id": 198,
        "title": "The values 'High', 'Medium', and 'Low' are identified as common values for multiple picklists across different objects. What is an approach a developer can take to streamline maintenance of the picklists and their values, while also restricting the values to the ones mentioned above?",
        "code": "",
        "options": {
            "A": "Create the Picklist on each object and use a Global Picklist Value Set containing the values.",
            "B": "Create the Picklist on each object as a required field and select \"Display values alphabetically, not in the order entered\".",
            "C": "Create the Picklist on each object and add a validation rule to ensure data integrity.",
            "D": "Create the Picklist on each object and select \"Restrict picklist to the values defined in the value set\"."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>跨对象共享 Picklist 值的标准功能是 <strong>Global Picklist Value Set (全局值集)</strong>。<br>只需在一个地方维护 'High', 'Medium', 'Low'，所有引用的 Picklist 都会同步更新，且自动限制为此范围。<br>❌ B/C/D: 无法实现跨对象统一维护。"
    },
    {
        "id": 199,
        "title": "Universal Containers uses a simple Order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a Master-Detail relationship between the Order and the Order Lines object. What is the best practice to get the sum of all order line totals on the order header?",
        "code": "",
        "options": {
            "A": "Declarative Roll-Up Summaries App",
            "B": "Roll-Up Summary field",
            "C": "Process Builder",
            "D": "Apex Trigger"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>已有 <strong>Master-Detail</strong> 关系，且需求是求和 (Sum)。<br>最简单、性能最好、零代码的最佳实践是使用标准的 <strong>Roll-Up Summary Field</strong>。<br>❌ A/C/D: 均属于过度设计。"
    },
    {
        "id": 200,
        "title": "Which two are phases in the Salesforce Application Event propagation framework? (Choose two.)",
        "code": "",
        "options": {
            "A": "Bubble",
            "B": "Default",
            "C": "Control",
            "D": "Emit"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>Application Event 的传播阶段包括：<br>1. <strong>Capture (捕获)</strong><br>2. <strong>Bubble (冒泡)</strong> (A)<br>3. <strong>Default (默认)</strong> (B)<br>❌ C/D: 不是标准阶段名称。"
    },
    {
        "id": 201,
        "title": "Which two events need to happen when deploying to a production org? (Choose two.)",
        "code": "",
        "options": {
            "A": "All Process Builder Processes must have at least 1% test coverage.",
            "B": "All Apex code must have at least 75% test coverage.",
            "C": "All triggers must have at least 1% test coverage.",
            "D": "All Visual Flows must have at least 1% test coverage."
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>部署到生产环境的强制要求：<br>✅ <strong>B</strong>: 所有 Apex 代码 (Classes + Triggers) 的<strong>整体覆盖率 (Overall Coverage)</strong> 必须 >= 75%。<br>✅ <strong>C</strong>: 每个 <strong>Apex Trigger</strong> 必须至少有 <strong>1%</strong> 的覆盖率 (不能为 0%)。<br>❌ A/D: 声明式工具 (Flow/Process Builder) 没有代码覆盖率要求。"
    },
    {
        "id": 202,
        "title": "A developer uses a loop to check each Contact in a list. When a Contact with the Title of 'Boss' is found, the Apex method should jump to the first line of code outside of the for loop.",
        "code": "for(Contact c : contactList) {\n  if(c.Title == 'Boss') {\n    // What goes here?\n  }\n}\n// Jump here",
        "options": {
            "A": "return;",
            "B": "continue;",
            "C": "break;",
            "D": "System.assert(false);"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>循环控制语句：<br>✅ <strong>break</strong>: 立即终止循环，跳出循环体，执行循环后的代码。<br>❌ A (return): 终止整个方法，返回调用者。<br>❌ B (continue): 跳过本次迭代剩余代码，进入下一次循环迭代。<br>❌ D: 抛出异常。"
    },
    {
        "id": 203,
        "title": "A developer has an Apex controller for a Visualforce page that takes an ID as a URL parameter. How should the developer prevent a cross-site scripting vulnerability?",
        "code": "",
        "options": {
            "A": "ApexPages.currentPage().getParameters().get('urlParam')",
            "B": "String.escapeSingleQuotes(ApexPages.currentPage().getParameters().get('urlParam'))",
            "C": "String.valueOf(ApexPages.currentPage().getParameters().get('urlParam'))",
            "D": "ApexPages.currentPage().getParameters().get('urlParam').escapeHtml4()"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br><strong>XSS (跨站脚本攻击)</strong> 的防御核心是对用户输入进行转义。<br>在 Apex 中，用于 HTML 上下文转义的标准方法是 <strong>String.escapeHtml4()</strong>。<br>❌ B: <code>escapeSingleQuotes</code> 用于防止 SOQL 注入。<br>❌ A/C: 未做任何防护。"
    },
    {
        "id": 204,
        "title": "An org tracks customer orders on an Order object and the line items of an Order on the Line Item object. The Line Item object has a Master-Detail relationship to the Order object. A developer has a requirement to calculate the order amount on an Order and the line amount on each Line Item based on quantity and price. What is the correct implementation?",
        "code": "",
        "options": {
            "A": "Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order.",
            "B": "Write a process on the Line Item that calculates the item amount and order amount and updates the fields on the Line Item and the Order.",
            "C": "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field.",
            "D": "Implement the line amount as a currency field and the order amount as a SUM formula field."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>最佳实践：优先使用声明式功能 (Clicks not Code)。<br>1. <strong>Line Amount</strong>: 行内计算 (Quantity * Price) -> 使用 <strong>Formula Field</strong>。<br>2. <strong>Order Amount</strong>: 汇总子记录总和 -> 因为是 Master-Detail 关系，直接使用 <strong>Roll-up Summary Field (SUM)</strong>。<br>❌ A/B: 用代码或流程处理简单的计算和汇总属于过度设计，且效率不如标准功能。<br>❌ D: 没有 \"SUM formula field\" 这种东西 (Formula 不能跨记录求和)。"
    },
    {
        "id": 205,
        "title": "Universal Containers (UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Office advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called \"GlobalAddress.\" Which field should the developer add to create the most efficient model that supports the business need?",
        "code": "",
        "options": {
            "A": "Add a Master-Detail field on the GlobalAddress object to the Account object.",
            "B": "Add a Master-Detail field on the Account object to the GlobalAddress object.",
            "C": "Add a Lookup field on the GlobalAddress object to the Account object.",
            "D": "Add a Lookup field on the Account object to the GlobalAddress object."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：多个 Account 共享一个 GlobalAddress。<br>关系方向：<strong>Account (多) -> GlobalAddress (一)</strong>。<br>因此需要在 <strong>Account</strong> 对象上创建一个指向 GlobalAddress 的字段。<br>关系类型：地址应该是独立存在的，且 Account 可以不选地址 (可选)，所以使用 <strong>Lookup</strong>。<br>❌ A/C: 关系反了 (一个地址只能属于一个 Account)。<br>❌ B: Master-Detail 意味着删除地址会级联删除 Account，且必须有父记录，不符合地址库的场景。"
    },
    {
        "id": 206,
        "title": "Which code should be used to update an existing Visualforce page that uses standard Visualforce components so that the page matches the look and feel of Lightning Experience?",
        "code": "",
        "options": {
            "A": "<apex:styleSheet value=\"{!URLFOR($Resource.slds, 'assets/slds.css')}\" />",
            "B": "<apex:slds/>",
            "C": "<apex:page lightningStyleSheets=\"true\">",
            "D": "<apex:includeLightning/>"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>要自动将标准 Visualforce 组件 (如 apex:pageBlock, apex:inputField) 渲染为 Lightning 风格 (SLDS)，只需在 <code>&lt;apex:page&gt;</code> 标签中添加属性 <strong>lightningStyleSheets=\"true\"</strong>。<br>这是最简单、官方推荐的迁移方案。<br>❌ B: 仅引入 SLDS CSS 库，不会自动转换标准组件的样式类。"
    },
    {
        "id": 207,
        "title": "A developer has a requirement to create an Order when an Opportunity reaches a \"Closed-Won\" status. Which tool should be used to implement this requirement?",
        "code": "",
        "options": {
            "A": "Lightning Component",
            "B": "Apex Trigger",
            "C": "Lightning Flow",
            "D": "Process Builder"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 自动化工具推荐顺序：<br>首选 <strong>Salesforce Flow (Lightning Flow)</strong>。<br>Flow 功能最强大，支持创建记录、复杂逻辑，且是官方主推的未来方向。<br>Process Builder (D) 和 Workflow 已进入维护模式，不再推荐新开发使用。<br>Trigger (B) 虽然可以，但应优先使用声明式工具 (Low Code)。"
    },
    {
        "id": 208,
        "title": "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
        "code": "",
        "options": {
            "A": "Developer orgs",
            "B": "Developer sandboxes",
            "C": "Full Copy sandboxes",
            "D": "Scratch orgs"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>Source-driven (源码驱动)</strong>, <strong>Independently (独立工作)</strong>, <strong>Different configurations (多配置)</strong>。<br>这正是 <strong>Scratch Orgs</strong> 的设计初衷。<br>Scratch Org 是临时的、可丢弃的、通过配置文件定义的 Org，非常适合 SFDX 开发模式和 CI/CD 流程。<br>❌ A/B/C: 都是持久化 Org，难以频繁创建/销毁和灵活配置。"
    },
    {
        "id": 209,
        "title": "A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex helper class. Change Set deployment to production fails with the warning: \"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required.\" What should the developer do to successfully deploy the new Apex trigger and helper class?",
        "code": "",
        "options": {
            "A": "Increase the test class coverage on the helper class.",
            "B": "Remove the failing test methods from the test class.",
            "C": "Run the tests using the \"Run All Tests\" method.",
            "D": "Create a test class and methods to cover the Apex trigger."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>部署失败原因很明确：<strong>Trigger 覆盖率为 0%</strong>。<br>虽然 Helper Class 有覆盖，但 Trigger 本身没有被触发执行。<br>必须编写测试方法，执行 DML 操作 (如 <code>insert</code>) 来<strong>触发 Trigger</strong>，从而满足 Trigger 至少 1% 覆盖率的硬性要求。<br>❌ A: Helper 覆盖率再高也解决不了 Trigger 为 0 的问题。"
    },
    {
        "id": 210,
        "title": "A developer must build an application that tracks which Accounts have purchased specific pieces of equipment that are represented as Products. Each Account could purchase many pieces of equipment. How should the developer track that an Account has purchased a piece of equipment?",
        "code": "",
        "options": {
            "A": "Use the Asset object",
            "B": "Use a Master-Detail on Product to Account",
            "C": "Use a Custom object",
            "D": "Use a Lookup on Account to Product"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>在 Salesforce 标准数据模型中：<br><strong>Asset (资产)</strong> 对象专门用于跟踪客户 (Account) 拥有的具体产品 (Product) 实例。<br>Asset 关联了 Account 和 Product，表示\"该客户购买了该产品\"。<br>❌ B: Product 是产品定义，不能作为 Account 的子对象。<br>❌ C: Asset 是标准功能，优先使用标准对象。<br>❌ D: 只能表示一对一或多对一，无法表示“购买了多个设备”。"
    },
    {
        "id": 211,
        "title": "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
        "code": "",
        "options": {
            "A": "List<sObject> searchList = [FIND \"*ACME*\" IN ALL FIELDS RETURNING Contact, Lead];",
            "B": "List<List<sObject>> searchList = [FIND \"*ACME*\" IN ALL FIELDS RETURNING Contact, Lead];",
            "C": "List<List<sObject>> searchList = [SELECT Name, ID FROM Contact, Lead WHERE Name like '%ACME%'];",
            "D": "Map<sObject> searchList = [FIND \"*ACME*\" IN ALL FIELDS RETURNING Contact, Lead];"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>SOSL (Salesforce Object Search Language)</strong> 用于跨对象搜索。<br>语法：<code>FIND 'Term' IN ALL FIELDS RETURNING Obj1, Obj2</code>。<br>返回值类型固定为：<strong><code>List&lt;List&lt;sObject&gt;&gt;</code></strong> (列表的列表)。<br>❌ A: 返回类型错误。<br>❌ C: SOQL 不支持同时从多个不相关对象查询。<br>❌ D: SOSL 不返回 Map。"
    },
    {
        "id": 212,
        "title": "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system based on a user-initiated action on the Opportunity detail page. Example values are as follows: Name, Amount, Account. Which two methods should the developer implement to fulfill the business requirement? (Choose two.)",
        "code": "",
        "options": {
            "A": "Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page",
            "B": "Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
            "C": "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
            "D": "Create an after update trigger on the Opportunity object that calls a helper method using @future(Callout=true) to perform the HTTP REST callout"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>User-initiated action (用户主动触发)</strong>。<br>这意味着需要一个按钮或链接，而不是后台自动触发 (如 Trigger/Process Builder)。<br>✅ <strong>A</strong>: Visualforce Page + Quick Action。<br>✅ <strong>C</strong>: Lightning Component + Lightning Action。<br>❌ B/D: 这些是基于数据变更自动触发的，不符合\"用户主动点击\"的需求。"
    },
    {
        "id": 213,
        "title": "A developer needs to prevent the creation of Request records when certain conditions exist in the system. A RequestLogic class exists that checks the conditions. What is the correct implementation?",
        "code": "",
        "options": {
            "A": "trigger RequestTrigger on Request (before insert) {\n  if (RequestLogic.isValid(Request)) {\n    Request.addError('Your request cannot be created at this time.');\n  }\n}",
            "B": "trigger RequestTrigger on Request (after insert) {\n  if (RequestLogic.isValid(Request)) {\n    Request.addError('Your request cannot be created at this time.');\n  }\n}",
            "C": "trigger RequestTrigger on Request (after insert) {\n  RequestLogic.validateRecords(trigger.new);\n}",
            "D": "trigger RequestTrigger on Request (before insert) {\n  RequestLogic.validateRecords(trigger.new);\n}"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>要阻止记录创建 (Validation)，必须使用 <strong>Before Insert Trigger</strong>。<br>并且需要将 <code>Trigger.new</code> (记录列表) 传递给逻辑类进行批量校验。<br>在逻辑类中调用 <code>record.addError()</code> 即可阻止保存。<br>❌ B/C: After Insert 阶段记录已保存，无法阻止创建 (addError 无效)。<br>❌ A: 语法错误，Request 是对象类型而非变量。"
    },
    {
        "id": 214,
        "title": "Where are two locations a developer can look to find information about the status of asynchronous or future calls? (Choose two.)",
        "code": "",
        "options": {
            "A": "Time-Based Workflow Monitor",
            "B": "Apex Flex Queue",
            "C": "Apex Jobs",
            "D": "Paused Flow Interviews component"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>异步 Apex 监控位置：<br>✅ <strong>C (Apex Jobs)</strong>: 查看 @future, Batch, Queueable, Scheduled Apex 的历史和状态。<br>✅ <strong>B (Apex Flex Queue)</strong>: 查看处于 \"Holding\" 状态的 Batch Job (最多 100 个)。<br>❌ A: 仅用于 Workflow。<br>❌ D: 仅用于 Flow。"
    },
    {
        "id": 215,
        "title": "A Visual Flow uses an Apex Action to provide additional information about multiple Contacts, stored in a custom class ContactInfo. Which is the correct definition of the Apex method that gets the additional information?",
        "code": "",
        "options": {
            "A": "@InvocableMethod(label='Additional Info') public ContactInfo getInfo(Id contactId) { ... }",
            "B": "@InvocableMethod(label='Additional Info') public List<ContactInfo> getInfo(List<Id> contactIds) { ... }",
            "C": "@InvocableMethod(label='Additional Info') public static ContactInfo getInfo(Id contactId) { ... }",
            "D": "@InvocableMethod(label='Additional Info') public static List<ContactInfo> getInfo(List<Id> contactIds) { ... }"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Invocable Method (供 Flow 调用) 的硬性规定：<br>1. 必须是 <strong>static</strong>。<br>2. 必须接收 <strong>List&lt;T&gt;</strong> 参数。<br>3. 必须返回 <strong>List&lt;T&gt;</strong> 结果。<br>这是为了支持 Flow 的批量化处理。<br>❌ A/B/C: 签名不符合规范 (非 static 或参数/返回类型非 List)。"
    },
    {
        "id": 216,
        "title": "A developer must create a DrawList class that provides capabilities defined in the Sortable and Drawable interfaces. public interface Sortable { void sort(); } public interface Drawable { void draw(); } Which is the correct implementation?",
        "code": "",
        "options": {
            "A": "public class DrawList implements Sortable, implements Drawable { ... }",
            "B": "public class DrawList implements Sortable, Drawable { ... }",
            "C": "public class DrawList extends Sortable, extends Drawable { ... }",
            "D": "public class DrawList extends Sortable, Drawable { ... }"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Apex 类实现多个接口的语法：<br><code>implements Interface1, Interface2</code><br>1. 关键字是 <strong>implements</strong> (不是 extends)。<br>2. 多个接口用<strong>逗号</strong>分隔，不需要重复写 implements。<br>❌ A: 重复写 implements。<br>❌ C/D: 接口不能被 extends (继承)，只能被 implements (实现)。"
    },
    {
        "id": 217,
        "title": "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts. How should the developer implement this request?",
        "code": "",
        "options": {
            "A": "Use the <apex:include> tag",
            "B": "Use the <apex:relatedList> tag",
            "C": "Add a method to the standard controller",
            "D": "Create a controller extension"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>要在 Visualforce 中显示标准 Page Layout 中配置的相关列表 (Related List)，应使用 <strong>&lt;apex:relatedList&gt;</strong> 标签。<br>例如：<code>&lt;apex:relatedList list=\"Contacts\" /&gt;</code>。<br>它会自动渲染出布局中配置的字段和按钮。<br>❌ A: 用于包含其他页面。<br>❌ C/D: 无需自定义代码。"
    },
    {
        "id": 218,
        "title": "What does the Lightning Component framework provide to developers?",
        "code": "",
        "options": {
            "A": "Support for Classic and Lightning UIs",
            "B": "Templates to create custom components",
            "C": "Extended governor limits for applications",
            "D": "Prebuilt components that can be reused"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Lightning Component Framework 的核心价值之一是提供了一套丰富的 <strong>Base Components (预构建组件)</strong>。<br>例如 <code>lightning-button</code>, <code>lightning-input</code> 等，开发者可以直接复用这些标准组件来快速构建 UI，而无需从零开始写 HTML/CSS。<br>❌ A: 仅支持 LEX/Mobile。<br>❌ C: 框架不改变 Governor Limits。"
    },
    {
        "id": 219,
        "title": "Which code displays the contents of a Visualforce page as a PDF?",
        "code": "",
        "options": {
            "A": "<apex:page contentType=\"application/pdf\">",
            "B": "<apex:page renderAs=\"pdf\">",
            "C": "<apex:page renderAs=\"application/pdf\">",
            "D": "<apex:page contentType=\"pdf\">"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>将 Visualforce 页面渲染为 PDF 的属性是 <strong>renderAs=\"pdf\"</strong>。<br>这是 Salesforce 内置的 PDF 渲染引擎开关。<br>❌ A: contentType 仅设置 MIME 类型，不会触发 PDF 渲染引擎 (可能下载为文件但内容未渲染)。"
    },
    {
        "id": 220,
        "title": "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every time an Account is created or updated. How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
        "code": "",
        "options": {
            "A": "8",
            "B": "1",
            "C": "4",
            "D": "2"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>执行流程：<br>1. <strong>Insert</strong> 操作开始。<br>2. <strong>After Insert Trigger</strong> 执行 (第 1 次)。<br>3. <strong>Workflow Rule</strong> 执行 -> 更新字段。<br>4. Workflow 字段更新导致 <strong>系统内部 Update</strong>。<br>5. <strong>After Update Trigger</strong> 执行 (第 2 次)。<br>总计触发 <strong>2 次</strong>。"
    },
    {
        "id": 221,
        "title": "A developer needs to implement the functionality for a service agent to gather multiple pieces of information from a customer in order to send a replacement credit card. Which automation tool meets these requirements?",
        "code": "",
        "options": {
            "A": "Lightning Component",
            "B": "Flow Builder",
            "C": "Process Builder",
            "D": "Approval Process"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求核心：<strong>Gather multiple pieces of information (收集信息)</strong>。<br>这意味着需要一个<strong>交互式界面</strong>让用户输入数据。<br>✅ <strong>Flow Builder (Screen Flow)</strong>: 提供 Screen 元素，可创建向导式界面，引导用户逐步输入。<br>❌ A: 是代码工具 (Coding)，题目问的是 Automation Tool (Low Code)。<br>❌ C/D: 是后台自动化，无法与用户交互。"
    },
    {
        "id": 222,
        "title": "A recursive transaction is initiated by a DML statement creating records for these two objects: Accounts, Contacts. The Account trigger hits a stack depth of 16. Which statement is true regarding the outcome of the transaction?",
        "code": "",
        "options": {
            "A": "The transaction fails and all the changes are rolled back.",
            "B": "The transaction succeeds as long as the Contact trigger stack depth is less than 16.",
            "C": "The transaction fails only if the Contact trigger stack depth is greater or equal to 16.",
            "D": "The transaction succeeds and all changes are committed to the database."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Governor Limit 规定：<strong>Maximum trigger depth = 16</strong>。<br>一旦在同一事务中，触发器递归调用深度达到 16 层，系统会抛出 <code>System.LimitException</code>。<br>这种异常是<strong>不可捕获</strong>的，直接导致整个事务失败并<strong>回滚 (Rollback)</strong>。<br>❌ B/C/D: 与其他对象的深度无关，只要有任意一个触顶即失败。"
    },
    {
        "id": 223,
        "title": "A developer at Universal Containers is tasked with implementing a new Salesforce application that must be able to be maintained completely by their company's Salesforce administrator. Which three options should be considered for building out the business logic layer of the application? (Choose three.)",
        "code": "",
        "options": {
            "A": "Process Builder",
            "B": "Scheduled Jobs",
            "C": "Invocable Actions",
            "D": "Workflows",
            "E": "Validation Rules"
        },
        "correct": "ADE",
        "explanation": "<strong>✅ Correct Answer: A, D & E</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Maintained completely by Administrator (由管理员完全维护)</strong>。<br>这意味着必须使用<strong>声明式 (Declarative/No-Code)</strong> 工具。<br>✅ <strong>A/D/E</strong>: Process Builder, Workflow, Validation Rule 都是 Admin 工具。<br>❌ B (Scheduled Jobs): 通常指 Apex 类，需要开发人员。<br>❌ C (Invocable Actions): 需要编写 Apex 代码供 Flow/Process 调用。"
    },
    {
        "id": 224,
        "title": "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
        "code": "",
        "options": {
            "A": "Define a Data Export scheduled job.",
            "B": "Use the Data Loader command line.",
            "C": "Schedule a report.",
            "D": "Create a Schedulable Apex class."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：备份所有数据 + <strong>Attachments (附件)</strong> + 每月一次。<br>✅ <strong>Data Export (数据导出服务)</strong>: Salesforce 原生功能，支持计划导出 (Weekly/Monthly)，可包含所有数据和附件/文档。<br>❌ B: Data Loader 命令行导出附件非常复杂。<br>❌ C: 报表不能导出附件。<br>❌ D: Apex 不适合处理大规模文件备份。"
    },
    {
        "id": 225,
        "title": "Which exception type cannot be caught?",
        "code": "",
        "options": {
            "A": "LimitException",
            "B": "NoAccessException",
            "C": "A Custom Exception",
            "D": "CalloutException"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br><strong>LimitException</strong> (Governor Limit 异常，如 SOQL 101, CPU Time Limit 等) 是<strong>无法捕获 (Uncatchable)</strong> 的。<br>一旦触发，系统立即终止进程并回滚事务，<code>try-catch</code> 块对它无效。<br>❌ B/C/D: 这些异常都可以被捕获。"
    },
    {
        "id": 226,
        "title": "Universal Containers stores the availability date on each Line Item of an Order, and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
        "code": "",
        "options": {
            "A": "Use a LATEST formula on each of the latest availability date fields.",
            "B": "Use a CEILING formula on each of the latest availability date fields.",
            "C": "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
            "D": "Use a MAX Roll-Up Summary field on the latest availability date fields."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：Order Ship Date = 所有 Line Item 中<strong>最晚 (Max)</strong> 的那个日期。<br>关系：Order (Master) - Line Item (Detail)。<br>✅ <strong>Roll-Up Summary (MAX)</strong>: 直接在父对象上计算子记录日期字段的最大值。<br>❌ A/B: 公式函数名称错误或用途不符。"
    },
    {
        "id": 227,
        "title": "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. Order records will be imported into Salesforce. How should the Order Number field be defined in Salesforce?",
        "code": "",
        "options": {
            "A": "Direct Lookup",
            "B": "Lookup",
            "C": "Number with External ID",
            "D": "Indirect Lookup"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>外部系统的唯一标识符应存储在 Salesforce 的 <strong>External ID</strong> 字段中。<br>这允许在导入数据时进行 <strong>Upsert (插入或更新)</strong> 操作，防止重复。<br>✅ <strong>C</strong>: Number 类型并勾选 \"External ID\" 属性。<br>❌ A/D: 用于 External Objects (Salesforce Connect)。"
    },
    {
        "id": 228,
        "title": "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
        "code": "",
        "options": {
            "A": "Use SOQL to query the org for the required data",
            "B": "Use Anonymous Apex to create the required data",
            "C": "Use Test.loadData() and reference a CSV file",
            "D": "Use Test.loadData() and reference a static resource"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在测试类中创建测试数据的标准方法之一是使用 <strong>Test.loadData()</strong>。<br>它需要引用一个包含数据的 CSV 文件，该文件必须先上传为 <strong>Static Resource</strong>。<br>❌ A: 测试环境默认隔离数据，查不到 Org 数据。<br>❌ C: 必须引用 Static Resource，不能直接引用本地文件。"
    },
    {
        "id": 229,
        "title": "Which two statements are true about Getter and Setter methods? (Choose two.)",
        "code": "",
        "options": {
            "A": "Setter methods always have to be declared global",
            "B": "Setter methods are required to pass a value from a page to a controller.",
            "C": "There is no guarantee for the order in which Getter or Setter methods are executed.",
            "D": "Getter methods can pass a value from a controller to a page."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>Visualforce Getter/Setter 机制：<br>✅ <strong>D (Getter)</strong>: 用于将数据从 Controller 传递到 Page (显示数据)。<br>✅ <strong>C (Order)</strong>: Getter 和 Setter 的执行顺序是<strong>不确定的 (No Guarantee)</strong>，开发时不能依赖特定顺序。<br>❌ A: public 即可。<br>❌ B: 并非所有场景都必须显式写 setter (如自动属性 <code>{get;set;}</code>)。"
    },
    {
        "id": 230,
        "title": "What is a benefit of developing applications in a multi-tenant environment?",
        "code": "",
        "options": {
            "A": "Access to predefined computing resources",
            "B": "Enforced best practices for development",
            "C": "Unlimited processing power and memory",
            "D": "Default out-of-the-box configuration"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>多租户环境通过 <strong>Governor Limits</strong> 强制开发者编写高效、可扩展的代码。<br>这被视为一种\"强制的最佳实践 (Enforced Best Practices)\"，确保应用不会占用过多资源，从而保证整个云平台的稳定性。<br>❌ C: 资源非常有限 (受限)。<br>❌ A/D: 这些是 SaaS/PaaS 特性，非多租户架构的核心\"开发\"收益。"
    },
    {
        "id": 231,
        "title": "A developer needs to confirm that a Contact trigger works correctly without changing the organization's data. What should the developer do to test the Contact trigger?",
        "code": "",
        "options": {
            "A": "Use Deploy from the VSCode IDE to deploy an 'Insert Contact' Apex class.",
            "B": "Use the New button on the Salesforce Contacts Tab to create a new Contact record.",
            "C": "Use the Open Execute Anonymous feature on the Developer Console to run an 'Insert Contact' DML statement.",
            "D": "Use the Test menu on the Developer Console to run all test classes for the Contact trigger."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 单元测试 (Unit Tests) 运行在<strong>隔离的测试上下文</strong>中。<br>这意味着测试执行的所有数据操作 (Insert/Update) 都会在测试结束时<strong>自动回滚</strong>，不会更改 Org 的真实数据。<br>❌ B/C: 在 UI 或匿名窗口中执行的操作会对真实数据造成修改。<br>❌ A: Deploy 是部署元数据，非测试运行。"
    },
    {
        "id": 232,
        "title": "A developer created a Visualforce page and custom controller to display the Account.Type field. The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is properly referenced on the Visualforce page, what should the developer do to correct the problem?",
        "code": "public class customCtrlr {\n  private Account theAccount;\n  public String actType;\n  public customCtrlr() {\n    // query logic...\n    actType = theAccount.Type;\n  }\n}\n// VF Page: The Account Type is {!actType}",
        "options": {
            "A": "Convert the Account.Type to a String",
            "B": "Add a getter method for the actType attribute",
            "C": "Add with sharing to the custom controller",
            "D": "Change the Account attribute to public"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>在 Visualforce 中，要使页面能够访问 Controller 的属性，该属性必须具有 <strong>Public Getter 方法</strong> (即 <code>getActType()</code> 或 <code>{get; set;}</code>)。<br>虽然变量声明为 <code>public String actType;</code>，但没有 Getter，VF 引擎无法读取它的值。<br>❌ A: 类型已经是 String。<br>❌ C: with sharing 仅影响安全，不影响数据绑定。"
    },
    {
        "id": 233,
        "title": "Which two statements are valid regarding Apex classes and interfaces? (Choose two.)",
        "code": "",
        "options": {
            "A": "Classes are final by default.",
            "B": "Interface methods are public by default.",
            "C": "Inner classes are private by default.",
            "D": "A class can only have one inner class level."
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>Apex 类与接口特性：<br>✅ <strong>B</strong>: 接口中的方法默认且必须是 <strong>public</strong>。<br>✅ <strong>C</strong>: 内部类 (Inner Class) 默认访问修饰符是 <strong>private</strong>。<br>❌ A: 类默认是 <strong>virtual</strong> (可继承) 还是 final? 实际上 Apex 类默认不是 final，但也需要显式 virtual 才能被继承 (除了抽象类)。(注：但在本题语境下，A 肯定错误，C 是明确的文档行为)。<br>❌ D: 支持多层嵌套内部类。"
    },
    {
        "id": 234,
        "title": "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL. Which three statements are useful inside the unit test to effectively test the custom controller? (Choose three.)",
        "code": "",
        "options": {
            "A": "insert pageRef;",
            "B": "String nextPage = controller.save().getUrl();",
            "C": "ApexPages.currentPage().getParameters().put('Input', 'TestValue');",
            "D": "public ExtendedController(ApexPages.StandardController cntrl) {}",
            "E": "Test.setCurrentPage(pageRef);"
        },
        "correct": "BCE",
        "explanation": "<strong>✅ Correct Answer: B, C & E</strong><br><br><strong>🧠 解析：</strong><br>测试 VF 控制器的关键步骤：<br>1. <strong>设置页面 (E)</strong>: <code>Test.setCurrentPage(pageRef);</code> 模拟当前上下文。<br>2. <strong>传参 (C)</strong>: <code>ApexPages.currentPage().getParameters().put(...)</code> 模拟 URL 参数。<br>3. <strong>调用方法 (B)</strong>: 调用 Controller 的 Action 方法 (如 save) 并验证返回的 PageReference URL。<br>❌ A: PageReference 不是 sObject，不能 insert。<br>❌ D: 这是构造函数定义，不是测试代码。"
    },
    {
        "id": 235,
        "title": "What are three considerations when using the @InvocableMethod annotation in Apex? (Choose three.)",
        "code": "",
        "options": {
            "A": "A method using the @InvocableMethod annotation must be declared as static.",
            "B": "A method using the @InvocableMethod annotation can be declared as public or global.",
            "C": "A method using the @InvocableMethod annotation can have multiple input parameters.",
            "D": "A method using the @InvocableMethod annotation must define a return value.",
            "E": "Only one method using the @InvocableMethod annotation can be defined per Apex class."
        },
        "correct": "ABE",
        "explanation": "<strong>✅ Correct Answer: A, B & E</strong><br><br><strong>🧠 解析：</strong><br>Invocable Method 限制：<br>✅ <strong>A</strong>: 必须是 <strong>static</strong>。<br>✅ <strong>B</strong>: 访问修饰符必须是 <strong>public</strong> 或 <strong>global</strong>。<br>✅ <strong>E</strong>: 每个类只能有 <strong>一个</strong> Invocable Method。<br>❌ C: 只能有<strong>一个参数</strong> (必须是 List 类型)。<br>❌ D: 可以返回 void。"
    },
    {
        "id": 236,
        "title": "An org has an existing Visual Flow that creates an Opportunity with an Update Records element. A developer must update the Visual Flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update should the developer make in the Visual Flow?",
        "code": "",
        "options": {
            "A": "Add a new Create Records element.",
            "B": "Add a new Quick Action (of type Create) element.",
            "C": "Add a new Update Records element.",
            "D": "Add a new Get Records element."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：创建一个新的 Contact。<br>Flow 中用于创建记录的标准元素是 <strong>Create Records</strong>。<br>创建后，Flow 会自动将新记录的 ID 存储在变量中，随后可在 Update Records 元素中将其赋值给 Opportunity 的 ContactId 字段。<br>❌ B: Quick Action 通常用于 UI 交互。<br>❌ C: Update 只能更新已存在的记录。<br>❌ D: Get 用于查询。"
    },
    {
        "id": 237,
        "title": "What are three characteristics of change set deployments? (Choose three.)",
        "code": "",
        "options": {
            "A": "They require a deployment connection.",
            "B": "They can be used to transfer records.",
            "C": "They can be used only between related organizations.",
            "D": "They can be used to deploy custom settings data.",
            "E": "They use an all-or-none deployment model."
        },
        "correct": "ACE",
        "explanation": "<strong>✅ Correct Answer: A, C & E</strong><br><br><strong>🧠 解析：</strong><br>Change Sets (变更集) 特性：<br>✅ <strong>A</strong>: 必须在源和目标 Org 之间建立 <strong>Deployment Connection</strong>。<br>✅ <strong>C</strong>: 只能在<strong>关联的组织</strong> (如 Sandbox <-> Production) 之间部署。<br>✅ <strong>E</strong>: 默认采用 <strong>All-or-None</strong> (全有或全无) 模式，出错即回滚。<br>❌ B/D: 变更集只能部署<strong>元数据 (Metadata)</strong>，不能传输数据记录 (Records/Data)。"
    },
    {
        "id": 238,
        "title": "When importing and exporting data into Salesforce, which two statements are true? (Choose two.)",
        "code": "",
        "options": {
            "A": "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
            "B": "Developer and Developer Pro sandboxes have different storage limits.",
            "C": "Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
            "D": "Data Import Wizard is a client application provided by Salesforce."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>✅ <strong>A</strong>: Bulk API 高效处理大数据，但<strong>绝对不能绕过存储限制</strong>。<br>✅ <strong>B</strong>: Developer Sandbox (200MB) 和 Developer Pro (1GB) 的存储限制确实不同。<br>❌ D: Data Import Wizard 是<strong>网页端工具</strong> (Setup 菜单内)，不是客户端应用 (如 Data Loader)。"
    },
    {
        "id": 239,
        "title": "Which code in a Visualforce page and/or controller might present a security vulnerability?",
        "code": "",
        "options": {
            "A": "<apex:outputText escape=\"false\" value=\"{!$CurrentPage.parameters.userInput}\"/>",
            "B": "<apex:outputText value=\"{!$CurrentPage.parameters.userInput}\"/>",
            "C": "<apex:outputField value=\"{!ctrl.userInput}\"/>",
            "D": "<apex:outputField escape=\"false\" value=\"{!ctrl.userInput}\"/>"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br><strong>XSS 漏洞</strong>典型场景：<br>直接将 URL 参数 (<code>$CurrentPage.parameters</code>) 输出到页面，并且<strong>关闭了 HTML 转义 (escape=\"false\")</strong>。<br>攻击者可以通过 URL 注入恶意脚本。<br>❌ B: 默认 <code>escape=\"true\"</code>，安全。<br>❌ C/D: <code>outputField</code> 会自动处理显示格式和安全，通常较安全。"
    },
    {
        "id": 240,
        "title": "What is an example of a polymorphic lookup field in Salesforce?",
        "code": "",
        "options": {
            "A": "The WhatId field on the standard Event object",
            "B": "The ParentId field on the standard Account object",
            "C": "A custom field Link__c on the standard Contact object that looks up to an Account or a Campaign",
            "D": "The LeadId and ContactId fields on the standard Campaign Member object"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br><strong>Polymorphic Lookup (多态查找)</strong> 指一个查找字段可以指向多种不同类型的对象。<br>✅ <strong>A (Event.WhatId)</strong>: 可以指向 Account, Opportunity, Campaign, Case 等多种对象。<br>❌ B: Account.ParentId 只能指向 Account。<br>❌ C: 自定义查找字段通常只能指向一种对象 (除非是特殊的多态关系，但题目描述不准确)。"
    },
    {
        "id": 241,
        "title": "A developer must implement CheckPaymentProcessor class that provides check processing payment capabilities, following what is defined for pay in the PaymentProcessor interface. Which is the correct implementation to use the PaymentProcessor interface class?",
        "code": "public interface PaymentProcessor {\n  void pay(Decimal amount);\n}",
        "options": {
            "A": "public class CheckPaymentProcessor implements PaymentProcessor { public void payD(Decimal amount); }",
            "B": "public class CheckPaymentProcessor implements PaymentProcessor { public void pay(Decimal amount) {} }",
            "C": "public class CheckPaymentProcessor extends PaymentProcessor { public void pay(Decimal amount) {} }",
            "D": "public class CheckPaymentProcessor extends PaymentProcessor { public void pay(Decimal amount) {} }"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>接口实现规则：<br>1. 必须使用 <strong>implements</strong> 关键字。<br>2. 必须实现接口中定义的所有方法，且签名完全一致。<br>✅ <strong>B</strong>: 正确实现。<br>❌ A: 方法名 <code>payD</code> 不匹配。<br>❌ C/D: 接口不能用 <code>extends</code> (这是用于类的)。"
    },
    {
        "id": 242,
        "title": "A developer is implementing an Apex class for a financial system. Within the class, the variables creditAmount and debitAmount should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use the static keyword and assign its value in a static initializer.",
            "B": "Use the final keyword and assign its value when declaring the variable.",
            "C": "Use the final keyword and assign its value in the class constructor.",
            "D": "Use the static keyword and assign its value in the class constructor."
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中，<strong>final</strong> 关键字表示变量一旦赋值就不可修改。<br>final 变量只能在两个地方赋值：<br>1. <strong>声明时 (B)</strong>。<br>2. <strong>构造函数中 (C)</strong>。<br>❌ A/D: static 变量本身是可变的 (除非也加了 final)。"
    },
    {
        "id": 243,
        "title": "A SSN__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's social security number and is marked as Unique in the schema definition. As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each candidate's social security number as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?",
        "code": "",
        "options": {
            "A": "Update the SSN__c field definition to mark it as an External Id.",
            "B": "Upload the CSV into a custom object related to Candidate__c.",
            "C": "Create a before insert trigger to correctly map the records.",
            "D": "Create a Process Builder on the Candidate__c object to map the records."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>要基于外部数据 (如 CSV) 更新现有记录，最佳方法是使用 <strong>Upsert</strong> 操作。<br>Upsert 需要一个关键字段来匹配记录。<br>将 <code>SSN__c</code> 标记为 <strong>External Id</strong>，就可以直接用它作为匹配键，自动识别是更新现有记录还是插入新记录。<br>❌ B/C/D: 过于复杂且非标准做法。"
    },
    {
        "id": 244,
        "title": "Given the following code snippet, that is part of a custom controller for a Visualforce page: In which two ways can the try/catch be enclosed to enforce object-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access to the object? (Choose two.)",
        "code": "public void updateContact(Contact thisContact) {\n  thisContact.IsActive__c = false;\n  try {\n    update thisContact;\n  } catch (Exception e) { ... }\n}",
        "options": {
            "A": "Use if (thisContact.OwnerId == UserInfo.getUserId())",
            "B": "Use if (Schema.sObjectType.Contact.isAccessible())",
            "C": "Use if (Schema.sObjectType.Contact.fields.IsActive__c.isUpdateable())",
            "D": "Use if (Schema.sObjectType.Contact.isUpdateable())"
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>检查对象级权限 (CRUD) 的标准方法：<br>✅ <strong>D (isUpdateable)</strong>: 检查用户是否有权更新 Contact 对象。<br>✅ <strong>B (isAccessible)</strong>: 检查用户是否有权读取 Contact 对象 (通常 update 前需要 read)。<br>❌ A: 检查所有权不等于检查 CRUD 权限。<br>❌ C: 这是字段级安全性 (FLS)，题目问的是对象级权限。"
    },
    {
        "id": 245,
        "title": "Universal Containers wants to assess the advantages of declarative development versus programmatic customization for specific use cases in its Salesforce implementation. What are two advantages of declarative development over programmatic customization? (Choose two.)",
        "code": "",
        "options": {
            "A": "Declarative development has higher design limits and query limits.",
            "B": "Declarative development does not require Apex test classes.",
            "C": "Declarative development does not require maintenance.",
            "D": "Declarative development can be updated in production using the Setup UI."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>声明式开发 (Clicks not Code) 的优势：<br>✅ <strong>B</strong>: 不需要编写和维护 Apex 测试类。<br>✅ <strong>D</strong>: 可以直接在生产环境 (Setup UI) 中进行配置更改 (虽然建议先在 Sandbox 测试，但技术上是可行的，而代码必须部署)。<br>❌ A: 限制相同。<br>❌ C: 任何功能都需要维护。"
    },
    {
        "id": 246,
        "title": "Given the following Anonymous Block: List<Case> casesToUpdate = new List<Case>(); for (Case thisCase : [SELECT Id, Status FROM Case LIMIT 50000]) { ... } try { Database.update(casesToUpdate, false); } ... What should a developer consider for an environment that has over 10,000 Case records?",
        "code": "",
        "options": {
            "A": "The transaction will succeed and changes will be committed.",
            "B": "The transaction will fail due to exceeding the governor limit.",
            "C": "The try/catch block will handle any DML exceptions thrown.",
            "D": "The try/catch block will handle exceptions thrown by governor limits."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Governor Limit 限制：<br>1. <strong>DML Rows Limit</strong>: 单次事务最多处理 10,000 条记录。<br>如果环境中有超过 10,000 条 Case，<code>Database.update(casesToUpdate)</code> 会尝试更新所有记录，从而触发 Limit Exception。<br>此类异常<strong>无法被捕获</strong>，事务直接失败。<br>❌ C/D: Limit 异常不可捕获。"
    },
    {
        "id": 247,
        "title": "A developer has two custom controller extensions where each has a save() method. Which save() method will be called for the following Visualforce page?",
        "code": "<apex:page standardController=\"Account\" extensions=\"ExtensionA, ExtensionB\">\n  <apex:commandButton action=\"{!save}\" value=\"Save\"/>\n</apex:page>",
        "options": {
            "A": "ExtensionA save()",
            "B": "ExtensionB save()",
            "C": "Standard Controller save()",
            "D": "Runtime error will be generated"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 方法解析顺序：<br>1. 从左到右检查 <code>extensions</code> 列表。<br>2. 第一个匹配到的方法会被执行。<br>因此，<code>ExtensionA</code> 中的 <code>save()</code> 优先于 <code>ExtensionB</code> 和标准控制器。<br>❌ B/C: 被覆盖。<br>❌ D: 不会报错。"
    },
    {
        "id": 248,
        "title": "A developer wants to invoke an outbound message when a record meets a specific criteria. Which three features satisfy this use case? (Choose three.)",
        "code": "",
        "options": {
            "A": "Process Builder can be used to check the record criteria and send an outbound message with Apex Code.",
            "B": "Process Builder can be used to check the record criteria and send an outbound message without Apex Code.",
            "C": "Approval Process has the capability to check the record criteria and send an outbound message without Apex Code.",
            "D": "Workflows can be used to check the record criteria and send an outbound message.",
            "E": "Visual Workflow can be used to check the record criteria and send an outbound message without Apex Code."
        },
        "correct": "ACD",
        "explanation": "<strong>✅ Correct Answer: A, C & D</strong><br><br><strong>🧠 解析：</strong><br>支持 Outbound Message 的工具：<br>✅ <strong>D (Workflow Rule)</strong>: 原生支持。<br>✅ <strong>C (Approval Process)</strong>: 原生支持。<br>✅ <strong>A (Process Builder)</strong>: 原生<strong>不支持</strong>，但可以通过调用 Apex (Invocable Method) 间接实现 (题目文字游戏)。<br>❌ B: Process Builder 原生无此 Action。<br>❌ E: Flow 原生也无此 Action。"
    },
    {
        "id": 249,
        "title": "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage. Which two strategies should a developer use to accomplish this? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use a Flow Builder.",
            "B": "Use a validation rule.",
            "C": "Use the Process Automation Settings.",
            "D": "Mark fields as read-only on the page layout."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>锁定记录 (防止编辑) 的方法：<br>✅ <strong>B (Validation Rule)</strong>: 最简单有效。<code>AND(ISPICKVAL(StageName, 'Closed Won'), NOT($Permission.Override_Lock))</code>。<br>✅ <strong>A (Flow Builder)</strong>: Before-Save Flow 可以检查状态并添加错误消息阻止保存。<br>❌ D: Page Layout 只读不安全 (API 可改)。<br>❌ C: 无此功能。"
    },
    {
        "id": 250,
        "title": "A team of many developers work in their own individual orgs that have the same configuration as the production org. Which type of org is best suited for this scenario?",
        "code": "",
        "options": {
            "A": "Developer Sandbox",
            "B": "Developer Edition",
            "C": "Full Sandbox",
            "D": "Partner Developer Edition"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Same configuration as production (与生产配置相同)</strong> + <strong>Individual orgs (个人环境)</strong>。<br>✅ <strong>Developer Sandbox (A)</strong>: 复制生产环境的元数据 (配置)，且成本低、创建快，适合每个开发者人手一个。<br>❌ B: Developer Edition 是空环境，配置与生产不同。<br>❌ C: Full Sandbox 太贵且刷新慢，通常共用。<br>❌ D: 合作伙伴专用。"
    },
    {
        "id": 251,
        "title": "Refer to the following code snippet for an environment that has more than 200 Accounts belonging to the 'Technology' industry: for (Account thisAccount : [SELECT Id, Industry FROM Account LIMIT 150]) { ... thisAccount.Is_Tech__c = true; } update thisAccount; } When the code executes, what happens as a result of the Apex transaction?",
        "code": "",
        "options": {
            "A": "The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
            "B": "If executed in asynchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit.",
            "C": "The Apex transaction fails with the following message: SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c.",
            "D": "If executed in an asynchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 Apex 中更新 sObject 的字段前，该字段通常应该被查询出来 (或者新建的 sObject)。<br>这里执行了 <code>thisAccount.Is_Tech__c = true;</code>，但 SOQL 查询只查了 Id 和 Industry，没有查 <code>Is_Tech__c</code>。<br>当尝试更新未查询的字段时，会抛出运行时异常：<strong>SObject row was retrieved via SOQL without querying the requested field</strong>。<br>这将导致整个事务失败。<br>❌ A: 事务会失败。<br>❌ B/D: DML 限制不是首要错误原因。"
    },
    {
        "id": 252,
        "title": "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of tests, allowing them to test independent requirements for various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?",
        "code": "",
        "options": {
            "A": "Create a mock using the Stub API.",
            "B": "Use @TestSetup with a void method.",
            "C": "Add @isTest(seeAllData=true) at the start of the unit test class.",
            "D": "Create test data before Test.startTest() in the unit test."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>在测试类中，<strong>@TestSetup</strong> 方法用于创建公共测试数据。<br>该方法在所有测试方法执行前只运行一次。<br>每个测试方法在开始时都会获得这组数据的<strong>全新副本 (Rollback)</strong>。<br>这是创建基准数据最高效、标准的方法。<br>❌ D: 在每个测试方法中重复创建数据效率低。<br>❌ C: SeeAllData=true 依赖 Org 真实数据，不稳定。"
    },
    {
        "id": 253,
        "title": "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?",
        "code": "",
        "options": {
            "A": "Use the Schema.userInfo.Opportunity.getDefaultRecordType() method.",
            "B": "Query the Profile where the ID equals UserInfo.getProfileId() and then use the profile.Opportunity.getDefaultRecordType() method.",
            "C": "Create the Opportunity and check the Opportunity record type, which will have the record ID of the current user's default record type, before inserting.",
            "D": "Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping() is true."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>获取默认 Record Type 的标准方法是通过 <strong>Schema Describe</strong>。<br>步骤：<br>1. 获取 <code>Opportunity.SObjectType.getDescribe()</code>。<br>2. 调用 <code>getRecordTypeInfos()</code> 获取所有记录类型信息。<br>3. 遍历列表，检查 <code>isDefaultRecordTypeMapping()</code> 是否为 true。<br>❌ A/B: 方法不存在。<br>❌ C: 实例化对象不会自动填充 RecordTypeId。"
    },
    {
        "id": 254,
        "title": "What can be developed using the Lightning Component framework?",
        "code": "",
        "options": {
            "A": "Salesforce integrations",
            "B": "Salesforce Classic and Lightning user interface pages",
            "C": "Hosted web applications",
            "D": "Single-page web apps"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Lightning Component Framework (Aura/LWC) 是一个 UI 框架，专门用于构建<strong>单页应用 (Single-page Applications, SPAs)</strong>。<br>它运行在客户端 (浏览器)，通过 JavaScript 处理逻辑和渲染。<br>❌ B: 不支持 Classic。<br>❌ A: 集成通常指后端 API 交互。<br>❌ C: 托管 Web 应用通常指 Heroku 等 PaaS。"
    },
    {
        "id": 255,
        "title": "A developer created a new after insert trigger on the Lead object that creates Task records for each Lead. After deploying to production, an existing outside integration that inserts Lead records in batches to Salesforce is occasionally reporting total batch failures being caused by the Task insert statement. This causes the integration process in the outside system to stop, requiring a manual restart. Which change should the developer make to allow the integration to continue when some records in a batch cause failures due to the Task insert statement, so that manual restarts are not needed?",
        "code": "",
        "options": {
            "A": "Deactivate the trigger before the integration runs.",
            "B": "Use a try-catch block after the insert statement.",
            "C": "Use the Database method with allOrNone set to false.",
            "D": "Remove the Apex class from the integration user's profile."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>问题在于 Trigger 中的 <code>insert tasks</code> 是全有或全无操作，一旦某个 Task 失败，会导致整个 Trigger 和 Lead Batch 失败。<br>解决方案：允许<strong>部分成功 (Partial Success)</strong>。<br>使用 <code>Database.insert(taskList, false)</code>。<br>这样即使某些 Task 失败，也不会回滚整个 Lead Batch，集成流程可以继续。<br>❌ B: try-catch 只能捕获异常，但如果是普通 DML，整个事务还是会回滚。"
    },
    {
        "id": 256,
        "title": "Which annotation exposes an Apex class as a RESTful web service?",
        "code": "",
        "options": {
            "A": "@RemoteAction",
            "B": "@RestResource",
            "C": "@HttpInvocable",
            "D": "@AuraEnabled"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>将 Apex 类暴露为自定义 REST API 端点的标准注解是 <strong>@RestResource</strong>。<br>通常配合 <code>urlMapping</code> 属性使用 (如 <code>@RestResource(urlMapping='/myService/*')</code>)。<br>❌ A: 用于 VF 调用。<br>❌ D: 用于 Aura/LWC 调用。"
    },
    {
        "id": 257,
        "title": "A developer created these three roll-up summary fields on the custom object Project__c: Total_Timesheets__c, Total_Approved_Timesheets__c, Total_Rejected_Timesheets__c. The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. What are two benefits of choosing a formula field instead of an Apex trigger to fulfill the request? (Choose two.)",
        "code": "",
        "options": {
            "A": "A test class will validate the formula field during deployment.",
            "B": "A formula field will trigger existing automation when deployed.",
            "C": "Using a formula field reduces maintenance overhead.",
            "D": "A formula field will calculate the value retroactively for existing records."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>Formula Field (公式字段) 优势：<br>✅ <strong>C (低维护)</strong>: 声明式配置，无需写代码和测试类。<br>✅ <strong>D (即时计算)</strong>: 公式是实时计算的，创建后会自动对所有历史记录生效 (无需刷数据)。<br>❌ B: 公式值的变化不会触发 Trigger/Flow。<br>❌ A: 公式不需要测试类覆盖。"
    },
    {
        "id": 258,
        "title": "A custom Visualforce controller calls the ApexPages.addMessage() method, but no messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
        "code": "",
        "options": {
            "A": "<apex:message for=\"info\"/>",
            "B": "<apex:facet name=\"messages\" />",
            "C": "<apex:pageMessage severity=\"info\" />",
            "D": "<apex:pageMessages />"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Apex Controller 添加的消息 (<code>ApexPages.addMessage</code>) 存储在页面消息队列中。<br>要在页面上统一显示这些消息，必须包含 <strong>&lt;apex:pageMessages /&gt;</strong> 组件。<br>它会自动处理所有级别 (Error, Info, Warning) 的消息显示。<br>❌ A: <code>apex:message</code> 通常用于特定字段的错误显示。<br>❌ C: <code>apex:pageMessage</code> 用于硬编码显示一条消息。"
    },
    {
        "id": 259,
        "title": "In the following example, which sharing context will myMethod execute under when it is invoked?",
        "code": "public class myClass {\n  public void myMethod() {\n    /* implementation */\n  }\n}",
        "options": {
            "A": "Sharing rules will not be enforced for the running user.",
            "B": "Sharing rules will be inherited from the calling context.",
            "C": "Sharing rules will be enforced for the running user.",
            "D": "Sharing rules will be enforced by the instantiating class."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Apex 类默认运行在 <strong>System Mode (系统模式)</strong>，即 <strong>Without Sharing</strong>。<br>如果类定义中没有显式写 <code>with sharing</code> 或 <code>inherited sharing</code>，它就不会强制执行当前用户的共享规则。<br>因此：<strong>Sharing rules will not be enforced (A)</strong>。<br>❌ C: 只有加了 with sharing 才会 enforce。"
    },
    {
        "id": 260,
        "title": "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
        "code": "",
        "options": {
            "A": "@InvocableMethod global static List> getLevel(List input) {}",
            "B": "@InvocableMethod global Recommendation getLevel(ContactWrapper input) {}",
            "C": "@InvocableMethod global List> getLevel(List input) {}",
            "D": "@InvocableMethod global static List<Recommendation> getLevel(List input) {}"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Invocable Method 的标准签名要求：<br>1. <strong>static</strong>。<br>2. <strong>List 入参</strong>。<br>3. <strong>List 返回值</strong>。<br>在 Next Best Action (NBA) 场景下，通常返回 <code>List&lt;Recommendation&gt;</code>。<br>✅ <strong>D</strong>: 符合所有要求。<br>❌ A/C: 泛型语法错误。<br>❌ B: 参数和返回类型不是 List。"
    },
    {
        "id": 261,
        "title": "Which three Salesforce resources can be accessed from a Lightning web component? (Choose three.)",
        "code": "",
        "options": {
            "A": "All external libraries",
            "B": "Static resources",
            "C": "Third-party web components",
            "D": "Content asset files",
            "E": "SVG resources"
        },
        "correct": "BDE",
        "explanation": "<strong>✅ Correct Answer: B, D & E</strong><br><br><strong>🧠 解析：</strong><br>LWC 可以直接访问的资源：<br>✅ <strong>B (Static Resources)</strong>: 通过 <code>@salesforce/resourceUrl</code> 导入 JS/CSS/Image。<br>✅ <strong>D (Content Asset Files)</strong>: 通过 <code>@salesforce/contentAssetUrl</code> 导入。<br>✅ <strong>E (SVG Resources)</strong>: 用于自定义图标或图形。<br>❌ A: 必须先上传为 Static Resource 才能访问。<br>❌ C: 不支持直接加载第三方组件 URL。"
    },
    {
        "id": 262,
        "title": "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
        "code": "",
        "options": {
            "A": "Write a Process Builder that links the custom object to the Opportunity.",
            "B": "Use the Streaming API to create real-time roll-up summaries.",
            "C": "Write a trigger on the child object and use a red-black tree sorting to sum the amount for all related child objects under the Opportunity.",
            "D": "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>非主从关系 (Non-Master-Detail / Lookup) 不支持标准的 Roll-up Summary 字段。<br>要在 Lookup 关系下实现汇总 (Roll-up)，必须使用 <strong>Apex Trigger</strong>。<br>✅ <strong>D</strong>: 在 Trigger 中使用 SOQL 聚合函数 (SUM) 计算总额，并更新父对象。<br>❌ A/B: 均无法实现汇总。<br>❌ C: 红黑树算法无关。"
    },
    {
        "id": 263,
        "title": "What is the result of the following code? Account a = new Account(); Database.insert(a, false);",
        "code": "",
        "options": {
            "A": "The record will be created and no error will be reported.",
            "B": "The record will not be created and no error will be reported.",
            "C": "The record will be created and a message will be in the debug log.",
            "D": "The record will not be created and an exception will be thrown."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><code>Account a = new Account();</code> 缺少必填字段 (Name)。<br><code>Database.insert(a, false)</code> 的 <code>false</code> 参数表示 <strong>allOrNone = false</strong> (允许部分失败，且不抛出异常)。<br>因此：<br>1. 记录创建失败 (必填校验)。<br>2. 系统<strong>不抛出异常</strong>。<br>3. 错误信息存储在返回的 <code>Database.SaveResult</code> 中。<br>结果：<strong>Record not created, no error reported (B)</strong>。"
    },
    {
        "id": 264,
        "title": "What should a developer do to check the code coverage of a class after running all tests?",
        "code": "",
        "options": {
            "A": "Select and run the class on the Apex Test Execution page in the Developer Console.",
            "B": "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab.",
            "C": "View the Code Coverage column in the list view on the Apex Classes page.",
            "D": "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>查看 Apex 代码覆盖率的最直接位置是 <strong>Developer Console</strong>。<br>在 <strong>Tests</strong> 选项卡下的 <strong>Overall Code Coverage</strong> 面板中，可以看到每个类的具体覆盖率百分比。<br>❌ C/D: Setup 页面列表中不直接显示覆盖率。"
    },
    {
        "id": 265,
        "title": "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? (Choose three.)",
        "code": "",
        "options": {
            "A": "Process Builder",
            "B": "Roll-up summaries",
            "C": "Triggers",
            "D": "Relationships",
            "E": "Custom objects and fields"
        },
        "correct": "BDE",
        "explanation": "<strong>✅ Correct Answer: B, D & E</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>Database Layer (数据库层)</strong> 和 <strong>Declarative (声明式)</strong>。<br>✅ <strong>E (Objects & Fields)</strong>: 相当于数据库表和列。<br>✅ <strong>D (Relationships)</strong>: 相当于外键关联。<br>✅ <strong>B (Roll-up summaries)</strong>: 数据库层面的聚合字段。<br>❌ A: Process Builder 属于<strong>业务逻辑层 (Logic Layer)</strong>。<br>❌ C: Trigger 属于<strong>代码 (Programmatic)</strong>，非声明式。"
    },
    {
        "id": 266,
        "title": "What are two ways that a controller and extension can be specified for a custom object named \"Notice\" on a Visualforce page? (Choose two.)",
        "code": "",
        "options": {
            "A": "apex:page standardController=\"Notice__c\" extensions=\"myControllerExtension\"",
            "B": "apex:page=Notice extends=\"myControllerExtension\"",
            "C": "apex:page controller=\"Notice__c\" extensions=\"myControllerExtension\"",
            "D": "apex:page controllers=\"Notice__c, myControllerExtension\""
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 页面定义的合法组合：<br>✅ <strong>A</strong>: <code>standardController</code> (对象) + <code>extensions</code> (类)。这是最常见用法。<br>✅ <strong>C</strong>: <code>controller</code> (类) + <code>extensions</code> (类)。虽然通常 <code>controller</code> 放 Apex 类名，但语法上允许通过 controller 指定主控制器，extensions 指定扩展控制器。<br>❌ B/D: 语法错误。"
    },
    {
        "id": 267,
        "title": "Given the following trigger implementation: final ID BUSINESS_RECORDTYPEID = '012500000009Qa'; ... The developer receives deployment errors every time a deployment is attempted from a sandbox to Production. What should the developer do to ensure a successful deployment?",
        "code": "",
        "options": {
            "A": "Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment.",
            "B": "Ensure BUSINESS_RECORDTYPEID is pushed as part of the deployment components.",
            "C": "Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls.",
            "D": "Ensure the deployment is validated by a System Admin user on Production."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>Hardcoding IDs (硬编码 ID)</strong> 是导致部署失败的常见原因。<br>Record Type ID 在 Sandbox 和 Production 中通常是不一样的。<br>解决方法：<strong>不要硬编码 ID</strong>，而是使用 <strong>Schema Describe</strong> 或 SOQL 动态获取 Record Type ID。<br>例如：<code>Schema.SObjectType.Lead.getRecordTypeInfosByName().get('Business').getRecordTypeId();</code>"
    },
    {
        "id": 268,
        "title": "Which statement describes the execution order when triggers are associated to the same object and event?",
        "code": "",
        "options": {
            "A": "Triggers are executed in the order they are modified.",
            "B": "Triggers are executed alphabetically by trigger name.",
            "C": "Trigger execution order cannot be guaranteed.",
            "D": "Triggers are executed in the order they are created."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 官方文档明确指出：<br>同一个对象、同一个事件上的多个 Trigger，其<strong>执行顺序是不确定的 (Not Guaranteed)</strong>。<br>因此最佳实践是：<strong>One Trigger Per Object</strong>，在 Handler 类中控制逻辑顺序。"
    },
    {
        "id": 269,
        "title": "A developer wants to mark each Account in a List as either Active or Inactive, based on the value in the LastModifiedDate field of each Account being greater than 90 days in the past. Which Apex technique should the developer use?",
        "code": "",
        "options": {
            "A": "A for loop, with a switch statement inside",
            "B": "A switch statement, with a for loop inside",
            "C": "An if-else statement, with a for loop inside",
            "D": "A for loop, with an if-else statement inside"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>处理列表逻辑的标准模式：<br>1. <strong>For Loop</strong>: 遍历列表中的每个 Account。<br>2. <strong>If-Else</strong>: 在循环内部判断条件 (LastModifiedDate < 90 days ago)。<br>✅ <strong>D</strong>: 符合逻辑。<br>❌ A: Switch 适合多分支值匹配，这里是 Boolean 逻辑，If-Else 更合适。<br>❌ B/C: 结构颠倒。"
    },
    {
        "id": 270,
        "title": "A developer has a requirement to write Apex code to update a large number of account records on a nightly basis. The system administrator needs to be able to schedule the class to run after business hours on an as-needed basis. Which class definition should be used to successfully implement this requirement?",
        "code": "",
        "options": {
            "A": "global inherited sharing class ProcessAccountProcessor implements Database.Batchable, Schedulable",
            "B": "global inherited sharing class ProcessAccountProcessor implements Schedulable",
            "C": "global inherited sharing class ProcessAccountProcessor implements Database.Batchable",
            "D": "global inherited sharing class ProcessAccountProcessor implements Queueable"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求拆解：<br>1. <strong>Large number of records (大量数据)</strong> -> 需要 <strong>Batchable</strong>。<br>2. <strong>Schedule ... nightly (定时调度)</strong> -> 需要 <strong>Schedulable</strong>。<br>✅ <strong>A</strong>: 同时实现 <code>Database.Batchable</code> 和 <code>Schedulable</code> 接口。<br>通常在 Schedulable 的 execute 方法中调用 <code>Database.executeBatch(new ProcessAccountProcessor());</code>。"
    },
    {
        "id": 271,
        "title": "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. What should a developer implement to support these requirements?",
        "code": "",
        "options": {
            "A": "Master-detail field from Opportunity to Engineering_Support__c",
            "B": "Lookup field from Engineering_Support__c to Opportunity",
            "C": "Lookup field from Opportunity to Engineering_Support__c",
            "D": "Master-detail field from Engineering_Support__c to Opportunity"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求拆解：<br>1. <strong>一对多关系</strong>: 1 个 Opportunity -> 多个 Support Record。关系字段应建在子对象 (Engineering_Support__c) 上。<br>2. <strong>Aggregate Info (汇总信息)</strong>: 需要 Roll-Up Summary Field。<br>3. <strong>结论</strong>: 只有 <strong>Master-Detail</strong> 关系支持 Roll-Up。<br>因此：在 <strong>Engineering_Support__c</strong> 上建立指向 <strong>Opportunity</strong> 的 Master-Detail 字段。<br>❌ A/C: 关系方向反了。<br>❌ B: Lookup 不支持汇总。"
    },
    {
        "id": 272,
        "title": "AW Computing tracks order information in custom objects called Order__c and Order_Line__c. Currently, all shipping information is stored in the Order__c object. The company wants to expand its order application to support split shipments so that any number of Order_Line__c records on a single Order__c can be shipped to different locations. What should a developer add to fulfill this requirement?",
        "code": "",
        "options": {
            "A": "Order_Shipment_Group__c object and master-detail field on Order__c",
            "B": "Order_Shipment_Group__c object and master-detail fields to Order__c and Order_Line__c",
            "C": "Order_Shipment_Group__c object and master-detail field on Order_Line__c",
            "D": "Order_Shipment_Group__c object and master-detail field on Order_Shipment_Group__c"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>这是一个典型的数据建模题。<br>目标：支持<strong>拆分发货 (Split Shipments)</strong>。<br>解决方案：引入中间对象 <strong>Shipment Group</strong>。<br>1. <strong>Shipment Group</strong> 属于 <strong>Order</strong> (父子关系)。<br>2. <strong>Order Line</strong> 属于 <strong>Shipment Group</strong> (父子关系)。<br>这样每个 Shipment Group 可以有自己的地址，包含多个 Line Item。<br>✅ <strong>B</strong>: 正确建立了层级结构 (Order -> Group -> Line)。"
    },
    {
        "id": 273,
        "title": "Universal Containers wants Opportunities to no longer be editable when reaching the Closed/Won stage. Which two strategies can a developer use to accomplish this? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use an after-save flow.",
            "B": "Use a validation rule.",
            "C": "Use the Process Automation Settings.",
            "D": "Use a trigger."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>防止记录编辑的方法：<br>✅ <strong>B (Validation Rule)</strong>: <code>AND(ISPICKVAL(StageName, 'Closed Won'), NOT($Permission.Override))</code>。最简单。<br>✅ <strong>D (Trigger)</strong>: 在 <code>before update</code> 中检查状态并调用 <code>addError()</code>。<br>❌ A: After-save flow 无法阻止保存 (因为记录已提交)。<br>❌ C: 无此设置。"
    },
    {
        "id": 274,
        "title": "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requirement in the most efficient manner?",
        "code": "",
        "options": {
            "A": "An error condition formula on a validation rule on Opportunity",
            "B": "An Apex trigger on the Opportunity object",
            "C": "A record trigger flow on the Opportunity object",
            "D": "An approval process on the Opportunity object"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Prevent changes (阻止更改)</strong> + <strong>Most Efficient (最高效)</strong>。<br>✅ <strong>Validation Rule (A)</strong>: 是阻止无效数据保存的最高效、零代码方案。<br>公式示例：<code>AND(ISPICKVAL(StageName, 'Closed Lost'), ISBLANK(Lost_Reason__c), $Profile.Name <> 'Sales Manager')</code>。<br>❌ B/C: 均属于过度设计 (Over-engineering)。"
    },
    {
        "id": 275,
        "title": "A developer is migrating a Visualforce page into a Lightning Web Component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service (LDS) to access record data. Which security consideration should the developer be aware of?",
        "code": "",
        "options": {
            "A": "The with sharing keyword must be used to enforce sharing rules",
            "B": "Lightning Data Service handles sharing rules and field-level security",
            "C": "The isAccessible() method must be used for field-level access checks",
            "D": "Lightning Data Service ignores field-level security"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>Lightning Data Service (LDS)</strong> 的一大优势就是<strong>安全性</strong>。<br>✅ <strong>B</strong>: LDS 自动遵循并强制执行<strong>共享规则 (Sharing Rules)</strong> 和 <strong>字段级安全性 (FLS)</strong>。<br>开发者无需像在 Apex 中那样手动编写权限检查代码。<br>❌ A/C: 这些是 Apex 的要求。<br>❌ D: 错误，LDS 会强制执行 FLS。"
    },
    {
        "id": 276,
        "title": "Universal Containers uses Service Cloud with a custom field Stage__c on the Case object. Management wants to send a follow-up email reminder 6 hours after the Stage__c field is set to \"Waiting on Customer\". The Salesforce Administrator wants to ensure the solution is bulk safe. Which automation tool should a developer recommend to meet these business requirements?",
        "code": "",
        "options": {
            "A": "Record-Triggered Flow",
            "B": "Entitlement Process",
            "C": "Einstein Next Best Action",
            "D": "Scheduled Flow"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：字段变更后<strong>延时执行 (6小时后)</strong> + <strong>Bulk Safe</strong>。<br>✅ <strong>Record-Triggered Flow (A)</strong>: 支持 <strong>Scheduled Paths (计划路径)</strong>，可以配置为\"在触发后 6 小时执行\"。Flow 也是平台推荐的自动化工具，原生支持批量化。<br>❌ D: Scheduled Flow 是定时全量扫描，逻辑复杂且效率低。<br>❌ B: Entitlement 用于 SLA。<br>❌ C: NBA 用于推荐下一步操作。"
    },
    {
        "id": 277,
        "title": "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
        "code": "",
        "options": {
            "A": "Use the Metadata API to create real-time roll-up summaries.",
            "B": "Use the Streaming API to create real-time roll-up summaries.",
            "C": "Write a trigger on the Opportunity object and use tree sorting to sum the amount for all related child objects under the Opportunity.",
            "D": "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>非主从关系 (Lookup) 不支持标准 Roll-up Summary。<br>必须使用代码实现：<br>✅ <strong>D (Trigger on Child)</strong>: 当子记录 (Child) 发生增删改时，Trigger 触发，通过 SOQL 聚合查询 (SUM) 重新计算父记录的总额并更新。<br>❌ C: Trigger 必须写在子对象上 (因为是子对象的变动触发了重算)。"
    },
    {
        "id": 278,
        "title": "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?",
        "code": "",
        "options": {
            "A": "SFDX CLI",
            "B": "Developer Console",
            "C": "Change Sets",
            "D": "Ant Migration Tool"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>题目要求：<strong>Script (脚本化)</strong> 自动部署。<br>✅ <strong>A (SFDX CLI)</strong>: 现代化的命令行工具，支持 CI/CD。<br>✅ <strong>D (Ant Migration Tool)</strong>: 传统的基于 Java/Ant 的命令行部署工具。<br>❌ B/C: 均为手动图形界面操作，不支持脚本自动化。"
    },
    {
        "id": 279,
        "title": "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience. What should the developer use to override the Contact’s Edit button and provide this functionality?",
        "code": "",
        "options": {
            "A": "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience",
            "B": "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
            "C": "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
            "D": "A Lightning component in Salesforce Classic and a Lightning component in Lightning Experience"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>按钮覆盖 (Button Override) 的最佳实践：<br>✅ <strong>Salesforce Classic</strong>: 仅支持 <strong>Visualforce</strong>。<br>✅ <strong>Lightning Experience</strong>: 优先使用 <strong>Lightning Component (Aura/LWC)</strong>。<br>Salesforce 允许为不同的体验配置不同的覆盖选项。<br>❌ D: Classic 不支持直接使用 Lightning 组件覆盖按钮。"
    },
    {
        "id": 280,
        "title": "A developer created a child Lightning web component nested inside a parent Lightning web component. The parent component needs to pass a string value to the child component. In which two ways can this be accomplished? (Choose two.)",
        "code": "",
        "options": {
            "A": "The parent component can use a custom event to pass the data to the child component",
            "B": "The parent component can invoke a method in the child component",
            "C": "The parent component can use a public property to pass the data to the child component",
            "D": "The parent component can use the Apex controller class to send data to the child component"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>LWC <strong>父传子 (Parent to Child)</strong> 通信方式：<br>✅ <strong>C (Public Property)</strong>: 子组件使用 <code>@api property</code>，父组件在 HTML 中通过属性赋值 (<code>&lt;c-child property=\"value\"&gt;</code>)。这是最常用方式。<br>✅ <strong>B (Public Method)</strong>: 子组件使用 <code>@api method()</code>，父组件在 JS 中通过 <code>this.template.querySelector().method()</code> 调用。<br>❌ A: Custom Event 用于<strong>子传父</strong>。"
    },
    {
        "id": 281,
        "title": "Cloud Kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls. At one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen. What should a developer use to satisfy this requirement?",
        "code": "",
        "options": {
            "A": "An Apex REST class",
            "B": "An Apex controller",
            "C": "An outbound message",
            "D": "An invocable method"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Flow 本身不能直接进行 REST Callout。<br>要从 Flow 中调用外部系统并获取<strong>实时数据 (Real-time)</strong>，需要使用 Apex。<br>通过 <strong>Invocable Method</strong> (<code>@InvocableMethod</code>)，Apex 类可以被 Flow 直接调用，执行 HTTP 请求，并将结果返回给 Flow 进行显示。<br>❌ A: Apex REST 是被外部调用的。<br>❌ C: Outbound Message 是异步的，无法实时返回数据给 UI。"
    },
    {
        "id": 282,
        "title": "A developer is tasked to perform a security review of the ContactSearchApex class that exists in the system. Within the class, the developer identifies the following method as a security threat: List<Contact> performSearch(String lastName) { return Database.query( 'SELECT Id, Name FROM Contact WHERE LastName LIKE \'%\' + lastName + \'%\'' ); } What are two ways the developer can update the method to prevent a SOQL injection attack? (Choose Two)",
        "code": "",
        "options": {
            "A": "Use the @ReadOnly annotation and the with sharing keyword on the class.",
            "B": "Use the escapeSingleQuotes method to sanitize the parameter before its use.",
            "C": "Use a regular expression on the parameter to remove special characters.",
            "D": "Use variable binding and replace the dynamic query with a static SOQL."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>防止 <strong>SOQL 注入 (Injection)</strong> 的两种主要方法：<br>1. <strong>变量绑定 (Binding)</strong>: 使用 <code>:variableName</code>，这是最安全、最推荐的方式 (D)。<br>2. <strong>转义 (Escaping)</strong>: 使用 <code>String.escapeSingleQuotes()</code> 清理用户输入 (B)。<br>❌ A: <code>with sharing</code> 控制记录可见性，不防注入。<br>❌ C: Regex 不是标准防注入手段。"
    },
    {
        "id": 283,
        "title": "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
        "code": "",
        "options": {
            "A": "Exception",
            "B": "Messaging",
            "C": "OrgLimits",
            "D": "Limits"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br><strong>Limits</strong> 类提供了查询当前事务资源使用情况的方法。<br>例如：<code>Limits.getDMLStatements()</code> 获取已用次数，<code>Limits.getLimitDMLStatements()</code> 获取总限额。<br>❌ C: OrgLimits 用于查询组织级别的限制 (如 API 总量)，而非单次事务限制。"
    },
    {
        "id": 284,
        "title": "A developer has the following requirements: Calculate the total amount on an Order. Calculate the line amount for each Line Item based on quantity selected and price. Move Line Items to a different Order if a Line Item is not in stock. Which relationship implementation supports these requirements on its own?",
        "code": "",
        "options": {
            "A": "Order has a re-parentable master-detail field to Line Item.",
            "B": "Order has a re-parentable lookup field to Line Item.",
            "C": "Line Item has a re-parentable lookup field to Order.",
            "D": "Line Item has a re-parentable master-detail field to Order."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求拆解：<br>1. <strong>Calculate Total Amount</strong>: 需要 Roll-Up Summary -> 必须是 <strong>Master-Detail</strong>。<br>2. <strong>Move Line Items</strong>: 需要更改父记录 -> 必须启用 <strong>Reparentable (允许重新归属)</strong>。<br>3. <strong>关系方向</strong>: Line Item (子) 指向 Order (父)。<br>因此：Line Item 拥有一个 <strong>Reparentable Master-Detail</strong> 字段指向 Order。<br>❌ B/C: Lookup 不支持 Roll-Up。<br>❌ A: 关系方向反了。"
    },
    {
        "id": 285,
        "title": "A developer completed modifications to a customized feature that is comprised of two elements: Apex trigger, Trigger handler Apex class. What are two factors that the developer must take into account to properly deploy the modification to the production environment? (Choose two.)",
        "code": "",
        "options": {
            "A": "Apex classes must have at least 75% code coverage org-wide.",
            "B": "At least one line of code must be executed for the Apex trigger.",
            "C": "All methods in the test classes must use @isTest.",
            "D": "Test methods must be declared with the testMethod keyword."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>部署到生产环境的硬性要求：<br>✅ <strong>A</strong>: 整个组织 (Org-wide) 的代码覆盖率必须 >= 75%。<br>✅ <strong>B</strong>: 每个 Trigger 必须有至少 1% 的覆盖率 (即至少执行一行)。<br>❌ C/D: 测试方法声明语法可以是 <code>@isTest</code> 或 <code>testMethod</code>，没有强制二选一，且这属于语法细节而非部署限制因素。"
    },
    {
        "id": 286,
        "title": "A lead developer creates an Apex interface called Laptop. Consider the following code snippet. How can a developer use the Laptop interface within the Silverlaptop class?",
        "code": "",
        "options": {
            "A": "public class Silverlaptop implements Laptop",
            "B": "@Extends(class=\"Laptop\") public class Silverlaptop",
            "C": "public class Silverlaptop extends Laptop",
            "D": "@Interface(class=\"Laptop\") public class Silverlaptop"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>Apex 类<strong>实现接口 (Interface)</strong> 使用 <code>implements</code> 关键字。<br>✅ <strong>A</strong>: <code>implements Laptop</code>。<br>❌ C: <code>extends</code> 用于继承类。<br>❌ B/D: 语法错误，无此注解。"
    },
    {
        "id": 287,
        "title": "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. What should a developer do to allow their code to move some existing OrderItem records to a new Order record?",
        "code": "",
        "options": {
            "A": "Select the Allow reparenting option on the master-detail relationship",
            "B": "Change the master-detail relationship to an external lookup relationship",
            "C": "Add without sharing to the Apex class declaration",
            "D": "Create a junction object between OrderItem and Order"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>默认情况下，<strong>Master-Detail</strong> 关系中的子记录一旦创建，其父记录不可更改。<br>要允许移动子记录 (更换父记录)，必须在关系字段定义中勾选 <strong>Allow Reparenting (允许重新归属)</strong> 选项。<br>❌ B/C/D: 均无法直接解决 Reparenting 限制。"
    },
    {
        "id": 288,
        "title": "Management asked for opportunities to be automatically created for accounts with annual revenue greater than $1,000,000. A developer created the following trigger on the Account object to satisfy this requirement. ... Users are able to update the account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrator tries to upload a list of 179 accounts using Data Loader, it fails with System.Exception errors. Which two actions should the developer take to fix the code segment shown above? (Choose two.)",
        "code": "for (Account a : Trigger.new) {\n  if (a.AnnualRevenue > 1000000) {\n    List<Opportunity> oppList = [SELECT Id FROM Opportunity WHERE AccountId = :a.Id];\n    if (oppList.size() == 0) {\n      Opportunity oppty = new Opportunity(...);\n      insert oppty;\n    }\n  }\n}",
        "options": {
            "A": "Check if all the required fields for Opportunity are being added on creation.",
            "B": "Use Database.query to query the opportunities.",
            "C": "Move the DML that saves opportunities outside the for loop.",
            "D": "Query for existing opportunities outside the for loop."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>代码违反了 Trigger 最佳实践 (SOQL/DML in Loop)：<br>✅ <strong>D</strong>: 将 SOQL 查询移出循环 (批量查询)。<br>✅ <strong>C</strong>: 将 DML (insert) 移出循环 (批量插入)。<br>如果不改，当批量处理 >100 条记录时，会触发 Governor Limits (SOQL 101 或 DML 150)。<br>❌ A: UI 创建成功说明字段没问题。<br>❌ B: Database.query 仍是 SOQL，不解决循环问题。"
    },
    {
        "id": 289,
        "title": "Which scenario is valid for execution by unit tests?",
        "code": "",
        "options": {
            "A": "Load data from a remote site with a callout",
            "B": "Execute anonymous Apex as a different user",
            "C": "Set the CreatedDate of a record using a system method",
            "D": "Generate a Visualforce PDF with getContentAsPDF()"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>测试环境限制与能力：<br>✅ <strong>C</strong>: 使用 <code>Test.setCreatedDate()</code> 可以模拟记录创建时间，这是允许的。<br>❌ A: 测试中禁止真实 Callout (必须 Mock)。<br>❌ B: 禁止执行匿名 Apex。<br>❌ D: <code>getContentAsPDF()</code> 在测试中会被视为 Callout 而报错，通常建议 Mock 或跳过。"
    },
    {
        "id": 290,
        "title": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in another custom object called PostalCodeToTimezone__c. What is optimal way to implement this frature?",
        "code": "",
        "options": {
            "A": "Build an account assignment rule.",
            "B": "Build a flow with Flow Builder.",
            "C": "Create an account approval process.",
            "D": "Create a formula field."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：字段变更触发 -> 跨对象查询 (Lookup Custom Object) -> 更新字段。<br>✅ <strong>Flow Builder (Record-Triggered Flow)</strong>: 支持触发、Get Records (查询映射表) 和 Update Records，完全满足且为无代码方案。<br>❌ D: Formula 无法跨对象查询非关联记录 (Query)。<br>❌ A/C: 用途不符。"
    },
    {
        "id": 291,
        "title": "A company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the records together. Which two statements are valid considerations when using merge? (Choose two.)",
        "code": "",
        "options": {
            "A": "The merge method allows up to three records, including the master and two additional records with the same sObject type, to be merged into the master record.",
            "B": "Merge is supported with accounts, contacts, cases, and leads.",
            "C": "External ID fields can be used with the merge method.",
            "D": "The field values on the master record are overwritten by the records being merged."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>Apex <code>Database.merge</code> 方法规则：<br>✅ <strong>A</strong>: 每次最多合并 3 条记录 (1 Master + 2 Duplicates)。<br>✅ <strong>B</strong>: 仅支持 <strong>Lead, Contact, Account, Case</strong> 四种标准对象。<br>❌ C: 不支持 External ID。<br>❌ D: Master 记录的值默认保留 (不会自动被覆盖)。"
    },
    {
        "id": 292,
        "title": "What can be used to override the Account's standard Edit button for Lightning Experience?",
        "code": "",
        "options": {
            "A": "Lightning action",
            "B": "Lightning flow",
            "C": "Lightning page",
            "D": "Lightning component"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Lightning Experience 中覆盖标准按钮 (Standard Button Override)：<br>只能使用 <strong>Lightning Component</strong> (Aura 或 LWC)。<br>Classic 中则使用 Visualforce。<br>❌ A/B/C: 不能直接绑定到 Standard Button Override 设置中。"
    },
    {
        "id": 293,
        "title": "What are two use cases for executing Anonymous Apex code? (Choose two.)",
        "code": "",
        "options": {
            "A": "To run a batch Apex class to update all Contacts",
            "B": "To schedule an Apex class to run periodically",
            "C": "To delete 15,000 inactive Accounts in a single transaction after a deployment",
            "D": "To add unit test code coverage to an org"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>Anonymous Apex (匿名执行) 典型场景：<br>✅ <strong>A</strong>: 手动触发批处理 (<code>Database.executeBatch</code>)。<br>✅ <strong>B</strong>: 安排定时任务 (<code>System.schedule</code>)。<br>❌ C: 匿名块也受限于 Governor Limits (单次事务 DML 上限 10,000)，无法一次性删 15,000。<br>❌ D: 匿名执行不计入单元测试覆盖率。"
    },
    {
        "id": 294,
        "title": "A Salesforce Administrator used Flow Builder to create a flow named \"account onboarding\". The flow must be used inside an Aura component. Which tag should a developer use to display the flow in the component?",
        "code": "",
        "options": {
            "A": "lightning-flow",
            "B": "aura-flow",
            "C": "lightning:flow",
            "D": "aura:flow"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>组件嵌入 Flow 的语法：<br>✅ <strong>Aura Component</strong>: 使用 <code>&lt;lightning:flow /&gt;</code>。<br>✅ <strong>LWC</strong>: 使用 <code>&lt;lightning-flow&gt;&lt;/lightning-flow&gt;</code>。<br>题目问的是 <strong>Aura Component</strong>，所以选 C。"
    },
    {
        "id": 295,
        "title": "Which two sfdx commands can be used to add testing data to a Developer sandbox? (Choose two.)",
        "code": "",
        "options": {
            "A": "force:data:async:upsert",
            "B": "force:data:tree:import",
            "C": "force:data:bulk:upsert",
            "D": "force:data:object:create"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>Salesforce CLI (SFDX) 数据导入命令：<br>✅ <strong>B (tree:import)</strong>: 导入具有层级关系 (如 Account-Contact) 的少量测试数据 (JSON 格式)。<br>✅ <strong>C (bulk:upsert)</strong>: 使用 Bulk API 高效导入大量数据 (CSV 格式)。<br>❌ A/D: 命令不存在。"
    },
    {
        "id": 296,
        "title": "A custom object Trainer__c has a lookup field to another custom object Gym__c. Which SOQL query will get the record for the Viridian City Gym and all its trainers?",
        "code": "",
        "options": {
            "A": "SELECT Id FROM Trainer__c WHERE Gym__r.Name = 'Viridian City Gym'",
            "B": "SELECT Id, (SELECT Id FROM Trainers__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            "C": "SELECT Id, (SELECT Id FROM Trainer__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            "D": "SELECT Id, (SELECT Id FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>SOQL <strong>父查子 (Parent-to-Child)</strong> 语法：<br>必须在子查询中使用 <strong>Child Relationship Name</strong>。<br>对于自定义对象的 Lookup，系统默认生成的子关系名通常是复数形式加 <code>__r</code>。<br>即：<code>Trainers__r</code>。<br>❌ B/C: 使用了对象名 (<code>__c</code>) 而非关系名。<br>❌ A: 这是子查父，无法获取 Gym 下的所有 Trainer 列表。"
    },
    {
        "id": 297,
        "title": "Which two settings must be defined in order to update a record of a junction object? (Choose two.)",
        "code": "",
        "options": {
            "A": "Read/Write access on the junction object",
            "B": "Read access on the primary relationship",
            "C": "Read/Write access on the primary relationship",
            "D": "Read/Write access on the secondary relationship"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>要更新 Junction Object (连接对象) 记录：<br>1. 必须有对 Junction Object 本身的 <strong>Read/Write</strong> 权限 (A)。<br>2. 必须有对 Master-Detail 主记录 (Primary & Secondary Masters) 的 <strong>Read</strong> 权限 (B)。<br>不需要对父记录有 Write 权限 (除非你要修改父记录本身，或者该关系启用了\"Reparenting\"去修改关系字段)。"
    },
    {
        "id": 298,
        "title": "A developer is integrating with a legacy on-premise SQL database. What should the developer use to ensure the data being integrated is matched to the right records in Salesforce?",
        "code": "",
        "options": {
            "A": "Formula field",
            "B": "Lookup field",
            "C": "External ID field",
            "D": "External Object"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>数据集成与匹配的核心是 <strong>External ID</strong>。<br>在 Salesforce 中创建一个字段 (通常是 Text 或 Number)，将其属性设为 \"External ID\"，并存入 Legacy System 的主键 (PK)。<br>这样在集成时就可以通过 Upsert 操作精确匹配记录，无需知道 Salesforce ID。<br>❌ D: External Object 用于虚拟化显示外部数据，而非导入匹配。"
    },
    {
        "id": 299,
        "title": "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
        "code": "",
        "options": {
            "A": "Developer Console",
            "B": "Salesforce CLI",
            "C": "VS Code",
            "D": "Execute Anonymous"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>CI/CD (持续集成) 流程需要自动化脚本支持。<br><strong>Salesforce CLI (sfdx)</strong> 是唯一支持命令行脚本化操作的官方工具。<br>它可以执行部署、运行测试、检索元数据等操作，易于集成到 Jenkins/GitLab CI 等流水线中。<br>❌ A/C/D: 均为交互式开发工具，不支持脚本化自动化。"
    },
    {
        "id": 300,
        "title": "Which three operations affect the number of times a trigger can fire? (Choose three.)",
        "code": "",
        "options": {
            "A": "Lightning Flows",
            "B": "Roll-Up Summary fields",
            "C": "Criteria-based Sharing calculations",
            "D": "Workflow Rules",
            "E": "Email messages"
        },
        "correct": "ABD",
        "explanation": "<strong>✅ Correct Answer: A, B & D</strong><br><br><strong>🧠 解析：</strong><br>会导致 Trigger 再次触发 (Recursion/Re-entry) 的自动化操作：<br>✅ <strong>D (Workflow Rules)</strong>: 字段更新 (Field Updates) 会触发一次 Update 操作。<br>✅ <strong>A (Flows)</strong>: 记录更新 Flow 会触发 Trigger。<br>✅ <strong>B (Roll-Up Summary)</strong>: 子记录变更导致父记录汇总值更新，会触发父对象 Trigger。<br>❌ C/E: 不会引起记录 DML 更新。"
    },
    {
        "id": 301,
        "title": "What is the result of the following code snippet? ",
        "code": "public void doWork(Account acct) { for (Integer i = 0; i <= 200; i++) { insert acct; } }",
        "options": {
            "A": "200 Accounts are inserted",
            "B": "1 Account is inserted",
            "C": "201 Accounts are inserted",
            "D": "0 Accounts are inserted"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>代码执行分析：<br>1. 第一次循环：<code>insert acct;</code> 成功，Salesforce 为其分配 ID。<br>2. 第二次循环：尝试再次 <code>insert acct;</code>。因为 <code>acct</code> 已经有了 ID，系统会认为这是重复插入已存在的记录，抛出 <code>DmlException: INVALID_FIELD_FOR_INSERT_UPDATE</code> (无法插入带 ID 的记录)。<br>3. 由于代码没有 <code>try-catch</code>，异常未被捕获，导致<strong>整个事务回滚 (Rollback)</strong>。<br>结果：<strong>0 Accounts inserted</strong>。"
    },
    {
        "id": 302,
        "title": "What are three capabilities of the <ltng:require> tag when loading JavaScript sources in Aura components? (Choose three.)",
        "code": "",
        "options": {
            "A": "One-time loading for duplicate scripts",
            "B": "Specifying loading order",
            "C": "Loading externally hosted scripts",
            "D": "Loading files from Documents",
            "E": "Loading scripts in parallel"
        },
        "correct": "ABC",
        "explanation": "<strong>✅ Correct Answer: A, B & C</strong><br><br><strong>🧠 解析：</strong><br><code>&lt;ltng:require&gt;</code> 标签用于在 Aura 中加载外部 JS/CSS。<br>✅ <strong>A</strong>: 自动去重 (One-time loading)。<br>✅ <strong>B</strong>: 按顺序加载 (<code>scripts=\"a.js,b.js\"</code> 先加载 a 后加载 b)。<br>✅ <strong>C</strong>: 支持加载外部托管脚本 (需配置 CSP)。<br>❌ D: 通常从 Static Resource 加载，不支持 Documents。<br>❌ E: 是串行加载以保证依赖关系。"
    },
    {
        "id": 303,
        "title": "Which process automation can be used to calculate the shipping cost for an order when the Order is placed and apply a percentage of the shipping cost to some of the related Order Products?",
        "code": "",
        "options": {
            "A": "Lightning Component",
            "B": "Flow Builder",
            "C": "Entitlement Rules",
            "D": "Approval Process"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Trigger on Order Placed (订单创建时触发)</strong> + <strong>Complex Calculation (复杂计算)</strong> + <strong>Update Related Records (更新子记录)</strong>。<br>✅ <strong>Flow Builder (Record-Triggered Flow - After Save)</strong>: 完美支持。可以在订单保存后，遍历子记录 (Order Products) 并更新它们。<br>❌ A: UI 组件不负责后台自动化。<br>❌ C/D: 不具备计算和批量更新子记录的能力。"
    },
    {
        "id": 304,
        "title": "Considering the following code snippet: When the code executes, a DML exception is thrown. How should the developer modify the code to ensure exceptions are handled gracefully?",
        "code": "public static void insertAccounts(List<Account> theseAccounts){\n  for (Account thisAccount : theseAccounts){\n    if (thisAccount.website == null){\n        thisAccount.website = 'https://www.demo.com';\n    }\n  }\n  update theseAccounts;\n}",
        "options": {
            "A": "Implement Change Data Capture",
            "B": "Implement the upsert DML statement",
            "C": "Remove null items from the list of Accounts",
            "D": "Implement a try/catch block for the DML"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>处理 Apex 运行时异常 (如 DML Exception) 的标准方式是使用 <strong>try-catch</strong> 块。<br>这样可以捕获错误，记录日志或向用户显示友好的错误信息，而不是让整个程序崩溃。<br>❌ B: Upsert 不能防止 DML 错误 (如 Validation Rule 失败)。"
    },
    {
        "id": 305,
        "title": "A developer is debugging the following code to determine why Accounts are not being created. How should the code be altered to help debug the issue?",
        "code": "List<Account> accts = getAccounts();\nDatabase.insert(accts, false);",
        "options": {
            "A": "Change the DML statement to insert method.",
            "B": "Collect the insert method return value in a SaveResult record.",
            "C": "Set the second insert method parameter to TRUE.",
            "D": "Add a try/catch around the insert method."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><code>Database.insert(accts, false)</code> 不会抛出异常，因此无法通过 try-catch 捕获错误。<br>错误信息存储在返回的 <code>Database.SaveResult[]</code> 数组中。<br>为了调试，必须<strong>接收返回值</strong>并检查 <code>getErrors()</code>。<br>❌ D: 因为不抛异常，try-catch 无效。"
    },
    {
        "id": 306,
        "title": "Universal Hiring is using Salesforce to capture job applications. ... Recruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the Preferred_Locations__c field, within the Job_Application__c record. Recruiters would like this value to be kept in sync if changes occur to the Contact's Mailing State or if the Job's Preferred_Locations__c field is updated. What is the recommended tool a developer should use to meet the business requirement?",
        "code": "",
        "options": {
            "A": "Apex Trigger",
            "B": "Process Builder",
            "C": "Record-triggered Flow",
            "D": "Formula Field"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求：跨对象字段同步 (Sync) + 多触发源 (Contact Update & Job Update)。<br>✅ <strong>Record-triggered Flow (C)</strong>: 可以分别在 Contact 和 Job 对象上创建 Flow，当字段变更时，自动更新关联的 <code>Job_Application__c</code> 记录。<br>❌ D: Formula 无法处理多选 Picklist 的包含逻辑 (includes)，也无法在父对象变更时触发子对象更新 (Cross-object workflow)。"
    },
    {
        "id": 307,
        "title": "Given the multi-tenant architecture of the Salesforce platform, what is a best practice a developer should implement and ensure successful execution of the method?",
        "code": "public static List<Lead> obtainAllFields(Set<Id> leadIds) {\n  List<Lead> result = new List<Lead>();\n  for(Id leadId : leadIds) {\n    result.add([SELECT FIELDS(ALL) FROM Lead WHERE Id = :leadId]);\n  }\n  return result;\n}",
        "options": {
            "A": "Avoid performing queries inside for loops.",
            "B": "Avoid executing queries without a limit clause.",
            "C": "Avoid using variables as query filters.",
            "D": "Avoid returning an empty List of records."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>该代码违反了 Apex 最重要的最佳实践：<strong>SOQL inside Loop (循环内查询)</strong>。<br>如果 <code>leadIds</code> 集合大小超过 100，将触发 <code>System.LimitException: Too many SOQL queries: 101</code>。<br>解决方案：移出循环，使用 <code>WHERE Id IN :leadIds</code> 进行批量查询。"
    },
    {
        "id": 308,
        "title": "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component-based development over Visualforce? (Choose two.)",
        "code": "",
        "options": {
            "A": "Self-contained and reusable units of an application",
            "B": "Log capturing via the Debug Logs Setup page",
            "C": "Built-in standard and custom set controllers",
            "D": "Rich component ecosystem"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>LWC (View Layer) 优势：<br>✅ <strong>A</strong>: 真正的组件化 (Component-based)，自包含且可复用。<br>✅ <strong>D</strong>: 丰富的生态系统 (Base Components, OSS)。<br>❌ B: Debug Log 是后端功能。<br>❌ C: StandardSetController 是 VF 特有的。"
    },
    {
        "id": 309,
        "title": "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class. Which code segment shows the correct declaration of the class and methods?",
        "code": "",
        "options": {
            "A": "webservice class WebServiceClass { private Boolean helperMethod() { ... } global static String updateRecords() { ... } }",
            "B": "global class WebServiceClass { private Boolean helperMethod() { ... } webservice static String updateRecords() { ... } }",
            "C": "webservice class WebServiceClass { private Boolean helperMethod() { ... } webservice static String updateRecords() { ... } }",
            "D": "global class WebServiceClass { private Boolean helperMethod() { ... } global String updateRecords() { ... } }"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>SOAP Web Service 类定义规则：<br>1. 类必须是 <strong>global</strong>。<br>2. 暴露的方法必须是 <strong>webservice static</strong>。<br>3. 内部辅助方法可以是 <strong>private</strong>。<br>✅ <strong>B</strong>: 符合所有规则。<br>❌ A/C: <code>webservice class</code> 是非法语法。<br>❌ D: <code>global String</code> 方法不会自动暴露为 SOAP 操作，必须用 <code>webservice</code> 关键字。"
    },
    {
        "id": 310,
        "title": "What are two best practices when it comes to Lightning Web Component events? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use event.detail to communicate data to elements in the same shadow tree.",
            "B": "Use CustomEvent to pass data from a child to a parent component.",
            "C": "Use event.target to communicate data to elements that aren't in the same shadow tree.",
            "D": "Use events configured with bubbles: false and composed: false."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>LWC 事件最佳实践：<br>✅ <strong>B</strong>: 使用 <strong>CustomEvent</strong> 进行子传父通信。<br>✅ <strong>D</strong>: 默认保持事件私有 (<strong>bubbles: false, composed: false</strong>)，仅在必要时才开启冒泡，以保护组件封装性。<br>❌ A/C: 不是关于事件通信架构的最佳实践描述。"
    },
    {
        "id": 311,
        "title": "A developer wrote the following two classes: public with sharing class StatusFetcher { private Boolean active = true; private Boolean isActive(){ return active; } } public with sharing class Calculator { public void doCalculations(){ StatusFetcher sFetcher = new StatusFetcher(); if(sFetcher.isActive()){ // do calculations here } } } The StatusFetcher class successfully compiled and saved. However, the Calculator class has a compile time error. How should the developer fix this code?",
        "code": "",
        "options": {
            "A": "Change the class declaration for the StatusFetcher class to public with inherited sharing.",
            "B": "Make the isActive method in the StatusFetcher class public.",
            "C": "Make the doCalculations method in the Calculator class private.",
            "D": "Change the class declaration for the Calculator class to public with inherited sharing."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Apex 类成员的默认访问权限是 <strong>private</strong> (仅类内部可见)。<br><code>StatusFetcher</code> 中的 <code>isActive()</code> 方法被声明为 private (或未声明，默认为 private)。<br>因此，<code>Calculator</code> 类无法访问该方法，导致编译错误。<br>解决方法：将 <code>isActive()</code> 方法声明为 <strong>public</strong>。<br>❌ A/D: sharing 关键字与方法可见性无关。"
    },
    {
        "id": 312,
        "title": "An org has two custom objects: Plan__c: master-detail to Account; PlanItem__c: master-detail to Plan__c. What should a developer use to create a Visualforce section on the Account page layout that displays all Plan__c records related to the Account and all PlanItem__c records related to those Plan__c records?",
        "code": "",
        "options": {
            "A": "A standard controller with a custom controller",
            "B": "A standard controller with a controller extension",
            "C": "A controller extension with a custom controller",
            "D": "A custom controller by itself"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：在 <strong>Account 页面布局</strong> 上显示自定义数据 (多层级关系)。<br>1. <strong>标准控制器 (Standard Controller)</strong>: 必须用于 Account，以便页面能嵌入标准布局并获取当前 Account 上下文。<br>2. <strong>控制器扩展 (Controller Extension)</strong>: 用于执行复杂的 SOQL 查询 (查询 Plan__c 及其子 PlanItem__c)，弥补标准控制器功能的不足。<br>❌ A: 语法错误，两者不能共存。<br>❌ D: 纯自定义控制器无法嵌入标准布局。"
    },
    {
        "id": 313,
        "title": "A developer has identified a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database. Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
            "B": "Use partial DML statements to ensure only valid data is committed.",
            "C": "Use the System.Limits class to monitor the current CPU governor limit consumption.",
            "D": "Use the Database.Savepoint method to enforce database integrity."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>针对资源密集型和事务性操作的最佳实践：<br>✅ <strong>C (System.Limits)</strong>: 实时监控 <strong>CPU Time</strong> 和 <strong>Heap Size</strong>，防止超出 Governor Limits。<br>✅ <strong>D (Database.Savepoint)</strong>: 使用 <strong>Savepoint 和 Rollback</strong> 确保数据一致性，防止部分失败导致的数据脏读/不一致。<br>❌ A: @ReadOnly 禁止 DML，不符合需求。<br>❌ B: Partial DML 不是主要的限额防控手段。"
    },
    {
        "id": 314,
        "title": "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? (Choose three.)",
        "code": "",
        "options": {
            "A": "Flows",
            "B": "Roll-up summaries",
            "C": "Triggers",
            "D": "Relationships",
            "E": "Custom objects and fields"
        },
        "correct": "BDE",
        "explanation": "<strong>✅ Correct Answer: B, D & E</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>Database Layer (数据库层)</strong> 和 <strong>Declarative (声明式)</strong>。<br>✅ <strong>E (Objects & Fields)</strong>: 表结构。<br>✅ <strong>D (Relationships)</strong>: 外键关联。<br>✅ <strong>B (Roll-up summaries)</strong>: 聚合字段。<br>❌ A: Flow 是逻辑层。<br>❌ C: Trigger 是代码层。"
    },
    {
        "id": 315,
        "title": "Universal Containers hires a developer to build a custom search page to help users find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL? (Choose two.)",
        "code": "",
        "options": {
            "A": "SOSL is faster for text searches.",
            "B": "SOQL is able to return more records.",
            "C": "SOQL is faster for text searches.",
            "D": "SOSL is able to return more records."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>SOQL vs SOSL 对比：<br>✅ <strong>A</strong>: <strong>SOSL</strong> 基于搜索引擎索引，对文本字段 (如 Name, Description) 的全文搜索<strong>速度更快</strong>。<br>✅ <strong>B</strong>: <strong>SOQL</strong> 支持返回更多记录 (最多 50,000 条)，而 SOSL 通常限制较少 (默认 2,000)。<br>❌ C: SOQL 文本搜索 (LIKE) 效率低于 SOSL。<br>❌ D: SOSL 返回记录数限制更严。"
    },
    {
        "id": 316,
        "title": "Universal Containers has a Visualforce page that displays a table of every Container__c being rented by a given Account. Recently this page is failing with a view state limit because some of the customers rent over 10,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
        "code": "",
        "options": {
            "A": "Use lazy loading and a transient List variable",
            "B": "Use JavaScript remoting with SOQL Offset",
            "C": "Implement pagination with a StandardSetController",
            "D": "Implement pagination with an OffsetController"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>View State Limit</strong> (135KB/170KB) 错误通常由加载过多数据引起。<br>解决方案是<strong>分页 (Pagination)</strong>。<br>✅ <strong>C (StandardSetController)</strong>: 内置了强大的分页功能 (next, previous, setPageSize)，是处理大量记录列表的最佳实践。<br>❌ A: transient 仅减少 View State，但不解决加载 10,000 条数据的性能问题。<br>❌ B: Offset 最大 2000，不适合 10,000 条数据。"
    },
    {
        "id": 317,
        "title": "A developer migrated functionality from JavaScript Remoting to a Lightning web component and wants to use the existing getOpportunities() method to provide data. Which modification to the method is necessary?",
        "code": "",
        "options": {
            "A": "The method must return a String of a serialized JSON Array.",
            "B": "The method must be decorated with (cacheable=true).",
            "C": "The method must be decorated with @AuraEnabled.",
            "D": "The method must return a JSON Object."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>要让 LWC (或 Aura) 能够调用 Apex 方法，该方法必须使用 <strong>@AuraEnabled</strong> 注解。<br>❌ A/D: Apex 会自动处理序列化，无需手动返回 JSON 字符串。<br>❌ B: cacheable=true 仅在使用 @wire 时需要，如果是命令式调用 (Imperative Call) 则非必需 (尽管推荐用于读操作)。题目未指定调用方式，但 @AuraEnabled 是绝对必需的。"
    },
    {
        "id": 318,
        "title": "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
        "code": "",
        "options": {
            "A": "Visual Studio Code IDE",
            "B": "AppExchange",
            "C": "Developer Console",
            "D": "Setup Menu"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>性能调试 (Performance Troubleshooting) 的首选工具是 <strong>Developer Console</strong>。<br>它提供：<br>1. <strong>Log Inspector</strong>: 查看执行日志、SOQL 查询次数、DML 次数等。<br>2. <strong>Timeline</strong>: 可视化执行时间线。<br>3. <strong>View State</strong> (VF): 检查页面状态大小。<br>❌ A: VS Code 主要用于开发。"
    },
    {
        "id": 319,
        "title": "Universal Containers has implemented an order management application. Each Order can have one or more Order Line Items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multiplying the Order Line item price with the quantity ordered. What is the best practice to get the sum of all Order Line item totals on the Order record?",
        "code": "",
        "options": {
            "A": "Roll-up summary field",
            "B": "Quick action",
            "C": "Apex trigger",
            "D": "Formula field"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>场景：<strong>Master-Detail</strong> 关系 + <strong>父级汇总 (Sum)</strong>。<br>✅ <strong>A (Roll-up Summary)</strong>: 标准功能，性能最好，零代码。<br>❌ C: Trigger 属于代码实现，非首选。<br>❌ D: Formula 无法跨记录求和。"
    },
    {
        "id": 320,
        "title": "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?",
        "code": "",
        "options": {
            "A": "Use the Flow Properties page.",
            "B": "Use the ApexTestResult class",
            "C": "Use SOQL and the Tooling API",
            "D": "Use the Code Coverage Setup page."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>从 Winter '23 开始，部署 Autolaunched Flow 需要测试覆盖率。<br>查询 Flow 测试覆盖率的标准方法是使用 <strong>Tooling API</strong> 查询 <strong>FlowTestCoverage</strong> 对象。<br>SQL 示例：<code>SELECT FlowVersionId, NumElementsCovered, NumElementsNotCovered FROM FlowTestCoverage</code>。<br>❌ A/D: UI 界面暂不直接提供此信息。"
    },
    {
        "id": 321,
        "title": "A developer created a Lightning web component called StatusComponent to be inserted into the Account record page. Which two things should the developer do to make this component available? (Choose two.)",
        "code": "",
        "options": {
            "A": "Add true to the statusComponent.js-meta.xml file.",
            "B": "Add lightning_RecordPage to the statusComponent.js file.",
            "C": "Add lightning_RecordPage to the statusComponent.js-meta.xml file.",
            "D": "Add Account to the statusComponent.js-meta.xml file."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>要让 LWC 组件在 <strong>Lightning App Builder (记录页面)</strong> 中可见并可配置：<br>1. 必须在 meta.xml 文件中将 <code>isExposed</code> 设置为 <strong>true</strong> (A)。<br>2. 必须在 meta.xml 文件的 <code>targets</code> 中添加 <code>lightning__RecordPage</code> (C)。<br>❌ B: 配置不在 JS 文件中。<br>❌ D: 限制对象不是必须的 (不加则所有对象可用)。"
    },
    {
        "id": 322,
        "title": "A developer created these three Rollup Summary fields in the custom object, Project__c: TotalTimesheets__c, Total_Approved_Timesheets__c, Total_Rejected_Timesheets__c. The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
        "code": "",
        "options": {
            "A": "Apex trigger",
            "B": "Record-triggered flow",
            "C": "Formula field",
            "D": "Field Update actions"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>计算两个现有字段的比率 (Ratio) 是典型的<strong>公式字段 (Formula Field)</strong> 使用场景。<br>公式：<code>Total_Rejected_Timesheets__c / Total_Approved_Timesheets__c</code>。<br>这种方法<strong>零代码、零维护、实时更新</strong>，完全符合 Minimize Maintenance Overhead 的要求。<br>❌ A/B/D: 需要编写逻辑和处理触发条件，维护成本高。"
    },
    {
        "id": 323,
        "title": "Which three resources in an Aura component can contain JavaScript functions? (Choose three.)",
        "code": "",
        "options": {
            "A": "Helper",
            "B": "Design",
            "C": "Renderer",
            "D": "Style",
            "E": "Controller"
        },
        "correct": "ACE",
        "explanation": "<strong>✅ Correct Answer: A, C & E</strong><br><br><strong>🧠 解析：</strong><br>Aura 组件包中包含 JS 代码的文件：<br>✅ <strong>E (Controller.js)</strong>: 处理客户端事件。<br>✅ <strong>A (Helper.js)</strong>: 包含可复用的业务逻辑。<br>✅ <strong>C (Renderer.js)</strong>: 自定义渲染逻辑。<br>❌ B: Design 是 XML 配置。<br>❌ D: Style 是 CSS。"
    },
    {
        "id": 324,
        "title": "Which two events need to happen when deploying to a production org? (Choose two.)",
        "code": "",
        "options": {
            "A": "All Workflow rules must have at least 1% test coverage.",
            "B": "All Apex code must have at least 75% test coverage.",
            "C": "All triggers must have some test coverage.",
            "D": "All VisualFlows must have at least 1% test coverage."
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>生产环境部署强制要求：<br>✅ <strong>B</strong>: Org-wide Apex Code Coverage >= 75%。<br>✅ <strong>C</strong>: 每个 Trigger 必须有 >0% 的覆盖率 (即至少执行一行)。<br>❌ A/D: 声明式自动化 (Workflow, Flow) 没有代码覆盖率要求。"
    },
    {
        "id": 325,
        "title": "A business has a proprietary Order Management System (OMS) that creates orders from their website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in Salesforce. It is noticed that each update from the OMS creates a new order record in Salesforce. Which two actions will prevent the duplicate order records from being created in Salesforce? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use the order number from the OMS as an external ID.",
            "B": "Write a before trigger on the order object to delete any duplicates.",
            "C": "Ensure that the order number in the OMS is unique.",
            "D": "Use the email on the contact record as an external ID."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>数据集成防重最佳实践：<strong>Upsert + External ID</strong>。<br>✅ <strong>A</strong>: 在 Salesforce Order 上创建一个字段存储 OMS Order Number，并设为 <strong>External ID</strong>。集成时使用 Upsert 操作，系统会自动根据此 ID 判断是 Create 还是 Update。<br>✅ <strong>C</strong>: 前提是源系统 (OMS) 的 Order Number 必须是<strong>唯一 (Unique)</strong> 的，否则会导致匹配错误。<br>❌ B: Trigger 删重是被动且高风险的做法。<br>❌ D: Email 不是 Order 的唯一标识。"
    },
    {
        "id": 326,
        "title": "Refer to the following Apex code: Integer x = 0; do { x = 1; x++; } while (x < 1); System.debug(x); What is the value of X when it is written to the debug log?",
        "code": "",
        "options": {
            "A": "0",
            "B": "1",
            "C": "2",
            "D": "3"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><code>do-while</code> 循环至少执行一次。<br>1. <code>do</code> 块执行：<code>x = 1</code> -> <code>x++</code> (x 变为 2)。<br>2. <code>while (x < 1)</code> 检查：2 < 1 为 <strong>False</strong>。<br>3. 循环终止。<br>4. 输出 <code>x</code> 为 <strong>2</strong>。"
    },
    {
        "id": 327,
        "title": "Einstein Next Best Action is configured at Universal Containers to display recommendations to internal users on the Account detail page. If the recommendation is approved, a new opportunity record and task should be generated. If the recommendation is rejected, an Apex method must be executed to perform a callout to an external system. Which three factors should a developer keep in mind when implementing the Apex method? (Choose three.)",
        "code": "",
        "options": {
            "A": "The method must use the @AuraEnabled annotation.",
            "B": "The method must use the @InvokableMethod annotation.",
            "C": "The method must be defined as static.",
            "D": "The method must be defined as public.",
            "E": "The method must use the @Future annotation."
        },
        "correct": "BCD",
        "explanation": "<strong>✅ Correct Answer: B, C & D</strong><br><br><strong>🧠 解析：</strong><br>Einstein Next Best Action (或 Flow) 调用 Apex 的标准方式是 <strong>Invocable Method</strong>。<br>要求：<br>✅ <strong>B</strong>: 使用 <code>@InvocableMethod</code> 注解。<br>✅ <strong>C</strong>: 方法必须是 <strong>static</strong>。<br>✅ <strong>D</strong>: 方法访问修饰符必须是 <strong>public</strong> 或 <strong>global</strong>。<br>❌ A: AuraEnabled 用于 LWC/Aura。<br>❌ E: 不强制要求 Future (虽然 Callout 可能需要异步，但这取决于具体实现，且 Invocable 本身不等于 Future)。"
    },
    {
        "id": 328,
        "title": "Given the following Anonymous block: ... Database.update(casesToUpdate,false); ... What should a developer consider for an environment that has over 10,000 Case records?",
        "code": "List<Case> casesToUpdate = new List<Case>();\nfor(Case thisCase : [SELECT Id, Status FROM Case LIMIT 50000]){\n  thisCase.Status = 'Working';\n  casesToUpdate.add(thisCase);\n}\ntry{\n  Database.update(casesToUpdate,false);\n}catch(Exception e){...}",
        "options": {
            "A": "The try-catch block will handle exceptions thrown by governor limits.",
            "B": "The transaction will fall due to exceeding the governor limit.",
            "C": "The transaction will succeed and changes will be committed.",
            "D": "The try-catch block will handle any DML exceptions thrown."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Governor Limit: <strong>DML Rows Limit = 10,000</strong>。<br>代码尝试一次性更新 (<code>Database.update</code>) 多达 50,000 条记录 (SOQL Limit)。<br>这会直接触发 <strong>System.LimitException: Too many DML rows: 10001</strong>。<br>此类 Limit 异常<strong>无法被 try-catch 捕获</strong>，事务直接失败。<br>❌ A/D: Limit 异常不可捕获。"
    },
    {
        "id": 329,
        "title": "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute a complex validation involving several types of objects. When creating the Apex method, which annotation should a developer use to ensure the method can be used within the flow?",
        "code": "",
        "options": {
            "A": "@RemoteAction",
            "B": "@future",
            "C": "@AuraEnabled",
            "D": "@InvocableMethod"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br><strong>Salesforce Flow</strong> 调用 Apex 代码的唯一入口是 <strong>Invocable Method</strong>。<br>必须在 Apex 方法上添加 <strong><code>@InvocableMethod</code></strong> 注解，该方法才能作为 \"Apex Action\" 出现在 Flow Builder 中供管理员选择。<br>❌ A/C: 用于前端调用。<br>❌ B: 用于异步处理。"
    },
    {
        "id": 330,
        "title": "Which action causes a before trigger to fire by default for Accounts?",
        "code": "",
        "options": {
            "A": "Renaming or replacing picklists",
            "B": "Importing data using the Data Loader and the Bulk API",
            "C": "Updating addresses using the Mass Address update tool",
            "D": "Converting Leads to Contacts"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Trigger 触发条件是 <strong>DML 操作 (Insert/Update/Delete)</strong>。<br>✅ <strong>B (Data Import)</strong>: 无论是 Data Loader 还是 Bulk API，底层都是执行 DML，因此<strong>一定会触发 Trigger</strong>。<br>❌ A: 元数据变更不触发 Trigger。<br>❌ C: Mass Address Update 是特殊的后台工具，通常不触发 Trigger。<br>❌ D: Lead Convert 过程复杂，是否触发 Account Trigger 取决于具体配置和上下文，不如 B 绝对。"
    },
    {
        "id": 331,
        "title": "What are two ways for a developer to execute tests in an org? (Choose three.)",
        "code": "",
        "options": {
            "A": "Tooling API",
            "B": "Salesforce DX",
            "C": "Metadata API",
            "D": "Bulk API",
            "E": "Setup Menu"
        },
        "correct": "ABE",
        "explanation": "<strong>✅ Correct Answer: A, B & E</strong><br><br><strong>🧠 解析：</strong><br>执行测试的入口：<br>✅ <strong>E (Setup Menu)</strong>: 经典 UI 入口 (Apex Test Execution)。<br>✅ <strong>B (Salesforce DX)</strong>: 使用 <code>sfdx force:apex:test:run</code> 命令行。<br>✅ <strong>A (Tooling API)</strong>: 提供了 <code>runTestsAsynchronous</code> 或 <code>ApexTestQueueItem</code> 对象，用于编程式运行测试。<br>❌ C: Metadata API 主要用于部署，不是直接运行测试的工具。<br>❌ D: Bulk API 处理数据，不跑测试。"
    },
    {
        "id": 332,
        "title": "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox? (Choose two.)",
        "code": "",
        "options": {
            "A": "SFDX CLI",
            "B": "Developer Console",
            "C": "Change Sets",
            "D": "VS Code"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>Deployment Script (脚本部署)</strong>。<br>✅ <strong>A (SFDX CLI)</strong>: 命令行工具，天生支持脚本自动化。<br>✅ <strong>D (VS Code)</strong>: 配合 Salesforce 扩展包，可以在 Terminal 中运行脚本或通过 Task 运行命令。<br>❌ B/C: 都是图形界面工具，不支持脚本化。"
    },
    {
        "id": 333,
        "title": "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records: @AuraEnabled public void static updateLeads(){ for(Lead thisLead : [SELECT Origin__c FROM Lead]){ thisLead.LeadSource = thisLead.Origin__c; update thisLead; } } Which governor limit will likely be exceeded within the Apex transaction?",
        "code": "",
        "options": {
            "A": "Total number of SOQL queries issued",
            "B": "Total number of DML statements issued",
            "C": "Total number of records processed as a result of DML statements",
            "D": "Total number of records retrieved by SOQL queries"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>代码在 For 循环中执行了 <code>update thisLead;</code>。<br>如果有 >2000 条记录，就会执行 >2000 次 Update 操作。<br>Salesforce 限制单次事务中 <strong>DML 语句总数不能超过 150</strong> (System.LimitException: Too many DML statements: 151)。<br>❌ A: SOQL 只有 1 次。<br>❌ C: 记录总数限制是 10,000，2000 不会超。<br>❌ D: SOQL 行数限制是 50,000，2000 不会超。"
    },
    {
        "id": 334,
        "title": "A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition. As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's social security number as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?",
        "code": "",
        "options": {
            "A": "Update the PrimaryId__c field definition to mark it as an External Id.",
            "B": "Upload the CSV into a custom object related to Candidate__c.",
            "C": "Create a before save flow to correctly map the records.",
            "D": "Create a before insert trigger to correctly map the records."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>要基于外部系统的主键 (如 PrimaryId/SSN) 来更新 Salesforce 记录，最简单的方法是使用 <strong>Upsert</strong>。<br>Upsert 需要一个字段作为匹配键，该字段必须被标记为 <strong>External ID</strong>。<br>✅ <strong>A</strong>: 将字段设为 External ID，就可以直接用 Data Loader 做 Upsert，无需额外开发。<br>❌ C/D: 用代码处理匹配不仅复杂，而且效率低。"
    },
    {
        "id": 335,
        "title": "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
        "code": "",
        "options": {
            "A": "On the Paused Flow Interviews related list for a given record",
            "B": "In the system debug log by filtering on Paused Flow Interview",
            "C": "In the Paused Interviews section of the Apex Flex Queue",
            "D": "On the Paused Flow Interviews component on the Home page"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Lightning Experience 中，要查看或管理暂停的 Flow，通常会使用 <strong>Paused Flow Interviews</strong> 组件。<br>这个组件可以添加到 <strong>Home Page (主页)</strong> 上。<br>此外，Setup 中也有 Process Automation -> Paused Flow Interviews 列表。<br>注：早期版本可能有些混淆，但 Lightning Home Page Component 是最直接的用户界面位置。<br>(注：A 选项虽然部分正确，但不如 D 通用，因为并非所有暂停流都关联记录)。"
    },
    {
        "id": 336,
        "title": "A developer created a trigger on the Account object and wants to test if the trigger is properly bulkified. The developer team decided that the trigger should be tested with 200 account records with unique names. What two things should be done to create the test data within the unit test with the least amount of code? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use the @isTest(seeAllData=true) annotation in the test class.",
            "B": "Create a static resource containing test data.",
            "C": "Use the @isTest(isParallel=true) annotation in the test class.",
            "D": "Use Test.loadData to populate data in your test methods."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>批量造数的最简便方法：<br>1. <strong>B (Static Resource)</strong>: 创建一个包含 200 条记录的 CSV 文件并上传。<br>2. <strong>D (Test.loadData)</strong>: 在测试代码中一行代码加载数据：<code>Test.loadData(Account.sObjectType, 'ResourceName')</code>。<br>❌ A: 依赖真实数据是大忌。<br>❌ C: 与造数无关。"
    },
    {
        "id": 337,
        "title": "A developer is asked to create a Visualforce page that lists the contacts owned by the current user. This component will be embedded in a Lightning page. Without writing unnecessary code, which controller should be used for this purpose?",
        "code": "",
        "options": {
            "A": "Standard controller",
            "B": "Custom controller",
            "C": "Standard list controller",
            "D": "Lightning controller"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求：显示记录<strong>列表 (List)</strong> + <strong>最少代码</strong>。<br>✅ <strong>Standard List Controller (C)</strong>: 专门用于处理记录集合。可以通过 <code>recordSetVar</code> 属性直接获取列表数据，甚至可以直接应用 Filter View (如 'My Contacts')。<br>❌ A: Standard Controller 处理单条记录。<br>❌ B: 需要写 Apex 查询代码，多余。"
    },
    {
        "id": 338,
        "title": "Assuming that name is a String obtained by a Visualforce page, which two SOQL Queries performed are safe from SOQL injection? (Choose two.)",
        "code": "",
        "options": {
            "A": "String query = '%' + name + '%'; List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
            "B": "String query = 'SELECT Id FROM Account WHERE Name LIKE \'%' + name.noQuotes() + '%\''; List<Account> results = Database.query(query);",
            "C": "String query = 'SELECT Id FROM Account WHERE Name LIKE \'%' + String.escapeSingleQuotes(name) + '%\''; List<Account> results = Database.query(query);",
            "D": "String query = 'SELECT Id FROM Account WHERE Name LIKE \'%' + name + '%\''; List<Account> results = Database.query(query);"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>防 SOQL 注入：<br>✅ <strong>A (Binding Variable)</strong>: 使用 <code>:variable</code> 是最安全的方式，平台自动处理转义。<br>✅ <strong>C (escapeSingleQuotes)</strong>: 如果必须拼接字符串 (Dynamic SOQL)，必须使用 <code>String.escapeSingleQuotes()</code>。<br>❌ D: 裸拼接，典型注入漏洞。<br>❌ B: noQuotes() 不是标准防注入方法。"
    },
    {
        "id": 339,
        "title": "Which three statements are accurate about debug logs? (Choose three.)",
        "code": "",
        "options": {
            "A": "Only the 20 most recent debug logs for a user are kept",
            "B": "System debug logs are retained for 24 hours.",
            "C": "Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.",
            "D": "The maximum size of a debug log is 5MB.",
            "E": "Debug logs can be set to specific users, classes, and triggers."
        },
        "correct": "BCE",
        "explanation": "<strong>✅ Correct Answer: B, C & E</strong><br><br><strong>🧠 解析：</strong><br>Debug Log 规则：<br>✅ <strong>B</strong>: 日志保留 24 小时。<br>✅ <strong>C</strong>: 级别是累积的 (FINE > DEBUG > INFO > WARN > ERROR)。<br>✅ <strong>E</strong>: Trace Flag 可以针对 User, Class, Trigger 设置。<br>❌ A: 每个 Trace Flag 最多保留 250MB 或一定数量 (并非固定 20)。<br>❌ D: 单个日志最大 20MB (旧版本是 5MB，但在考试中 20MB 是新标准，若无 20MB 选项，5MB 可能是旧题库答案，但 BCE 明显正确)。"
    },
    {
        "id": 340,
        "title": "Which action may cause triggers to fire?",
        "code": "",
        "options": {
            "A": "Renaming or replacing a picklist entry",
            "B": "Updates to Feed Items",
            "C": "Cascading delete operations",
            "D": "Changing a user's default division when the transfer division option is checked"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>触发器会在 DML 操作时触发。<br>✅ <strong>B (Feed Items)</strong>: <code>FeedItem</code> 是一个支持 Trigger 的标准对象，更新它属于 DML 操作，会触发 Trigger。<br>❌ A: 更改元数据不触发 Trigger。<br>❌ C: 级联删除 (Cascade Delete) 通常不会触发子记录的 Delete Trigger。<br>❌ D: 这是一个后台批量转移过程，通常不触发 Trigger。"
    },
    {
        "id": 341,
        "title": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object. Which two automation tools can be used to implement this feature? (Choose two.)",
        "code": "",
        "options": {
            "A": "Quick Actions",
            "B": "Approval Process",
            "C": "Fast Field Updates record-triggered flow",
            "D": "Account trigger"
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>需求：字段变更后，<strong>跨对象查询</strong>并更新字段。<br>✅ <strong>C (Fast Field Updates Flow - Before Save)</strong>: 效率最高，可在保存前直接查询并赋值，无需额外的 DML。<br>✅ <strong>D (Trigger)</strong>: 在 <code>before update</code> 中查询并赋值。<br>❌ A/B: Quick Action 和 Approval Process 均不适合自动化的字段同步逻辑。"
    },
    {
        "id": 342,
        "title": "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name \"Universal Containers\"?",
        "code": "",
        "options": {
            "A": "SELECT Lead.Id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'",
            "B": "FIND 'Universal Containers' IN Name Fields RETURNING Lead(Id, Name), Account(Id, Name), Contact(Id, Name)",
            "C": "FIND 'Universal Containers' IN CompanyName Fields RETURNING Lead(Id, Name), Account(Id, Name), Contact(Id, Name)",
            "D": "SELECT Lead(Id, Name), Account(Id, Name), Contact(Id, Name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>跨对象搜索 (Leads, Accounts, Contacts) 应使用 <strong>SOSL (Salesforce Object Search Language)</strong>。<br>语法：<code>FIND 'SearchQuery' IN [FieldGroup] RETURNING Obj1(Fields), Obj2(Fields)</code>。<br>✅ <strong>B</strong>: 语法正确。<br>❌ A/D: SOQL 不支持多对象 <code>FROM</code>。<br>❌ C: <code>IN CompanyName Fields</code> 不存在，且 Account/Contact 无 CompanyName 字段 (通常是 Name)。"
    },
    {
        "id": 343,
        "title": "The sales management team at Universal Containers requires that the LeadSource field of the Lead record be populated when a Lead is converted. What should be done to ensure that a user populates the LeadSource field prior to converting a Lead?",
        "code": "",
        "options": {
            "A": "Create an after trigger on Lead",
            "B": "Use a Validation Rule",
            "C": "Use a Formula Field",
            "D": "Use Lead Conversion field mapping"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>要强制在转换 (Convert) 时填写字段，最有效的方法是 <strong>Validation Rule (验证规则)</strong>。<br>规则逻辑：<code>AND(IsConverted, ISBLANK(Text(LeadSource)))</code>。<br>❌ A: After Trigger 在保存后执行，无法阻止 UI 操作前的校验。<br>❌ C: 公式字段只读。<br>❌ D: 字段映射仅用于数据传输，不负责校验。"
    },
    {
        "id": 344,
        "title": "A developer is creating an app that contains multiple Lightning web components. One of the child components is used for navigation purposes. When a user clicks a button called Next in the child component, the parent component must be alerted so it can navigate to the next page. How should this be accomplished?",
        "code": "",
        "options": {
            "A": "Create a custom event.",
            "B": "Call a method in the Apex controller.",
            "C": "Update a property on the parent.",
            "D": "Fire a notification."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>LWC <strong>子传父 (Child to Parent)</strong> 通信的标准方式是 <strong>Custom Event (自定义事件)</strong>。<br>子组件：<code>this.dispatchEvent(new CustomEvent('next'))</code>。<br>父组件：<code>&lt;c-child onnext={handleNext}&gt;</code>。<br>❌ B: Apex 用于后端。<br>❌ C: 子组件不能直接修改父组件属性 (单向数据流)。<br>❌ D: Notification 用于 UI 提示。"
    },
    {
        "id": 345,
        "title": "Universal Containers is building a recruiting app with an Applicant object that stores information about an individual person and a Job object that represents a job. Each applicant may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
        "code": "",
        "options": {
            "A": "Lookup field from Applicant to Job",
            "B": "Junction object between Applicant and Job",
            "C": "Master-detail field from Applicant to Job",
            "D": "Formula field on Applicant that references Job"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：一个申请人申请多个职位，一个职位有多个申请人 -> <strong>多对多关系 (Many-to-Many)</strong>。<br>在 Salesforce 中，多对多关系必须通过 <strong>Junction Object (连接对象)</strong> 来实现。<br>该对象通常包含两个 Master-Detail 字段，分别指向两个父对象 (Applicant 和 Job)。<br>❌ A/C: 是一对多关系。"
    },
    {
        "id": 346,
        "title": "A developer is creating a Lightning web component to show a list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields except the commission field. How should this be enforced so that the component works for both users without showing any errors?",
        "code": "",
        "options": {
            "A": "Use Lightning Data Service to get the collection of sales records.",
            "B": "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component.",
            "C": "Use Lightning Locker Service to enforce sharing rules and field-level security.",
            "D": "Use Security.stripInaccessible to remove fields inaccessible to the current user."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：在 Apex 返回数据前，自动移除用户无权访问的字段 (Strip Inaccessible Fields)。<br>✅ <strong>D (Security.stripInaccessible)</strong>: 这是处理 FLS (字段级安全性) 的最佳实践方法。它会检查字段权限并剔除无权字段，而不会抛出异常，确保前端代码对不同用户都能正常运行。<br>❌ B: <code>WITH SECURITY_ENFORCED</code> 会在遇到无权字段时直接抛出异常，导致组件报错。"
    },
    {
        "id": 347,
        "title": "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?",
        "code": "",
        "options": {
            "A": "<aura:application access=\"GLOBAL\">\n<aura:dependency resource=\"c:accountList\"/>\n</aura:application>",
            "B": "<aura:application access=\"GLOBAL\" extends=\"ltng:outApp\">\n<aura:dependency resource=\"c:accountList\"/>\n</aura:application>",
            "C": "<aura:component access=\"GLOBAL\">\n<aura:dependency resource=\"c:accountList\"/>\n</aura:component>",
            "D": "<aura:component access=\"GLOBAL\" extends=\"ltng:outApp\">\n<aura:dependency resource=\"c:accountList\"/>\n</aura:component>"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Lightning Out (在 VF 中使用 Lightning 组件) 需要定义一个 <strong>Dependency App</strong>。<br>该 App 必须：<br>1. 是 <code>&lt;aura:application&gt;</code>。<br>2. 继承自 <code>ltng:outApp</code>。<br>3. 声明依赖组件 <code>&lt;aura:dependency&gt;</code>。<br>❌ A: 缺少 extends。<br>❌ C/D: 是 Component 不是 App。"
    },
    {
        "id": 348,
        "title": "A software company uses the following objects and relationships: Case, Defect__c, Case_Defect__c (Junction Object). Case and Defect__c have Private organization-wide defaults. What should be done to share a specific Case_Defect__c record with a user?",
        "code": "",
        "options": {
            "A": "Share the parent Defect__c record.",
            "B": "Share the parent Case and Defect__c records.",
            "C": "Share the Case_Defect__c record.",
            "D": "Share the parent Case record."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>Junction Object (连接对象)</strong> 记录的访问权限通常由其<strong>主记录 (Master Records)</strong> 控制。<br>如果 OWD 是 Private，用户必须同时拥有两个父记录 (Case 和 Defect__c) 的访问权限，才能访问连接记录。<br>因此必须<strong>共享两个父记录</strong>。<br>❌ C: 连接记录不能单独共享 (没有 Owner)。"
    },
    {
        "id": 349,
        "title": "As part of a data cleanup strategy, AW Computing wants to proactively delete associated Opportunity records when the related Account is deleted. Which automation tool should be used to meet this business requirement?",
        "code": "",
        "options": {
            "A": "Scheduled job",
            "B": "Record-triggered flow",
            "C": "Workflow rules",
            "D": "Outbound messaging"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Delete Trigger (删除触发)</strong>。<br>✅ <strong>B (Record-Triggered Flow)</strong>: 支持 <strong>Before Delete</strong> 触发器，可以执行相关逻辑 (如级联删除非 Master-Detail 的子记录)。<br>❌ C: Workflow 不支持 Delete 触发。<br>❌ A: Scheduled Job 是定时任务，非实时响应。"
    },
    {
        "id": 350,
        "title": "While working in a sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors. Why did the method fail in the sandbox test framework but succeed in the Developer Console?",
        "code": "",
        "options": {
            "A": "The test method is calling an @future method.",
            "B": "The test method has a syntax error in the code.",
            "C": "The test method does not use System.runAs to execute as a specific user.",
            "D": "The test method relies on existing data in the sandbox."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>根本差异：<strong>Data Isolation (数据隔离)</strong>。<br>✅ <strong>Test Framework</strong>: 默认看不到 Org 中的真实数据。<br>✅ <strong>Execute Anonymous</strong>: 可以访问 Org 真实数据。<br>如果测试逻辑依赖了 Sandbox 中已有的数据 (而非在测试中创建的)，它在 Test Framework 中会查不到数据而失败，但在匿名窗口中能查到数据而成功。"
    },
    {
        "id": 351,
        "title": "The Account object in an organization has a master-detail relationship to a child object called Branch. The following automations exist: Roll-up summary fields, Custom validation rules, Duplicate rules. A developer created a trigger on the Account object. Which two things should the developer consider while testing the trigger code? (Choose two.)",
        "code": "",
        "options": {
            "A": "The validation rules will cause the trigger to fire again.",
            "B": "Duplicate rules are executed once all DML operations commit to the database.",
            "C": "The trigger may fire multiple times during a transaction.",
            "D": "Roll-up summary fields can cause the parent record to go through Save."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>Account Trigger 测试关键点：<br>✅ <strong>D</strong>: 子对象 (Branch) 变更会导致父对象 (Account) 的 <strong>Roll-up Summary</strong> 重新计算，进而导致 Account 再次保存并触发 Trigger。<br>✅ <strong>C</strong>: 由于 Roll-up 的触发机制，Account Trigger 可能会在同一事务中被多次调用 (Recursion)，需防止递归。<br>❌ A: 验证规则阻止保存，不触发 Trigger。<br>❌ B: 重复规则在 DML 前执行。"
    },
    {
        "id": 352,
        "title": "Where are two locations a developer can look to find information about the status of batch or future methods? (Choose two.)",
        "code": "",
        "options": {
            "A": "Apex Flex Queue",
            "B": "Paused Flow Interviews component",
            "C": "Apex Jobs",
            "D": "Developer Console"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>异步 Apex 监控位置：<br>✅ <strong>C (Apex Jobs)</strong>: 查看 Batch, Future, Queueable, Scheduled Apex 的执行状态 (Completed, Failed, Processing)。<br>✅ <strong>A (Apex Flex Queue)</strong>: 查看处于 \"Holding\" 状态的 Batch Job (最多 100 个)。<br>❌ B: 仅用于 Flow。<br>❌ D: Dev Console 仅用于日志和调试。"
    },
    {
        "id": 353,
        "title": "What are three characteristics of change set deployments? (Choose three.)",
        "code": "",
        "options": {
            "A": "Change sets can deploy custom settings data.",
            "B": "Change sets can only be used between related organizations.",
            "C": "Deployment is done in a one-way, single transaction.",
            "D": "Sending a change set between two orgs requires a deployment connection.",
            "E": "Change sets can be used to transfer records."
        },
        "correct": "BCD",
        "explanation": "<strong>✅ Correct Answer: B, C & D</strong><br><br><strong>🧠 解析：</strong><br>Change Sets 特性：<br>✅ <strong>B</strong>: 只能在<strong>关联组织</strong> (如 Sandbox <-> Production) 间部署。<br>✅ <strong>C</strong>: 单向、<strong>All-or-None (单一事务)</strong> 部署。<br>✅ <strong>D</strong>: 需要配置 <strong>Deployment Connection</strong>。<br>❌ A/E: 只能部署<strong>元数据 (Metadata)</strong>，不能部署数据 (Data/Records)。"
    },
    {
        "id": 354,
        "title": "While writing an Apex class, a developer wants to make sure that all functionality being developed is handled as specified by the requirements. Which approach should the developer use to be sure that the Apex class is working according to specifications?",
        "code": "",
        "options": {
            "A": "Include a try/catch block to the Apex class.",
            "B": "Create a test class to execute the business logic and run the test in the Developer Console.",
            "C": "Include a savepoint and Database.rollback().",
            "D": "Run the code in an Execute Anonymous block in the Developer Console."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>确保代码符合需求 (Specifications) 的标准方法是编写<strong>单元测试 (Unit Tests)</strong>。<br>通过编写测试类并使用 <code>System.assert()</code> 验证结果，可以确保逻辑正确且防止回归。<br>❌ A/C: 只是代码实现细节。<br>❌ D: 匿名执行仅用于临时调试，缺乏系统性和可重复性。"
    },
    {
        "id": 355,
        "title": "Which two scenarios require an Apex method to be called imperatively from a Lightning web component? (Choose two.)",
        "code": "",
        "options": {
            "A": "Calling a method that makes a web service callout",
            "B": "Calling a method that is not annotated with @AuraEnabled(cacheable=true)",
            "C": "Calling a method with the click of a button",
            "D": "Calling a method that is external to the main controller for the Lightning web component"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>必须使用 <strong>Imperative Call (命令式调用)</strong> 的场景：<br>✅ <strong>B</strong>: 方法<strong>未</strong>标记 <code>cacheable=true</code> (即用于写操作/DML)。<br>✅ <strong>C</strong>: 在用户交互 (如<strong>点击按钮</strong>) 时触发调用。<br>❌ A: Callout 也可以缓存，不一定非要命令式 (虽然通常是不缓存的)。<br>❌ D: 与调用方式无关。"
    },
    {
        "id": 356,
        "title": "Refer to the code snippet below: import fetchOpps from '@salesforce/apex/OpportunitySearch.fetchOpportunities'; @wire(fetchOpps) opportunities; ... Which three considerations must the developer implement to make the fetchOpportunities method available within the Lightning web component? (Choose three.)",
        "code": "",
        "options": {
            "A": "The method cannot mutate the result set retrieved from the database.",
            "B": "The method must be annotated with the @InvocableMethod annotation.",
            "C": "The method must specify the (cacheable=true) attribute.",
            "D": "The method must be annotated with the @AuraEnabled annotation.",
            "E": "The method must specify the (continuation=true) attribute."
        },
        "correct": "ACD",
        "explanation": "<strong>✅ Correct Answer: A, C & D</strong><br><br><strong>🧠 解析：</strong><br>LWC 使用 <code>@wire</code> 调用 Apex 的要求：<br>✅ <strong>D</strong>: 必须使用 <code>@AuraEnabled</code>。<br>✅ <strong>C</strong>: 必须设置 <code>cacheable=true</code>。<br>✅ <strong>A</strong>: 标记为 cacheable 的方法不能修改数据 (DML)，因此不能 mutate result set (只读)。<br>❌ B: Invocable 用于 Flow。<br>❌ E: Continuation 用于异步 Callout。"
    },
    {
        "id": 357,
        "title": "Universal Containers decides to use purely declarative development to build out a new Salesforce application. Which two options can be used to build out the business logic layer for this application? (Choose two.)",
        "code": "",
        "options": {
            "A": "Record-Triggered Flow",
            "B": "Validation Rules",
            "C": "Batch Jobs",
            "D": "Remote Actions"
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>Declarative (声明式/无代码)</strong> 和 <strong>Business Logic (业务逻辑)</strong>。<br>✅ <strong>A (Flow)</strong>: 核心自动化工具。<br>✅ <strong>B (Validation Rules)</strong>: 数据校验逻辑。<br>❌ C/D: Batch Apex 和 Remote Action 属于<strong>编程式 (Programmatic)</strong> 开发。"
    },
    {
        "id": 358,
        "title": "Universal Containers (UC) is developing a process for their sales teams that requires all sales reps to go through a set of scripted steps with each new customer they create. In the first step of collecting information, UC's ERP system must be checked via a REST endpoint to see if the customer exists. If the customer exists, the data must be presented to the sales rep in Salesforce. Which two should a developer implement to satisfy the requirements? (Choose two.)",
        "code": "",
        "options": {
            "A": "Trigger",
            "B": "Flow",
            "C": "Invocable method",
            "D": "Future method"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Scripted Steps (引导式流程)</strong> + <strong>REST Callout & Display Data (调用并显示)</strong>。<br>✅ <strong>B (Screen Flow)</strong>: 提供引导式 UI。<br>✅ <strong>C (Invocable Method)</strong>: Flow 需要调用 Apex 来执行 REST Callout (并同步返回数据给 UI)。<br>❌ A: Trigger 无 UI。<br>❌ D: Future 是异步的，无法将数据立即返回给 Flow 显示。"
    },
    {
        "id": 359,
        "title": "A developer created these three Rollup Summary fields in the custom object, Project__c: Total_Timesheets__c, Total_Approved_Timesheets__c, Total_Rejected_Timesheets__c. The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
        "code": "",
        "options": {
            "A": "Apex trigger",
            "B": "Record-triggered flow",
            "C": "Formula field",
            "D": "Roll-up summary field"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>计算两个现有数值字段的比率，最简单、零维护的方式是使用 <strong>Formula Field (公式字段)</strong>。<br>公式：<code>Total_Rejected_Timesheets__c / Total_Approved_Timesheets__c</code>。<br>❌ D: Roll-up 只能聚合子记录，不能计算同记录字段比率。<br>❌ A/B: 过度设计。"
    },
    {
        "id": 360,
        "title": "Ursa Major Solar has a custom object, ServiceJob__c, with an optional Lookup field to Account called Partner_Service_Provider__c. The TotalJobs__c field on Account tracks the total number of ServiceJob__c records to which a partner service provider Account is related. What is the most efficient way to ensure that the TotalJobs__c field is kept up to date?",
        "code": "",
        "options": {
            "A": "Create an Apex trigger on ServiceJob__c.",
            "B": "Change TotalJobs__c to a roll-up summary field",
            "C": "Create a record-triggered flow on ServiceJob__c.",
            "D": "Create a schedule-triggered flow on ServiceJob__c."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>关系：<strong>Lookup (非 Master-Detail)</strong>。<br>需求：<strong>Count (计数汇总)</strong>。<br>Lookup 不支持 Roll-up Summary。<br>在 Flow 时代，最高效且声明式的方法是使用 <strong>Record-Triggered Flow (C)</strong>。<br>当 Job 创建/删除/变更 Account 时，触发 Flow 更新 Account 的计数。<br>❌ A: Trigger 需要代码。<br>❌ B: Lookup 不支持。<br>❌ D: 定时更新非实时。"
    },
    {
        "id": 361,
        "title": "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
        "code": "",
        "options": {
            "A": "emit()",
            "B": "fireEvent()",
            "C": "fire()",
            "D": "registerEvent()"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在 Aura 框架中，无论是 Component Event 还是 Application Event，触发事件的方法都是 <code>event.fire()</code>。<br>❌ A/B: 不是 Aura 的方法。<br>❌ D: <code>registerEvent</code> 是在组件 Markup 中声明事件的标签。"
    },
    {
        "id": 362,
        "title": "If Apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which two statements are true regarding governor limits? (Choose two.)",
        "code": "",
        "options": {
            "A": "The Apex governor limits are reset for each iteration of the execute() method.",
            "B": "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction.",
            "C": "The Apex governor limits will use the asynchronous limit levels.",
            "D": "The Apex governor limits are omitted while calling the constructor of the Apex class."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>Batch Apex 执行机制：<br>✅ <strong>A</strong>: <code>execute()</code> 方法会被多次调用 (每批次一次)，每次调用都是一个<strong>独立的事务 (Transaction)</strong>，因此 Governor Limits 会在每次迭代开始时<strong>重置</strong>。<br>✅ <strong>C</strong>: Batch Apex 属于<strong>异步 Apex (Asynchronous Apex)</strong>，因此享有更宽松的异步限制 (如 CPU Time, Heap Size 等)。<br>❌ B: 异步事务依然受 Governor Limits 限制。<br>❌ D: 构造函数同样受限制。"
    },
    {
        "id": 363,
        "title": "A developer at Universal Containers is tasked with implementing a new Salesforce application that will be maintained completely by their company's Salesforce administrator. Which two options should be considered for building out the business logic layer of the application? (Choose two.)",
        "code": "",
        "options": {
            "A": "Record-Triggered Flows",
            "B": "Scheduled Jobs",
            "C": "Invocable Actions",
            "D": "Validation Rules"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>关键需求：<strong>Maintained by Administrator (管理员维护)</strong>。<br>意味着必须使用<strong>声明式 (Declarative/No-Code)</strong> 工具。<br>✅ <strong>A (Record-Triggered Flows)</strong>: 管理员最强大的自动化工具。<br>✅ <strong>D (Validation Rules)</strong>: 声明式数据校验。<br>❌ B (Scheduled Jobs): 通常指 Apex Schedulable。<br>❌ C (Invocable Actions): 指 Apex 代码。"
    },
    {
        "id": 364,
        "title": "A developer wants to improve runtime performance of Apex calls by caching results on the client. What is the most efficient way to implement this and follow best practices?",
        "code": "",
        "options": {
            "A": "Decorate the server-side method with @AuraEnabled(storable=true).",
            "B": "Set a cookie in the browser for use upon return to the page.",
            "C": "Call the setStorable() method on the action in the JavaScript client-side code.",
            "D": "Decorate the server-side method with @AuraEnabled(cacheable=true)."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>现代 LWC/Aura 开发中，实现客户端缓存 (Client-side Caching) 的标准做法是：<br>在 Apex 方法上添加 <strong><code>@AuraEnabled(cacheable=true)</code></strong> 注解。<br>这允许 Lightning Data Service (LDS) 缓存结果，减少服务器往返。<br>❌ C: <code>setStorable()</code> 是 Aura 旧版写法，现在推荐注解方式。<br>❌ A: <code>storable=true</code> 语法错误。"
    },
    {
        "id": 365,
        "title": "A company wants to implement a new call center process for handling customer service calls. It requires service reps to ask for the caller's account number before proceeding with the rest of their call script. Following best practices, what is the optimal approach to satisfy this requirement?",
        "code": "",
        "options": {
            "A": "Flow Builder",
            "B": "Apex trigger",
            "C": "Einstein Next Best Action",
            "D": "Approvals"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Call Script (通话脚本)</strong> + <strong>Guided Process (引导式流程)</strong>。<br>✅ <strong>Flow Builder (Screen Flow)</strong>: 最适合创建向导式屏幕，引导客服人员逐步操作 (如输入账号 -> 验证 -> 下一步)。<br>❌ B: Trigger 是后台逻辑。<br>❌ C: NBA 是推荐系统。<br>❌ D: Approval 是审批流。"
    },
    {
        "id": 366,
        "title": "Which annotation should a developer use on an Apex method to make it available to be wired to a property in a Lightning web component?",
        "code": "",
        "options": {
            "A": "@RemoteAction(cacheable=true)",
            "B": "@AuraEnabled",
            "C": "@RemoteAction",
            "D": "@AuraEnabled(cacheable=true)"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>LWC <code>@wire</code> 服务的硬性要求：<br>Apex 方法必须标记为 <strong><code>@AuraEnabled(cacheable=true)</code></strong>。<br>❌ B: 如果没有 <code>cacheable=true</code>，只能进行命令式调用 (Imperative Call)，不能用 <code>@wire</code>。<br>❌ A/C: <code>@RemoteAction</code> 是 Visualforce 用的。"
    },
    {
        "id": 367,
        "title": "A custom picklist field, Food_Preference__c, exists on a custom object. The picklist contains the following options: Vegan, Kosher, No Preference. The developer must ensure a value is populated every time a record is created or updated. What is the optimal way to ensure a value is selected every time a record is saved?",
        "code": "",
        "options": {
            "A": "Write an Apex trigger to ensure a value is selected.",
            "B": "Set \"use the first value in the list as the default value\" to True.",
            "C": "Mark the field as Required on the object's page layout.",
            "D": "Mark the field as Required on the field definition."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>最严格、最高效的必填校验方式是：<strong>在字段定义 (Field Definition) 上勾选 Required</strong>。<br>这会强制所有入口 (UI, API, Data Loader) 都必须提供值。<br>❌ C: 仅限制 UI。<br>❌ B: 仅在创建时生效，且用户可以清空。<br>❌ A: 代码维护成本高。"
    },
    {
        "id": 368,
        "title": "A developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?",
        "code": "",
        "options": {
            "A": "Use SOQL to query the org for the required data",
            "B": "Use Anonymous Apex to create the required data",
            "C": "Use Test.loadData() and reference a CSV file in a static resource",
            "D": "Use Test.loadData() and reference a JSON file in Documents"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>在测试中加载特定数据的标准方法是 <strong>Test.loadData()</strong>。<br>它需要引用一个上传为 <strong>Static Resource (静态资源)</strong> 的 <strong>CSV 文件</strong>。<br>❌ A: 测试无法访问 Org 数据。<br>❌ D: 不支持 JSON 和 Documents。"
    },
    {
        "id": 369,
        "title": "Universal Containers (UC) processes orders in Salesforce in a custom object, Order__c. ... After the status for an Order__c is first set to Placed, the order information must be sent to a REST endpoint in the ERP system that can process one order at a time. What should the developer implement to accomplish this?",
        "code": "",
        "options": {
            "A": "Callout from a Queueable class called from a trigger",
            "B": "Callout from a Batchable class called from a scheduled job",
            "C": "Callout from an @future method called from a trigger",
            "D": "Flow with a callout from an invocable method"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求难点：<strong>One order at a time (逐条处理)</strong> + <strong>Trigger Context (批量触发)</strong>。<br>✅ <strong>Queueable Apex (A)</strong>: 支持链式调用 (Chaining)，可以在一个 Job 中处理一条记录，然后 enqueue 下一个 Job 处理下一条，从而实现串行处理。同时也支持 Callout。<br>❌ C: @future 是并行的，无法控制顺序，且有每事务 50 个方法的限制，批量更新时容易超限。<br>❌ B: 实时性差。"
    },
    {
        "id": 370,
        "title": "Which code statement includes an Apex method named updateAccounts in the class AccountController for use in a Lightning web component?",
        "code": "",
        "options": {
            "A": "import updateAccounts from 'AccountController';",
            "B": "import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';",
            "C": "import updateAccounts from 'AccountController.updateAccounts';",
            "D": "import updateAccounts from '@salesforce/apex/AccountController';"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>LWC 导入 Apex 方法的标准语法：<br><code>import methodName from '@salesforce/apex/ClassName.MethodName';</code><br>✅ <strong>B</strong>: 完全符合语法。<br>❌ A/C/D: 路径或格式错误。"
    },
    {
        "id": 371,
        "title": "Which two statements are true about using the @testSetup annotation in an Apex test class? (Choose two.)",
        "code": "",
        "options": {
            "A": "The @testSetup annotation is not supported when the @isTest(SeeAllData=True) annotation is used",
            "B": "Records created in the test setup method cannot be updated in individual test methods.",
            "C": "A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits.",
            "D": "In a test setup method, test data is inserted once and made available for all test methods in the test class."
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>@testSetup 特性：<br>✅ <strong>D</strong>: 在整个 Test Class 中只运行一次，创建的数据对所有测试方法可见 (每个方法开始时会重置到这个初始状态)。<br>✅ <strong>A</strong>: 不能与 <code>SeeAllData=true</code> 共用 (因为 SeeAllData 意味着不使用隔离数据)。<br>❌ B: 测试方法中可以随意修改 Setup 数据 (不会影响其他测试方法)。<br>❌ C: 只运行一次，不是每个方法一次。"
    },
    {
        "id": 372,
        "title": "A company has a custom object, Sales_Help_Request__c, that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c. A developer is tasked with creating a field, TotalHours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?",
        "code": "",
        "options": {
            "A": "A roll-up summary field on the Opportunity object",
            "B": "A trigger on the Opportunity object",
            "C": "A record-triggered flow on the Sales_Help_Request__c object",
            "D": "A roll-up summary field on the Sales_Help_Request__c object"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>关系：<strong>Lookup (非 Master-Detail)</strong>。<br>需求：<strong>汇总求和 (Sum)</strong>。<br>Lookup 不支持 Roll-up Summary。<br>最佳实践：使用 <strong>Record-Triggered Flow</strong> (在子对象变更时触发，更新父对象字段)。<br>❌ A: Lookup 不支持 Roll-up Summary。<br>❌ B: Trigger 需要代码。<br>❌ D: 子对象不需要 Roll-up。"
    },
    {
        "id": 373,
        "title": "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components. Which annotation should a developer add to the Apex method to achieve this?",
        "code": "",
        "options": {
            "A": "@RemoteAction(cacheable=true)",
            "B": "@AuraEnabled",
            "C": "@RemoteAction",
            "D": "@AuraEnabled(cacheable=true)"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>LWC 调用 Apex 方法的条件：<br>1. 必须使用 <strong>@AuraEnabled</strong> 注解。<br>2. 如果是 <strong>DML 操作 (更新/插入/删除)</strong>，<strong>不能</strong>使用 <code>cacheable=true</code>。<br>因此，对于 \"update a list of Contacts\"，只能使用不带 cacheable 的 <code>@AuraEnabled</code>。<br>❌ D: 更新操作不能缓存 (会报错)。<br>❌ A/C: Visualforce 专用。"
    },
    {
        "id": 374,
        "title": "A developer created a trigger on the Account object. While testing the trigger, the developer sees the error message 'Maximum trigger depth exceeded'. What could be the possible causes?",
        "code": "",
        "options": {
            "A": "The trigger is getting executed multiple times.",
            "B": "The developer does not have the correct user permission.",
            "C": "The trigger is too long and should be refactored into a helper class.",
            "D": "The trigger does not have sufficient code coverage."
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br><strong>Maximum trigger depth exceeded</strong> 是经典的<strong>递归触发 (Recursion)</strong> 错误。<br>这通常是因为 Trigger 内部再次执行了更新操作 (如 Update Account)，导致 Trigger 再次被触发，形成无限循环，最终触达系统限制 (默认深度 16)。<br>❌ B/C/D: 与此错误无关。"
    },
    {
        "id": 375,
        "title": "Universal Containers has developed custom Apex code and Lightning Components in a Sandbox environment. They need to deploy the code and associated configurations to the Production environment. What is the recommended process for deploying the code and configurations to Production?",
        "code": "",
        "options": {
            "A": "Use Salesforce CLI to deploy the Apex code and Lightning Components",
            "B": "Use the Ant Migration Tool to deploy the Apex code and Lightning Components",
            "C": "Use a change set to deploy the Apex code and Lightning Components",
            "D": "Use the Force.com IDE to deploy the Apex code and Lightning Components"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>对于一般企业 (非 ISV/DevOps 流程) 而言，从 Sandbox 到 Production 的标准、官方推荐的“低代码”部署方式是 <strong>Change Sets (变更集)</strong>。<br>注：虽然 CLI 是现代开发趋势，但在这种基础题目语境下，Change Set 仍被视为 Admin/Standard 流程。<br>❌ D: Force.com IDE 已废弃。<br>❌ B: Ant Tool 是旧工具。"
    },
    {
        "id": 376,
        "title": "What should a developer use to fix a Lightning web component bug in a sandbox?",
        "code": "",
        "options": {
            "A": "Execute Anonymous",
            "B": "Developer Console",
            "C": "VS Code",
            "D": "Force.com IDE"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br><strong>LWC (Lightning Web Components)</strong> 必须在本地开发，不能在 Developer Console 中编辑。<br>目前唯一官方支持且推荐的 IDE 是 <strong>VS Code (Visual Studio Code)</strong> 配合 Salesforce Extension Pack。<br>❌ B: Dev Console 不支持 LWC。<br>❌ D: 已废弃。"
    },
    {
        "id": 377,
        "title": "A business implemented a gamification plan ... When the video is marked as completed in Salesforce, an external web service must be called so that points can be awarded to the user. A developer implemented these requirements in the after update trigger by making a call to an external web service. However, a System.CalloutException is occurring. What should the developer do to fix this error?",
        "code": "",
        "options": {
            "A": "Surround the external call with a try-catch block to handle the exception.",
            "B": "Move the callout to a class that implements Queueable and Database.AllowsCallouts interfaces.",
            "C": "Replace the after update trigger with a before insert trigger.",
            "D": "Write a REST service to integrate with the external web service."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Trigger 运行在数据库事务中，<strong>不能直接进行同步 Callout</strong>。<br>必须将 Callout 逻辑移至<strong>异步进程 (Asynchronous Process)</strong>。<br>✅ <strong>B (Queueable with AllowsCallouts)</strong>: 现代、灵活的异步 Callout 方案。<br>或者使用 <code>@future(callout=true)</code>。<br>❌ A: Try-catch 无法解决事务限制。<br>❌ C: Trigger 无论 before/after 都不能同步 Callout。"
    },
    {
        "id": 378,
        "title": "A developer is working on a project to import data from an external system into Salesforce. The data contains sensitive information that should not be visible to all users in Salesforce. What should the developer do to ensure that the data is secure?",
        "code": "",
        "options": {
            "A": "Use a third-party tool to encrypt the sensitive data before importing it into Salesforce.",
            "B": "Use the Apex Data Loader to import the data and write Apex code to handle security and access control.",
            "C": "Use the Salesforce CLI to import the data and set up user permissions to restrict access to sensitive data.",
            "D": "Use the Data Import Wizard to import the data and set up field-level security to restrict access to sensitive fields."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 中控制字段可见性 (Security) 的标准机制是 <strong>Field-Level Security (FLS)</strong>。<br>无论用什么工具导入数据，只要正确配置了 FLS (通过 Profile 或 Permission Set)，用户就无法看到敏感字段。<br>✅ <strong>D</strong>: 强调了设置 FLS 这一核心安全措施。<br>❌ A: 外部加密导致数据在 Salesforce 内不可用/不可搜索。<br>❌ B: Apex 不负责字段级访问控制的定义。"
    },
    {
        "id": 379,
        "title": "A developer created a weather app that contains multiple Lightning web components that are in different DOM trees. ... When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, the information must be sent to the Temperature component so the temperature can be converted and displayed. What is the recommended way to accomplish this?",
        "code": "",
        "options": {
            "A": "Create a custom event to handle the communication between components.",
            "B": "The Toggle component should call a method in the Temperature component.",
            "C": "Use Lightning Message Service to communicate between the components.",
            "D": "Use an application event to communicate between the components."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>跨 DOM 树 (非父子关系) 的组件通信，推荐使用 <strong>Lightning Message Service (LMS)</strong>。<br>LMS 提供了一个标准的发布-订阅 (Publish-Subscribe) 通道，允许 LWC、Aura 和 Visualforce 之间进行通信。<br>❌ A: Custom Event 仅限于 Shadow DOM 边界内或冒泡到父组件。<br>❌ D: Application Event 是 Aura 的概念。"
    },
    {
        "id": 380,
        "title": "Universal Containers is developing a new Lightning web component for their marketing department. They want to ensure that the component is fine tuned and provides a seamless user experience. What are some benefits of using the Lightning Component framework?",
        "code": "",
        "options": {
            "A": "Automatic support for accessibility standards",
            "B": "Better performance due to client-side rendering",
            "C": "Easy integration with third-party libraries",
            "D": "Compatibility with all web browsers"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Lightning Web Components (LWC) 的核心优势：<br>✅ <strong>B</strong>: 基于浏览器原生 Web 标准，利用<strong>客户端渲染 (Client-side Rendering)</strong>，性能显著优于传统的 Visualforce (服务端渲染) 和 Aura。<br>❌ D: 不支持 IE11 (Salesforce 已停止支持)。"
    },
    {
        "id": 381,
        "title": "Universal Containers needs to create a custom user interface component that allows users to enter information about their accounts. The component should be able to validate the user input before saving the information to the database. What is the best technology to create this component?",
        "code": "",
        "options": {
            "A": "Visualforce",
            "B": "Lightning Web Components",
            "C": "Flow",
            "D": "VUE JavaScript framework"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Custom UI (自定义 UI)</strong> + <strong>Input Validation (输入校验)</strong>。<br>✅ <strong>B (LWC)</strong>: Salesforce 官方推荐的现代 UI 框架，性能好，原生支持客户端表单验证和自定义逻辑。<br>❌ A: Visualforce 是老技术。<br>❌ C: Flow 适合流程自动化，处理复杂的自定义 UI 和交互逻辑不如 LWC 灵活。<br>❌ D: Vue 框架不是 Salesforce 原生支持的标准开发模式。"
    },
    {
        "id": 382,
        "title": "A developer is designing a new application on the Salesforce platform and wants to ensure it can support multiple tenants effectively. Which design framework should the developer consider to ensure scalability and maintainability?",
        "code": "",
        "options": {
            "A": "Agile Development",
            "B": "Waterfall Model",
            "C": "Model-View-Controller (MVC)",
            "D": "Flux (view, action, dispatcher, and store)"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>Salesforce 平台的底层架构就是基于 <strong>MVC (Model-View-Controller)</strong> 模式设计的。<br><strong>Model</strong>: SObjects (Schema/Database)<br><strong>View</strong>: Lightning Components / Visualforce Pages<br><strong>Controller</strong>: Apex Classes<br>遵循 MVC 是 Salesforce 开发的最佳实践。<br>❌ A/B: 是项目管理方法论。<br>❌ D: 是 React 的状态管理模式。"
    },
    {
        "id": 383,
        "title": "Universal Containers wants to automatically assign new cases to the appropriate support representative based on the case origin. They have created a custom field on the Case object to store the support representative name. What would be the best solution for this requirement?",
        "code": "",
        "options": {
            "A": "Use a trigger on the Case object to assign the case to the appropriate support representative",
            "B": "Use a Process Builder to assign the case to the appropriate support representative",
            "C": "Use a time-based workflow rule to assign the case to the appropriate support representative",
            "D": "Use a Flow to assign the case to the appropriate support representative"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>自动分配 (Assignment)</strong> + <strong>基于字段值 (Logic)</strong>。<br>✅ <strong>D (Record-Triggered Flow)</strong>: 是目前官方推荐的自动化工具，可以在记录创建时根据条件自动更新字段 (如 Owner 或自定义分配字段)。<br>❌ A: Trigger 需要写代码，维护成本高。<br>❌ B: Process Builder 已不推荐使用。<br>❌ C: Time-based Workflow 是延时动作，无法实时分配。"
    },
    {
        "id": 384,
        "title": "A developer created this Apex trigger that calls MyClass.myStaticMethod: trigger myTrigger on Contact (before insert) { MyClass.myStaticMethod(trigger.new); } The developer creates a test class with a test method that calls MyClass.myStaticMethod, resulting in 81% overall code coverage. What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?",
        "code": "",
        "options": {
            "A": "The deployment fails because no assertions were made in the test method",
            "B": "The deployment passes because both classes and the trigger were included in the deployment",
            "C": "The deployment passes because the Apex code has required >75% code coverage",
            "D": "The deployment fails because the Apex trigger has no code coverage"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>部署到生产环境的硬性要求之一：<strong>每个 Trigger 必须至少有 1% 的代码覆盖率</strong>。<br>题目中测试类直接调用了 `MyClass.myStaticMethod`，因此 Class 有覆盖率。<br>但是，没有测试代码执行 DML 操作 (如 `insert contact`) 来触发 Trigger。<br>导致 Trigger 代码行未被执行，覆盖率为 0%，部署失败。<br>❌ C: 虽然总覆盖率 >75%，但单项 Trigger 覆盖率为 0 也是阻断性错误。"
    },
    {
        "id": 385,
        "title": "A developer creates a batch Apex job to update a large number of records, and receives reports of the job timing out and not completing. What is the first step toward troubleshooting the issue?",
        "code": "",
        "options": {
            "A": "Disable the batch job and recreate it with a smaller number of records.",
            "B": "Check the asynchronous job monitoring page to view the job status and logs.",
            "C": "Check the debug logs for the batch job.",
            "D": "Decrease the batch size to reduce the load on the system."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>故障排查第一步：<strong>查看状态</strong>。<br>✅ <strong>B (Apex Jobs 页面)</strong>: 可以看到 Batch Job 的总体状态 (Processing, Failed, Aborted)、进度、失败原因 (Status Detail) 等关键信息。<br>这是诊断异步任务问题的首要入口。<br>❌ A/D: 是可能的解决方案，但不是排查的第一步。<br>❌ C: Debug Logs 需要提前设置 Trace Flag 才能捕获，不一定总是有日志。"
    },
    {
        "id": 386,
        "title": "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a master-detail relationship with the standard Account object. Based on some internal discussions, the UC administrator tried to change the master-detail relationship to a lookup relationship, but was not able to do so. What is a possible reason that this change was not permitted?",
        "code": "",
        "options": {
            "A": "The organization-wide default for the Vendor object is Public Read/Write.",
            "B": "The Account object does not allow changing a field type for a custom field.",
            "C": "Some of the Vendor records have null for the Account field.",
            "D": "The Account object has a roll-up summary field on the Vendor object."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>将 Master-Detail 转换为 Lookup 的限制：<br>✅ <strong>D (Roll-up Summary)</strong>: 如果 Master 对象 (Account) 上存在基于 Detail 对象 (Vendor) 的 <strong>Roll-up Summary 字段</strong>，则无法转换关系类型。<br>必须先删除这些 Roll-up 字段。<br>❌ C: Master-Detail 字段本身就不能为 Null (必填)，所以这不是阻碍转换的原因 (转换成 Lookup 后允许为 Null)。"
    },
    {
        "id": 387,
        "title": "Universal Containers tracks customer complaints in a custom object, Complaint__c, that has a Master-Detail relationship to the Contact that made the complaint. Which field is needed to display the date of the most recent Complaint__c on the Contact's detail page?",
        "code": "",
        "options": {
            "A": "Roll-up summary field on Contact of the MAX Created Date of a Complaint__c",
            "B": "Roll-up summary field on Contact of the MIN Created Date of a Complaint__c",
            "C": "Formula field on Contact of the MAX Created Date of a Complaint__c",
            "D": "Formula field on Contact of the MIN Created Date of a Complaint__c"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：Contact 上显示<strong>最近一次 (Most Recent)</strong> 投诉日期。<br>关系：<strong>Master-Detail</strong>。<br>✅ <strong>A (Roll-up Summary MAX)</strong>: 使用 <strong>MAX</strong> 聚合函数统计子记录 (Complaint__c) 的 <strong>CreatedDate</strong>，即可得到最近的日期。<br>❌ C/D: Formula 无法跨记录聚合。<br>❌ B: MIN 是最早一次。"
    },
    {
        "id": 388,
        "title": "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
        "code": "",
        "options": {
            "A": "In the Paused Interviews section of the Apex Flex Queue",
            "B": "On the Paused Flow Interviews related list for a given record",
            "C": "On the Paused and Failed Flow Interviews page under Setup > Process Automation",
            "D": "In the system debug log by filtering on Paused Flow Interview"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>管理暂停和失败 Flow 的标准位置是 <strong>Setup</strong> 菜单中的页面。<br>路径：<strong>Setup > Process Automation > Paused and Failed Flow Interviews</strong>。<br>在这里可以查看、恢复或删除暂停的 Flow 面试。<br>❌ A: Flex Queue 用于 Batch Apex。<br>❌ B: 标准对象无此 Related List (除非自定义)。<br>❌ D: Debug Log 不管理暂停状态。"
    },
    {
        "id": 389,
        "title": "A large corporation stores Orders and Line Items in Salesforce for different lines of business. Users are allowed to see Orders across the entire organization, but, for security purposes, should only be able to see the Line Items for Orders in their line of business. Which type of relationship should be used between Line Items and Orders?",
        "code": "",
        "options": {
            "A": "Lookup",
            "B": "Direct Lookup",
            "C": "Indirect Lookup",
            "D": "Master-Detail"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>独立控制子对象的可见性</strong> (父可见，子不一定可见)。<br>✅ <strong>A (Lookup)</strong>: Lookup 关系允许子对象拥有独立的共享设置 (OWD/Sharing Rules)。可以将 Line Item 设为 Private，然后通过共享规则按业务线分配权限。<br>❌ D: Master-Detail 强制继承父记录权限 (Controlled by Parent)，如果能看 Order，就一定能看 Line Item，不符合需求。"
    },
    {
        "id": 390,
        "title": "What can be easily developed using the Lightning Component framework?",
        "code": "",
        "options": {
            "A": "Salesforce integrations",
            "B": "Lightning Pages",
            "C": "Customized JavaScript buttons",
            "D": "Salesforce Classic user interface pages"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Lightning Component Framework (Aura/LWC) 的主要用途是构建 <strong>Lightning Pages (B)</strong> 和 Lightning Apps。<br>它们可以在 Lightning App Builder 中拖拽使用，构建 Home Page, Record Page, App Page 等。<br>❌ A: 集成通常指后端 API。<br>❌ C: JS Button 是 Classic 技术。<br>❌ D: Classic UI 主要用 Visualforce。"
    },
    {
        "id": 391,
        "title": "A developer wrote Apex code that calls out to an external system using REST API. How should a developer write the test to prove the code is working as intended?",
        "code": "",
        "options": {
            "A": "Write a class that extends WebServiceMock.",
            "B": "Write a class that implements HTTPCalloutMock.",
            "C": "Write a class that extends HTTPCalloutMock.",
            "D": "Write a class that implements WebServiceMock."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>测试 HTTP Callout 的标准做法是实现 <code>HttpCalloutMock</code> 接口。<br>必须使用 <code>implements</code> 关键字。<br>❌ A/D: <code>WebServiceMock</code> 用于 SOAP。<br>❌ C: 接口不能 <code>extends</code>。"
    },
    {
        "id": 392,
        "title": "The OrderHelper class is a utility class that contains business logic for processing orders. A developer needs to create a constant named DELIVERY_MULTIPLIER with a value of 4.15. The value of the constant should not change at any time in the code. How should the developer declare the DELIVERY_MULTIPLIER constant to meet the business objectives?",
        "code": "",
        "options": {
            "A": "constant decimal DELIVERY_MULTIPLIER = 4.15;",
            "B": "static final decimal DELIVERY_MULTIPLIER = 4.15;",
            "C": "decimal DELIVERY_MULTIPLIER = 4.15;",
            "D": "static decimal DELIVERY_MULTIPLIER = 4.15;"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Apex 中定义<strong>类常量</strong>的正确语法是：<code>static final</code>。<br><code>static</code>: 属于类，不属于实例。<br><code>final</code>: 不可修改。<br>❌ A: <code>constant</code> 不是关键字。<br>❌ C/D: 缺少 <code>final</code>，值可变。"
    },
    {
        "id": 393,
        "title": "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using Apex code. What would be the best solution for this requirement?",
        "code": "",
        "options": {
            "A": "Use a Process Builder to validate the email address and display an error message if it is invalid",
            "B": "Use a trigger on the Lead object to validate the email address and display an error message if it is invalid",
            "C": "Submit a REST API Callout with a JSON payload and validate the fields on a third-party system",
            "D": "Create a time-based workflow rule that updates the email address if it is invalid"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Additional layer of validation using Apex (用 Apex 增加校验)</strong>。<br>✅ <strong>B (Trigger)</strong>: 在 <code>before insert/update</code> 中检查格式，并使用 <code>addError()</code> 阻止保存。<br>❌ A: Process Builder 无法显示同步错误消息。<br>❌ C: Callout 过于复杂且通常是异步的。<br>❌ D: 事后处理，无法阻止保存。"
    },
    {
        "id": 394,
        "title": "What is a benefit of developing applications in a multi-tenant environment?",
        "code": "",
        "options": {
            "A": "Enforced unit testing and code coverage best practices",
            "B": "Access to predefined computing resources",
            "C": "Unlimited processing power and memory",
            "D": "Preconfigured storage for big data"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>多租户环境 (Multi-tenancy) 意味着所有租户共享基础设施。<br>优势之一是租户无需自行购买硬件，而是直接<strong>访问平台提供的、预定义好的计算资源 (Computing Resources)</strong>。<br>❌ C: 资源受 Governor Limits 限制，绝非无限。<br>❌ A: 虽有强制要求，但这更多是限制而非环境本身的\"好处\"。"
    },
    {
        "id": 395,
        "title": "A developer is alerted to an issue with a custom Apex trigger that is causing records to be duplicated. What is the most appropriate debugging approach to troubleshoot the issue?",
        "code": "",
        "options": {
            "A": "Use the Apex Interactive Debugger to step through the code and identify the issue.",
            "B": "Review the Historical Event logs to identify the source of the issue.",
            "C": "Add System.debug statements to the code to track the execution flow and identify the issue.",
            "D": "Disable the trigger in production and test to see if the issue still occurs."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>最通用、成本最低的调试方法是使用 <strong>System.debug()</strong> 并检查 <strong>Debug Logs</strong>。<br>这可以在 Sandbox 中重现问题时追踪执行流。<br>❌ A: Interactive Debugger 需要额外 License 且配置复杂。<br>❌ D: 在生产环境禁用功能是高风险操作。<br>❌ B: Event Logs 不包含代码执行细节。"
    },
    {
        "id": 396,
        "title": "A developer creates a custom exception as shown below: public class ParityException extends Exception {} What are two ways the developer can fire the exception in Apex? (Choose two.)",
        "code": "",
        "options": {
            "A": "throw new ParityException('parity does not match');",
            "B": "new ParityException('parity does not match');",
            "C": "new ParityException();",
            "D": "throw new ParityException();"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>抛出异常必须使用关键字 <strong>throw</strong>。<br>✅ <strong>A</strong>: 抛出带消息的异常。<br>✅ <strong>D</strong>: 抛出无消息的异常。<br>❌ B/C: 仅仅是实例化对象，并没有抛出。"
    },
    {
        "id": 397,
        "title": "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage. Which two strategies can a developer use to accomplish this? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use a before-save Apex trigger.",
            "B": "Use a validation rule.",
            "C": "Use an automatically launched Approval Process.",
            "D": "Use an auto-response rule."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>阻止记录编辑的方法：<br>✅ <strong>B (Validation Rule)</strong>: <code>AND(ISPICKVAL(StageName, 'Closed Won'), NOT($Permission.Override))</code>。最简单。<br>✅ <strong>A (Trigger)</strong>: 在 <code>before update</code> 中检查状态并调用 <code>addError()</code>。<br>❌ C: 审批流主要用于审批，虽然锁定记录是副作用，但通常不用来做单纯的状态锁定。<br>❌ D: 自动响应规则用于发邮件。"
    },
    {
        "id": 398,
        "title": "A developer creates a Lightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations. In this implementation scenario, which two options are part of the Controller according to the MVC architecture? (Choose two.)",
        "code": "",
        "options": {
            "A": "HTML file",
            "B": "Apex class",
            "C": "XML file",
            "D": "JavaScript file"
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>在 LWC 的 MVC 架构中：<br>Model: Salesforce Data (SObjects).<br>View: <strong>HTML</strong> (A is View).<br>Controller:<br>1. <strong>Client-side Controller (D)</strong>: JavaScript 文件，处理事件和 UI 逻辑。<br>2. <strong>Server-side Controller (B)</strong>: Apex 类，处理后端业务逻辑。<br>❌ C: XML 是配置。"
    },
    {
        "id": 399,
        "title": "Consider the following code snippet for a Visualforce page that is launched using a Custom Button on the Account detail page layout. When the Save button is pressed the developer must perform a complex validation that involves multiple objects and, upon success, redirect the user to another Visualforce page. What can the developer use to meet this business requirement?",
        "code": "<apex:page standardController=\"Account\">\n  <apex:commandButton action=\"{!save}\" value=\"Save\"/>\n</apex:page>",
        "options": {
            "A": "Apex trigger",
            "B": "Validation rule",
            "C": "Custom controller",
            "D": "Controller extension"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Extend Standard Behavior (扩展标准行为)</strong>。<br>页面使用了 <code>standardController=\"Account\"</code>，要增加自定义逻辑 (复杂校验 + 重定向)，必须使用 <strong>Controller Extension</strong>。<br>Extension 可以重写 <code>save()</code> 方法，执行校验，并返回 <code>PageReference</code> 进行重定向。<br>❌ C: Custom Controller 会替换掉标准控制器，导致丢失标准功能。<br>❌ A/B: 无法控制页面重定向。"
    },
    {
        "id": 400,
        "title": "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
        "code": "",
        "options": {
            "A": "Database.insert(records, false)",
            "B": "insert records",
            "C": "insert (records, false)",
            "D": "Database.insert(records, true)"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>允许<strong>部分成功 (Partial Success)</strong> 的 DML 语法是：<br><code>Database.insert(records, false);</code><br>其中第二个参数 <code>allOrNone</code> 设为 <strong>false</strong>。<br>❌ B/D: 均为全有或全无模式 (只要一条失败就全部回滚)。<br>❌ C: 语法错误。"
    },
    {
        "id": 401,
        "title": "A software company is using Salesforce to track the companies they sell their software to in the Account object. They also use Salesforce to track bugs in their software with a custom object, Bug__c. As part of a process improvement initiative, they want to be able to report on which companies have reported which bugs. Each company should be able to report multiple bugs. Bugs can also be reported by multiple companies. What is needed to allow this reporting?",
        "code": "",
        "options": {
            "A": "Master-detail field on Bug__c to Account",
            "B": "Lookup field on Bug__c to Account",
            "C": "Junction object between Bug__c and Account",
            "D": "Roll-up summary field of Bug__c on Account"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>需求核心：<strong>Many-to-Many Relationship (多对多关系)</strong>。<br>一个 Account 对应多个 Bug；一个 Bug 对应多个 Account。<br>在 Salesforce 中，实现多对多关系的唯一标准方式是使用 <strong>Junction Object (连接对象)</strong>。<br>该对象包含两个 Master-Detail 字段，分别指向 Account 和 Bug__c。<br>❌ A/B: 都是一对多关系。<br>❌ D: Roll-up 只能用于 Master-Detail。"
    },
    {
        "id": 402,
        "title": "What are two benefits of using declarative customizations over code? (Choose two.)",
        "code": "",
        "options": {
            "A": "Declarative customizations cannot generate runtime errors.",
            "B": "Declarative customizations generally require less maintenance.",
            "C": "Declarative customizations automatically generate test classes.",
            "D": "Declarative customizations automatically update with each Salesforce release."
        },
        "correct": "BD",
        "explanation": "<strong>✅ Correct Answer: B & D</strong><br><br><strong>🧠 解析：</strong><br>Declarative (Click not Code) 的优势：<br>✅ <strong>B</strong>: <strong>Less Maintenance (更少维护)</strong>，无需像代码那样管理测试覆盖率和复杂的逻辑更新。<br>✅ <strong>D</strong>: <strong>Auto Update (自动升级)</strong>，Salesforce 负责平台升级的兼容性，不用担心 API 版本废弃导致功能失效。<br>❌ A: Flow 或 Validation Rule 依然可能抛出运行时错误。<br>❌ C: 不会生成测试类 (且本身不需要测试覆盖率)。"
    },
    {
        "id": 403,
        "title": "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users. Which three things should the developer do to satisfy these requirements? (Choose three.)",
        "code": "",
        "options": {
            "A": "Create a Lightning web component.",
            "B": "Add a Dynamic Action to the Account Record Page.",
            "C": "Create a Dynamic Form.",
            "D": "Create a Custom Permission for the users.",
            "E": "Add a Dynamic Action to the Users’ assigned Page Layouts."
        },
        "correct": "ABD",
        "explanation": "<strong>✅ Correct Answer: A, B & D</strong><br><br><strong>🧠 解析：</strong><br>需求拆解：<br>1. <strong>Custom Form (自定义表单)</strong> + <strong>Create Record (创建记录)</strong> + <strong>Dynamic Fields (动态字段)</strong> -> 需要 <strong>LWC (A)</strong>。<br>2. <strong>Small Group Only (仅限部分用户)</strong> -> 使用 <strong>Custom Permission (D)</strong> 来标识这部分用户。<br>3. <strong>Availability (入口控制)</strong> -> 在 Account 页面使用 <strong>Dynamic Action (B)</strong>，并配置基于 Custom Permission 的可见性规则。<br>❌ C: Dynamic Form 主要用于显示/编辑当前记录字段，不适合创建另一个对象的复杂表单。<br>❌ E: Dynamic Action 是加在 Lightning Page 上的，不是 Page Layout。"
    },
    {
        "id": 404,
        "title": "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have already created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation. What would be the best solution for this requirement?",
        "code": "",
        "options": {
            "A": "Use an Approval Process to enforce the completion of a valid email address using an outbound message action.",
            "B": "Submit a REST API Callout with a JSON payload and validate the fields on a third-party system.",
            "C": "Use a custom Lightning Web Component to make a callout to validate the fields on a third-party system.",
            "D": "Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Additional Validation (额外校验)</strong> + <strong>Automation (自动化)</strong>。<br>✅ <strong>D (Before-save Trigger)</strong>: 这是在保存前进行复杂逻辑校验的标准代码方式。Trigger 可以执行比 Validation Rule 更复杂的逻辑 (如正则、跨对象检查)，并使用 <code>addError()</code> 阻止保存。<br>❌ A: 审批流主要用于批准，不适合即时数据校验。<br>❌ B/C: 涉及 Callout，通常是异步的或 UI 层的，无法作为底层的强制数据库校验。"
    },
    {
        "id": 405,
        "title": "A developer is tasked with building a custom Lightning Web Component to collect Contact information. The form will be shared among many different types of users in the org. There are security requirements that only certain fields should be edited and viewed by certain groups of users. What should the developer use in their Lightning Web Component to support the security requirements?",
        "code": "",
        "options": {
            "A": "aura-input-field",
            "B": "ui-input-field",
            "C": "force-input-field",
            "D": "lightning-input-field"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>LWC 中处理表单数据的标准组件是 <strong><code>lightning-record-edit-form</code></strong> 配合 <strong><code>lightning-input-field</code></strong>。<br>✅ <strong>D (lightning-input-field)</strong>: 自动遵循 Salesforce 的 <strong>Field-Level Security (FLS)</strong> 和元数据配置。如果用户没权限，字段会自动隐藏或只读。<br>❌ A/B/C: 这些组件名称不存在或属于 Aura/旧框架。"
    },
    {
        "id": 406,
        "title": "What is a consideration for running a flow in debug mode?",
        "code": "",
        "options": {
            "A": "Clicking Pause allows an element to be replaced in the flow.",
            "B": "DML operations will be rolled back when the debugging ends.",
            "C": "Callouts to external systems are not executed when debugging a flow.",
            "D": "When debugging a schedule-triggered flow, the flow starts only for one record."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>调试 <strong>Schedule-Triggered Flow</strong> 的特性：<br>由于它是批量运行的，调试时不可能跑全量数据。<br>因此系统会让你选择一条记录，Flow <strong>只针对这一条记录运行 (Starts only for one record)</strong>。<br>❌ B: Debug 模式下 DML 是真实的，<strong>不会回滚</strong> (除非手动选了 Rollback 选项，但这不是默认行为，且题目问的是一般 consideration)。"
    },
    {
        "id": 407,
        "title": "Universal Containers wants to automatically assign new cases to the appropriate support representative based on the case origin. What is the best solution to assign the case to the appropriate support representative?",
        "code": "",
        "options": {
            "A": "Use a formula field on the Case object.",
            "B": "Use an Assignment Flow element.",
            "C": "Use a validation rule on the Case object.",
            "D": "Use a trigger on the Case object."
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Case Assignment (分配)</strong>。<br>首选工具是 <strong>Flow (Record-Triggered Flow)</strong>。<br>✅ <strong>B (Assignment Element in Flow)</strong>: 在 Flow 中可以根据 Case Origin 将 Case 分配给特定用户或队列。<br>❌ A: 公式字段只读，不能修改 Owner。<br>❌ C: 验证规则用于校验。<br>❌ D: Trigger 是代码，维护成本高。"
    },
    {
        "id": 408,
        "title": "Which two operations affect the number of times a trigger can fire? (Choose two.)",
        "code": "",
        "options": {
            "A": "Criteria-based sharing calculations",
            "B": "After-save record-triggered flow",
            "C": "Roll-up summary fields",
            "D": "Email messages"
        },
        "correct": "BC",
        "explanation": "<strong>✅ Correct Answer: B & C</strong><br><br><strong>🧠 解析：</strong><br>导致 Trigger 重复触发 (Recursion) 的原因：<br>✅ <strong>B (After-save Flow)</strong>: 如果 Flow 执行了 Update 操作，会再次触发 Trigger。<br>✅ <strong>C (Roll-up Summary)</strong>: 子记录的变动会导致父记录的 Roll-up 字段更新，从而触发父对象的 Update Trigger。<br>❌ A/D: 不会引起记录更新。"
    },
    {
        "id": 409,
        "title": "A Developer Edition org has five existing Accounts. A developer wants to add 10 more Accounts for testing purposes. ... How many total Accounts will be in the org after this code is executed?",
        "code": "Account myAccount = new Account(Name = 'MyAccount');\ninsert myAccount;\nInteger x = 1;\nList<Account> newAccounts = new List<Account>();\ndo {\n  Account acct = new Account(Name = 'New Account ' + x++);\n  newAccounts.add(acct);\n} while (x < 10);",
        "options": {
            "A": "5",
            "B": "6",
            "C": "10",
            "D": "15"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>1. 初始：5 条。<br>2. <code>insert myAccount;</code> -> 新增 1 条 (总数 6)。<br>3. <code>do-while</code> 循环：创建了 9 个 Account 对象并添加到 List 中 (x 从 1 到 9)。<br>4. <strong>关键点</strong>：代码中<strong>没有执行 <code>insert newAccounts;</code></strong>。<br>因此，循环中创建的 9 条记录并未保存到数据库。<br>最终总数：5 (原有) + 1 (myAccount) = <strong>6</strong>。"
    },
    {
        "id": 410,
        "title": "What are two benefits of using External IDs? (Choose two.)",
        "code": "",
        "options": {
            "A": "An External ID is indexed and can improve the performance of SOQL queries.",
            "B": "An External ID can be a formula field to help create a unique key from two fields in Salesforce.",
            "C": "An External ID field can be used to reference an ID from another external system.",
            "D": "An External ID can be used with Salesforce Mobile to make external data visible."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>External ID 特性：<br>✅ <strong>A (Indexed)</strong>: 系统会自动为 External ID 字段建立<strong>自定义索引</strong>，提升查询效率。<br>✅ <strong>C (Integration)</strong>: 专为存储<strong>外部系统主键</strong>设计，支持 Upsert 操作。<br>❌ B: Formula 不能设为 External ID。<br>❌ D: 与 Mobile 显示无关。"
    },
    {
        "id": 411,
        "title": "What are two considerations for deploying from a sandbox to production? (Choose two.)",
        "code": "",
        "options": {
            "A": "All triggers must have at least one line of test coverage.",
            "B": "Should deploy during business hours to ensure feedback can be quickly addressed.",
            "C": "At least 75% of Apex code must be covered by unit tests.",
            "D": "Unit tests must have calls to the System.assert method."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>部署到生产环境 (Production) 的硬性要求：<br>✅ <strong>C</strong>: Org-wide Apex Code Coverage >= 75%。<br>✅ <strong>A</strong>: 每一个 Apex Trigger 都必须有 >0% 的覆盖率 (至少执行一行)。<br>❌ B: 通常建议在<strong>非工作时间</strong>部署以减少对用户的影响。<br>❌ D: 虽然是最佳实践，但不是部署的硬性阻止条件。"
    },
    {
        "id": 412,
        "title": "A developer at AW Computing is tasked to create the supporting test class for a programmatic customization that leverages records stored within the custom object Pricing_Structure__c. ... Which two approaches can the developer use to ensure Pricing_Structure__c records are available when the test class is executed? (Choose two.)",
        "code": "",
        "options": {
            "A": "Use the Test.loadData method.",
            "B": "Use the @isTest(SeeAllData=true) annotation.",
            "C": "Use a Test Data Factory class.",
            "D": "Use without sharing on the class declaration."
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>创建大量测试数据的标准方法：<br>✅ <strong>A (Test.loadData)</strong>: 从 Static Resource CSV 文件加载大量数据，最适合本题场景 (500+ records)。<br>✅ <strong>C (Data Factory)</strong>: 编写专门的 Utility Class 来生成测试数据，是可维护性最高的做法。<br>❌ B: 依赖 Org 真实数据是不可靠的 (反模式)。<br>❌ D: 与数据创建无关。"
    },
    {
        "id": 413,
        "title": "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. Which Visualforce feature supports this requirement?",
        "code": "",
        "options": {
            "A": "Standard Controller with Custom List Controller extension",
            "B": "Custom List Controller with recordSetVar page attribute",
            "C": "Standard Controller and the recordSetVar page attribute",
            "D": "Controller Extension and <apex:page> tag"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>要在 Visualforce 中处理<strong>列表视图 (List View)</strong> 选中的多条记录，必须使用 <strong>Standard List Controller</strong>。<br>启用方式是在 <code>&lt;apex:page&gt;</code> 标签中同时指定：<br>1. <code>standardController=\"ObjectName\"</code><br>2. <code>recordSetVar=\"varName\"</code><br>这会自动将选中的记录 ID 集合传入页面。<br>❌ A/B: 必须基于 Standard Controller + recordSetVar 才能成为 List Button 的目标页面。"
    },
    {
        "id": 414,
        "title": "A developer must perform a complex SOQL query that joins two objects in a Lightning component. How can the Lightning component execute the query?",
        "code": "",
        "options": {
            "A": "Create a Flow to execute the query and invoke from the Lightning component.",
            "B": "Use the Salesforce Streaming API to perform the SOQL query.",
            "C": "Write the query in a custom Lightning Web Component wrapper and invoke from the Lightning component.",
            "D": "Invoke an Apex class with the method annotated as @AuraEnabled to perform the query."
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Lightning Component (LWC/Aura) <strong>不能直接执行 SOQL</strong>。<br>必须通过调用 <strong>Apex 方法</strong> 来执行查询并返回结果。<br>该 Apex 方法必须使用 <strong><code>@AuraEnabled</code></strong> 注解。<br>❌ A: Flow 不适合做复杂查询接口。<br>❌ B: Streaming API 用于事件推送。<br>❌ C: 前端无此功能。"
    },
    {
        "id": 415,
        "title": "What are two characteristics related to formulas? (Choose two.)",
        "code": "",
        "options": {
            "A": "Fields that are used in a formula field can be deleted or edited without editing the formula.",
            "B": "Formulas can reference themselves.",
            "C": "Formulas can reference values in related objects.",
            "D": "Formulas are calculated at runtime and are not stored in the database."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>Formula Field 特性：<br>✅ <strong>D</strong>: 公式值不存储在数据库中，而是每次查询/显示时<strong>动态计算 (Calculated at Runtime)</strong>。<br>✅ <strong>C</strong>: 可以跨对象引用 (Cross-object formula)，如 <code>Account.Owner.Name</code>。<br>❌ A: 引用字段被占用，不能直接删除。<br>❌ B: 不能自引用 (循环依赖)。"
    },
    {
        "id": 416,
        "title": "Universal Containers wants to assess the advantages of declarative development versus programmatic customization for specific use cases in its Salesforce implementation. What are two characteristics of declarative development over programmatic customization? (Choose two.)",
        "code": "",
        "options": {
            "A": "Declarative development does not require Apex test classes.",
            "B": "Declarative development can be done using the Setup menu.",
            "C": "Declarative code logic does not require maintenance or review.",
            "D": "Declarative development has higher design limits and query limits."
        },
        "correct": "AB",
        "explanation": "<strong>✅ Correct Answer: A & B</strong><br><br><strong>🧠 解析：</strong><br>声明式开发 (Clicks) 的特点：<br>✅ <strong>A</strong>: 无需编写和维护测试类 (系统负责)。<br>✅ <strong>B</strong>: 通过 <strong>Setup 菜单</strong> 进行配置 (UI 操作)。<br>❌ C: 依然需要维护。<br>❌ D: 限制通常更严格 (如 Flow 的 CPU/Query 限制与 Apex 共享甚至更低)。"
    },
    {
        "id": 417,
        "title": "Managers at Universal Containers want to ensure that only decommissioned containers can be deleted in the system. ... Which two approaches could a developer use to enforce that only Container records with a status of \"Decommissioned\" can be deleted? (Choose two.)",
        "code": "",
        "options": {
            "A": "Apex trigger",
            "B": "After record-triggered flow",
            "C": "Validation rule",
            "D": "Before record-triggered flow"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>阻止删除 (Delete) 的机制只有两种：<br>1. <strong>Apex Trigger (Before Delete)</strong>: 使用 <code>addError()</code>。<br>2. <strong>Flow (Record-Triggered - Before Delete)</strong>: 使用 Custom Error 元素抛出错误。<br>❌ C: Validation Rule <strong>不触发</strong>删除操作。<br>❌ B: After Flow 记录已删，无法阻止。"
    },
    {
        "id": 418,
        "title": "A lead developer creates a virtual class called OrderRequest. ... How can a developer use the OrderRequest class within the CustomerOrder class?",
        "code": "public class CustomerOrder { ... }",
        "options": {
            "A": "@Implements(class=\"OrderRequest\") public class CustomerOrder",
            "B": "public class CustomerOrder extends OrderRequest",
            "C": "public class CustomerOrder implements Order",
            "D": "@Extends(class=\"OrderRequest\") public class CustomerOrder"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Apex 中继承类的语法：<br>使用 <strong><code>extends</code></strong> 关键字。<br><code>public class Child extends Parent</code>。<br>❌ A/D: 注解不存在。<br>❌ C: <code>implements</code> 用于接口。"
    },
    {
        "id": 419,
        "title": "A credit card company needs to implement the functionality for a service agent to process damaged or stolen credit cards. When the customers call in, the service agent must gather many pieces of information. A developer is tasked to implement this functionality. What should the developer use to satisfy this requirement in the most efficient manner?",
        "code": "",
        "options": {
            "A": "Screen-based flow",
            "B": "Approval process",
            "C": "Lightning Component",
            "D": "Apex trigger"
        },
        "correct": "A",
        "explanation": "<strong>✅ Correct Answer: A</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Gather Information (收集信息)</strong> + <strong>Agent Process (客服流程)</strong>。<br>✅ <strong>A (Screen Flow)</strong>: 最适合构建向导式、分步骤的数据采集界面，无需编写代码，开发效率最高。<br>❌ C: LWC 需要代码开发，不如 Flow 高效。<br>❌ B/D: 无 UI，无法收集信息。"
    },
    {
        "id": 420,
        "title": "Which Lightning Web Component custom event property settings enable the event to bubble up the containment hierarchy and cross the Shadow DOM boundary?",
        "code": "",
        "options": {
            "A": "bubbles: true, composed: false",
            "B": "bubbles: true, composed: true",
            "C": "bubbles: false, composed: false",
            "D": "bubbles: false, composed: true"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>LWC 事件传播机制：<br>1. <strong>bubbles: true</strong> -> 允许事件向上冒泡 (Bubble up)。<br>2. <strong>composed: true</strong> -> 允许事件跨越 Shadow DOM 边界 (Cross Shadow Boundary)。<br>要同时满足这两个条件，必须两个都设为 <strong>true</strong>。<br>❌ A/C/D: 只要有一个是 false，就无法完成全链路冒泡。"
    },
    {
        "id": 421,
        "title": "A developer created a trigger on a custom object. This custom object also has some dependent picklists. According to the order of execution rules, which step happens first?",
        "code": "",
        "options": {
            "A": "System validation is run for maximum field lengths",
            "B": "The original record is loaded from the database",
            "C": "Old values are overwritten with the new record values",
            "D": "JavaScript validation is run in the browser"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>Salesforce <strong>Order of Execution (执行顺序)</strong> 的前几步：<br>1. <strong>Load Original Record (加载原始记录)</strong> (B)。<br>2. <strong>Overwrite Old Values (覆盖旧值)</strong> (C)。<br>3. <strong>System Validation (系统校验)</strong> (A)。<br>JavaScript (D) 是前端行为，早于服务器端执行。<br>❌ A/C: 都在 B 之后执行。"
    },
    {
        "id": 422,
        "title": "Universal Containers decided to transition from Classic to Lightning Experience. They asked a developer to replace a JavaScript button that was being used to create records with prepopulated values. What can the developer use to accomplish this?",
        "code": "",
        "options": {
            "A": "Record-triggered flows",
            "B": "Apex triggers",
            "C": "Validation rules",
            "D": "Quick Actions"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>在 Lightning Experience 中替代 <strong>JS Button (Create Record with Default Values)</strong> 的最佳实践是 <strong>Quick Actions (快速操作)</strong>。<br>Quick Action 支持定义 <strong>Predefined Field Values (预定义字段值)</strong>，无需编写代码即可实现带默认值的记录创建。<br>❌ A/B/C: 这些是后台自动化或校验工具，不是前端按钮替代品。"
    },
    {
        "id": 423,
        "title": "A developer needs to make a custom Lightning Web Component available in the Salesforce Classic user interface. Which approach can be used to accomplish this?",
        "code": "",
        "options": {
            "A": "Wrap the Lightning Web Component in an Aura Component and surface the Aura Component as a Visualforce tab",
            "B": "Embed the Lightning Web Component in a Visualforce Component and add directly to the page layout",
            "C": "Use the Lightning Out JavaScript library to embed the Lightning Web Component in a Visualforce page and add to the page layout",
            "D": "Use a Visualforce page with a custom controller to invoke the Lightning Web Component using a call to an Apex method"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>LWC 在 Classic 中使用的唯一途径是通过 <strong>Lightning Out</strong>。<br>具体步骤：<br>1. 创建一个 <strong>Lightning App</strong> (Aura) 并声明依赖 (extends=\"ltng:outApp\")。<br>2. 创建一个 <strong>Visualforce Page</strong>，引入 Lightning Out 库。<br>3. 在 VF 页面中使用 <code>$Lightning.use()</code> 和 <code>$Lightning.createComponent()</code> 动态创建 LWC。<br>❌ A/B/D: 描述不准确或不可行。"
    },
    {
        "id": 424,
        "title": "Which two characteristics are true for Lightning Web Component custom events? (Choose two.)",
        "code": "",
        "options": {
            "A": "Data may be passed in the payload of a custom event using @wire decorated properties.",
            "B": "By default a custom event only propagates to its immediate container and to its immediate child component.",
            "C": "By default a custom event only propagates to its immediate container.",
            "D": "Data may be passed in the payload of a custom event using a property called detail."
        },
        "correct": "CD",
        "explanation": "<strong>✅ Correct Answer: C & D</strong><br><br><strong>🧠 解析：</strong><br>LWC Custom Event 特性：<br>✅ <strong>C (Default Propagation)</strong>: 默认 <code>bubbles: false</code>，事件只传递给直接父组件 (Host Element)，不向上冒泡。<br>✅ <strong>D (Payload)</strong>: 数据必须放在 <code>detail</code> 属性中传递。<br>❌ B: 不会传递给 Child。<br>❌ A: @wire 与事件数据传递无关。"
    },
    {
        "id": 425,
        "title": "As part of new feature development, a developer is asked to build a responsive application capable of responding to touch events, that will be executed on stateful clients. Which two technologies are built on a framework that fully supports the business requirement? (Choose two.)",
        "code": "",
        "options": {
            "A": "Aura Components",
            "B": "Visualforce Components",
            "C": "Lightning Web Components",
            "D": "Visualforce Pages"
        },
        "correct": "AC",
        "explanation": "<strong>✅ Correct Answer: A & C</strong><br><br><strong>🧠 解析：</strong><br>关键词：<strong>Responsive (响应式)</strong>, <strong>Touch events (触摸事件)</strong>, <strong>Stateful clients (有状态客户端)</strong>。<br>这些都是现代单页应用 (SPA) 框架的特征。<br>✅ <strong>A (Aura)</strong> 和 <strong>C (LWC)</strong> 都是基于 Lightning Component Framework，专为移动端优先、响应式设计打造。<br>❌ B/D: Visualforce 是传统的服务器端渲染 (Stateless Server)，不具备原生触摸支持和客户端状态管理能力。"
    },
    {
        "id": 426,
        "title": "While developing an Apex class with custom search functionality that will be launched from a Lightning Web Component, how can the developer ensure only records accessible to the currently logged-in user are displayed?",
        "code": "",
        "options": {
            "A": "Use the WITH SECURITY_ENFORCED clause within the SOQL.",
            "B": "Use the inherited sharing keyword.",
            "C": "Use the with sharing keyword.",
            "D": "Use the without sharing keyword."
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>确保<strong>记录级访问权限 (Record-Level Security)</strong> 的标准方法是：<br>在 Apex 类定义时使用 <strong><code>with sharing</code></strong> 关键字。<br>这会强制 SOQL 查询遵守当前用户的 OWD、Sharing Rules 和 Role Hierarchy。<br>❌ A: <code>WITH SECURITY_ENFORCED</code> 检查字段和对象权限 (FLS/CRUD)，不完全等同于共享规则。<br>❌ B: <code>inherited sharing</code> 依赖调用者，若 LWC 直接调用可能不明确。<br>❌ D: 忽略权限。"
    },
    {
        "id": 427,
        "title": "Which three data types can a SOQL query return? (Choose three.)",
        "code": "",
        "options": {
            "A": "List",
            "B": "Long",
            "C": "Integer",
            "D": "sObject",
            "E": "Double"
        },
        "correct": "ACD",
        "explanation": "<strong>✅ Correct Answer: A, C & D</strong><br><br><strong>🧠 解析：</strong><br>SOQL 查询结果类型：<br>✅ <strong>A (List)</strong>: 标准返回，如 <code>List&lt;Account&gt;</code>。<br>✅ <strong>D (sObject)</strong>: 单条返回 (需自行保证只查到一条)，如 <code>Account a = [SELECT...];</code>。<br>✅ <strong>C (Integer)</strong>: 聚合查询 <code>COUNT()</code> 返回 Integer。<br>❌ B/E: <code>SUM()</code>/<code>AVG()</code> 返回的是 <code>AggregateResult</code> 对象，需要从中提取 Decimal/Double/Long，而不是直接返回基础类型。"
    },
    {
        "id": 428,
        "title": "Developers at Universal Containers (UC) use version control to share their code changes ... They decide to set up Continuous Integration (CI). What should the UC development team use to automatically run tests as part of their CI process?",
        "code": "",
        "options": {
            "A": "Force.com Toolkit",
            "B": "Salesforce CLI",
            "C": "Visual Studio Code",
            "D": "Developer Console"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br><strong>Continuous Integration (CI)</strong> 核心在于自动化脚本。<br><strong>Salesforce CLI (sfdx)</strong> 是专为自动化设计的命令行工具，可以轻松集成到 Jenkins, CircleCI, GitHub Actions 等 CI 平台中，执行部署和测试命令 (<code>sfdx force:apex:test:run</code>)。<br>❌ A/C/D: 均为开发工具或IDE，不适合 CI 服务器环境。"
    },
    {
        "id": 429,
        "title": "A company has a custom object, Order__c, that has a required, unique external ID field called Order_Number__c. Which statement should be used to perform the DML necessary to insert new records and update existing records in a list of Order__c records using the external ID field?",
        "code": "",
        "options": {
            "A": "merge orders Order_Number__c;",
            "B": "merge orders;",
            "C": "upsert orders Order_Number__c;",
            "D": "upsert orders;"
        },
        "correct": "C",
        "explanation": "<strong>✅ Correct Answer: C</strong><br><br><strong>🧠 解析：</strong><br>使用 <strong>Upsert</strong> 基于外部 ID 更新/插入数据的语法：<br><code>upsert listName ExternalIdField;</code><br>必须显式指定作为匹配键的 <strong>External ID 字段名</strong>。<br>❌ A/B: merge 用于合并记录，不支持自定义对象。<br>❌ D: 未指定字段，系统可能无法确定使用哪个 External ID (如果有多个)。"
    },
    {
        "id": 430,
        "title": "What is the value of the Trigger.old context variable in a before insert trigger?",
        "code": "",
        "options": {
            "A": "A list of newly created sObjects without IDs",
            "B": "null",
            "C": "Undefined",
            "D": "An empty list of sObjects"
        },
        "correct": "B",
        "explanation": "<strong>✅ Correct Answer: B</strong><br><br><strong>🧠 解析：</strong><br>在 <strong>Insert</strong> 操作中 (无论是 before 还是 after)，因为记录是全新的，不存在\"旧版本\"。<br>因此，<code>Trigger.old</code> 和 <code>Trigger.oldMap</code> 都是 <strong>null</strong>。<br>❌ A: 这是 Trigger.new。<br>❌ D: 不是空列表，是 null。"
    },
    {
        "id": 431,
        "title": "What are two considerations for running a flow in debug mode? (Choose two.)",
        "code": "",
        "options": {
            "A": "Clicking Pause or executing a Pause element closes the flow and ends debugging",
            "B": "DML operations will be rolled back when the debugging ends",
            "C": "Input variables of type record cannot be passed into the flow",
            "D": "Callouts to external systems are not executed when debugging a flow"
        },
        "correct": "AD",
        "explanation": "<strong>✅ Correct Answer: A & D</strong><br><br><strong>🧠 解析：</strong><br>Flow Debug Mode 特性：<br>✅ <strong>A</strong>: 调试器不支持 <strong>Pause (等待)</strong> 元素，遇到会直接终止调试。<br>✅ <strong>D</strong>: 为了安全，调试模式<strong>屏蔽了 Callout</strong> (防止误操作外部系统)。<br>❌ B: DML 是真实的，<strong>不会回滚</strong>。<br>❌ C: 支持传入 Record 变量。"
    },
    {
        "id": 432,
        "title": "How is a controller and extension specified for a custom object named \"Notice__c\" on a Visualforce page?",
        "code": "",
        "options": {
            "A": "<apex:page=Notice extends=\"myControllerExtension\">",
            "B": "<apex:page controller=\"Notice__c\" extensions=\"myControllerExtension\">",
            "C": "<apex:page controllers=\"Notice__c,myControllerExtension\">",
            "D": "<apex:page standardController=\"Notice__c\" extensions=\"myControllerExtension\">"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>Visualforce 标准控制器 + 扩展的语法：<br>1. <code>standardController=\"ObjectName__c\"</code> (指定对象)。<br>2. <code>extensions=\"ClassName\"</code> (指定 Apex 类)。<br>❌ A/C: 语法错误。<br>❌ B: <code>controller</code> 属性用于自定义 Apex 控制器，不能直接写对象名。"
    },
    {
        "id": 433,
        "title": "A company decides to implement a new process where every time an Opportunity is created, a follow-up Task should be created and assigned to the Opportunity Owner. What is the most efficient way for a developer to implement this?",
        "code": "",
        "options": {
            "A": "Auto-launched flow on Task",
            "B": "Apex trigger on Task",
            "C": "Task actions",
            "D": "Record-triggered flow on Opportunity"
        },
        "correct": "D",
        "explanation": "<strong>✅ Correct Answer: D</strong><br><br><strong>🧠 解析：</strong><br>需求：<strong>Opportunity Created (触发)</strong> -> <strong>Create Task (动作)</strong>。<br>✅ <strong>D (Record-triggered Flow on Opportunity)</strong>: 监听 Opportunity 创建事件，并自动执行创建 Task 的动作。这是最高效、零代码的推荐方案。<br>❌ A/B: 监听对象错了 (应该是监听 Opportunity)。<br>❌ C: Action 需要人工点击。"
    }
];