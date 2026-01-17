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
    }
];