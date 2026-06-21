# SQA Training - a1qa

Batch 6371

[Important things for ENTIRE course](https://app.notion.com/p/Important-things-for-ENTIRE-course-350ba6e0b9f4802aa22fe67b16c58dd2?pvs=21)

### Tasks for today: 28/04/26

- What we are going to learn in this course
    
    VM Machines
    Web Testing Tools
    API Testing
    DB Testing
    Mobile Testing
    Testing tasks and technical tasks will be given
    Final test passing will give more advantage
    
- Introduction to the software testing-[https://youtu.be/Fyx0GUracU0](https://youtu.be/Fyx0GUracU0)
    - Quality - is a degree to which a component, system or process meets specified requirements and/or user/customer needs and expectations (ISTQB)
    - Why is testing Necessary? Humans make mistakes → defect or bug → failure
    - TESTING IS NOT QUALITY
    - Testing improves quality and reduce risks of end users finding defects.
    - Testing is required to meet standards and requirements
    - Testing - process of comparing actual and expected system behavior
    - Quality control - gathering and analyzing defect statistics
    - Quality assurance - set of actions for improving the development process - eg - making audits, consulting, introducing good practice to new developers
        
        ![image.png](067aeb58-d202-4b86-aa71-a6fd9537adf4.png)
        
    - Project is an activity aimed at achieving a specific goals in a fixed timeline using fixed resources
    - The sooner the defect is found, the less costly the bugs are
        
        ![image.png](image.png)
        
    - A software bug is an error, a flaw or a fault in a computer program or system that causes it to produce and incorrect or unexpected result or behave in unintended ways.
        
        ![image.png](image%201.png)
        
        ![image.png](image%202.png)
        
- Defect attributes- [https://youtu.be/_o6chHHTBSM](https://youtu.be/_o6chHHTBSM)
    - Defect creation for in Jira
    - Issue types in Jira -
        - Bug - problem found by tester
        - Improvement - a proposal to improve the system
        - Task - a technical exercise for devs
        - New Feature - new feature introduction
    
    The fields in Jira to be filled:
    
    Priority is for senior devs or PMs to fill. Not me. 
    
    ![image.png](image%203.png)
    
    ![image.png](image%204.png)
    
    ![image.png](image%205.png)
    
    For training only functional errors are there
    
    Left one is good example 
    
    ![image.png](image%206.png)
    
    ![image.png](image%207.png)
    
    ![image.png](image%208.png)
    
    ![image.png](image%209.png)
    
    ![image.png](image%2010.png)
    
    ![image.png](image%2011.png)
    
    ![image.png](image%2012.png)
    
    ![image.png](image%2013.png)
    
    ![image.png](image%2014.png)
    

[Theory] Review the topics:
Site elements -[https://wiki.a1qa.com/pages/viewpage.action?pageId=616765151](https://wiki.a1qa.com/pages/viewpage.action?pageId=616765151)

- Bugs description - [https://wiki.a1qa.com/display/QAE/Defect+description](https://wiki.a1qa.com/display/QAE/Defect+description)
    
    The section may contain the following information:
    
    - Rules for filling fields.
    - Rules for setting criticality.
    - Template for creating defects.
    
    | **Project** | If an issue can be introduced into several projects, then it is necessary to describe the rules by which the project is determined. For example, several teams work on a project, one of which is developing a web application, the other is developing a mobile application. Various projects are used to organize the work of these teams. | **Project** 
    If the issue relates to a web application, then the defect must be submitted to "Project A". 
     If the issue relates to a mobile application, then the defect must be submitted to "Project B". |
    | --- | --- | --- |
    | **Issue Type** | Type of introduced object (bug, task, improvement, etc.). 
    It is necessary to specify what types of issues can be created by the testing team, and what each type means. | **Issue Type** 
    The test team can create the following kinds of issues: 
    Bug - a problem found by a tester (specification mismatch, application crash, etc.) 
     |
    | **Summary** | The name of the module in which it was found can be added to the title of the defect. An environment for which the defect is specific can be added. Also, in the header you can mark defects that are not always reproduced. | **Summary** 
    It is necessary to add the name of the module to each introduced defect. For example, Registration: The user can use an already registered email address. 
    Need to add "Live|" for all defects that were found in the customer's environment. For example, Live|Register: Missing validation message when an invalid password is entered. |
    | **Affects Version/s** | The version in which the problem was found. 
    In addition to the rules by which the version is set, it is worth specifying how and where it can be found. | **Affects Version/s** 
    The tester fills the Affects Version/s field during defect creation, in which he indicates the version of the product where the defect was found.   
    For example, 1.1.706. 
    The current version of the build can be found by clicking on the name of the current user. 
     |
    | **Description** | Most often, the Description field describes the steps to reproduce and the actual result (this field can also describe the preconditions for defect reproduction, and sometimes the expected result). 
    You should also pay attention to formatting. If it is accepted on the project that the words "Steps", "Result" are in bold, then it is worth indicating this. | **Description** 
    The description must include the following information: 
    • Test environment - in the format "OS Version, Browser Name and Version". For example, Windows 10 Enterprise, 64-bit, Google Chrome 68.0.3440.106. 
    • Preconditions - additional actions and settings that must be performed before the defect can be reproduced. 
    • Steps to reproduce a defect. Be sure to specify the username and password of the user for whom the defect is being reproduced. 
    • Result - the current result that the user sees. 
    • Additional information/Notes - for example, a defect is reproduced only for a certain entity, a defect is not always reproduced, etc. 
    Example, 
    **Environment:** 
    Windows 10 Enterprise, 64-bit, Google Chrome 68.0.3440.106 
    **Preconditions:** 
    User 1 must have rights to edit articles.
    User 2 added an article to the News section. 
    **Steps:** 
    1. Login to the portal as User 1 (login/password) 
    2. Go to section News 
    3. Find the news added by User 2 in the preconditions. 
    4. Click edit icon 
    **Actual Result:**  The user sees the message "Insufficient rights to perform this operation." **Expected Result:** Article is opened and should be editable. Please see (Add screenshot of requirements).
    **Additional Information:** This issue is reproduced in all sections. |
    | **Expected Result** | The requirements for describing the expected result are usually the same, most often this field contains a link to the specification or JIRA story. | **Expected result** 
    When describing the expected result, a link to the requirements should be indicated in the format "JIRA Story, AC#X quote from the requirements" 
    For example, According to PROJECTX-1 AC# 1.5, the Register button should be green (RGB #228B22). |
    | **Severity** | It is necessary to specify which field the tester will set (sometimes it is only criticality or priority, and sometimes both). You should also specify: 
    • what levels of Severity are used on the project; 
    • the rules by which each of the levels of criticality is determined; 
    • rules by which criticality can be changed (increased/decreased). 
    The criticality rules used by our company are described *here https://wiki.a1qa.com/display/QAE/Definition+of+severity.* | **Severity** Please find detailed information and definition of severity [here](https://wiki.itransition.com/spaces/QAE/pages/747275060/Definition+of+severity). |
    | **Attachment** | Attached files (screenshots, videos, error logs, etc.). 
    It should describe what rules are used for attachments: 
    • what types of attachments can and should be used; 
    • what should be in the screenshots; 
    • can video be used? 
    • in what formats files should be attached to the defect; 
    • for which defects logs are needed. | **Attachment** 
    Screenshots: 
    A screenshot in .png format must be added to each defect. The address bar must be visible in the screenshot. 
    The problem in the screenshot should be highlighted in red. 
    Video: 
    Video can be used to describe complex problems (for example, show the transition between pages). The video is attached to the defect in .mp4 format. 
    Logs: 
    In case of an application crash, it is necessary to attach logs in .txt format. |
    | **Error Type** | The type of problem that was found. | **Error type** 
    The following error types can be used: 
    • Functional - functional errors. 
    • GUI - errors related to the graphical interface. |
- Definition of severity -[https://wiki.a1qa.com/display/QAE/Definition+of+severity](https://wiki.a1qa.com/display/QAE/Definition+of+severity)
    
    ### Relationship between defect severity and priority
    
    In the Severity field, testers set the criticality of the defect in terms of system functionality.
    
    **Based on the severity level specified in the Severity field, as well as information from other sources, project managers determine the urgency of fixing the defect, i.e. assign a priority in the Priority field.**
    
    The tester fills in the Severity field when introducing a defect into the system. The project manager then reads the defect description and fills in the Priority field.
    
    Criticality does not directly affect the order in which defects are fixed. The order in which fixes are made depends primarily on the priority. Criticality is not the only factor that affects priority. The project manager can set the Resolve immediately priority (fix immediately) to a minor defect, and for a serious defect, select the Low priority value, depending on the requirements of the customer.
    
    #### Defect criticality levels
    
    A detailed description of all values of the Severity field can be found in Table 1 "Severity Levels".
    
    Typically, testing projects use 5 levels of criticality, but the names of these levels may vary depending on the features of the defect management system. For all levels, a clarification is given in which defect management system this level is used. If the same level is named differently in various systems, the names of the levels are given separated by commas.
    
    **Table 1 - Severity Levels**
    
    | 1 | **Critical** (corporate JIRA) | The defect completely blocks the application. It is impossible to continue testing in the presence of such a defect. |
    | --- | --- | --- |
    | 2 | **Major** (corporate JIRA) | The defect partially blocks the operation of the application / one or more parts of the functionality. It is impossible or possibly limited to continue testing in the presence of such a defect. |
    | 3 | **Average** (corporate JIRA) | The defect disrupts the normal operation of one or more application functions but does not prevent further testing. 
    Serious, obvious defect in the user interface. |
    | 4 | **Minor** (corporate JIRA) | Minor functional bug or GUI defect. The fix will slightly improve the behavior or execution of the script. Testing is carried out according to the scenario without any changes. |
    | 5 | **Enhancement** (corporate JIRA) | A recommendation that does not require changes. Testing is carried out according to the scenario without any changes. |
    
    #### Criteria for determining severity
    
    This section describes the criteria that a tester is guided by severity determination of a defect. The criteria (Table 2) are part of the standard that testers must adhere to. The presence of criteria ensures that the process for severity determination of a defect meets the requirements of the company.
    
    In addition to these criteria, when determining the level of severity of a defect, the tester should focus on the target audience of the project and scenarios for its use. It's enough to imagine yourself as the end user of the project and severity determination level will be easier - the tester himself can assess how important this or that project error is to him.
    
    Table 2 - Criteria for determining criticality level
    
    | **Severity level** | **Criterion** |
    | --- | --- |
    | **Critical** 
     | • Testing cannot be continued; the project is not operational. 
    • Can't login with correct user in social network app 
    • Application installation doesn’t complete successfully |
    |  | • Application features are not available or blocked. 
    • Important parts of the system are out of order. 
    • The function works with serious break the functional requirements. 
    • The main task of the application or its main part could not be completed. 
    • The defect cannot be neutralized. 
    • The defect resulted in data loss. 
    • The defect significantly affects the user experience. 
    • The issue seriously affects the customer's systems, damages the customer's reputation, or breaks the confidentiality of information. 
    • The application cannot be installed. 
    • The app doesn't work after the update. 
    • The product licensing mechanism is not working. |
    | **Major** | • The normal operation of a part of the application is broken. There is a way to neutralize the defect, but it is not sufficiently tested and reliable. 
    • The defect caused serious functional or other problems. 
    • The reasons for the failure to work are not precisely defined, but the failure takes place, blocks part of the functionality and is always reproduced. 
    • The function is not executed correctly, and this affects the user experience. 
    • Entering certain values in a field disables the function. 
    • Only part of the data is saved, and this affects the operation of other modules. 
    • The system is ignoring some data, and this affects the main functions. 
    • One or more functions are not fully performed, which affects the user experience. 
    • The calculation results are incorrect (significantly different). |
    | **Average** | • The defect does not block the application. 
    • The presence of a defect does not cause a significant degradation in performance, function or usability. 
    • There are proven ways to neutralize the defect. 
    • The defect breaks the normal operation of the function, but it can be quickly fixed in a proven way. 
    • The behavior of the function partially corresponds to the scenario. 
    • Validation of data entry is not performed or gives incorrect results, or the type of data entered in the field does not meet the requirements. 
    • The navigation mechanism does not work properly. 
    • Usability defects seriously affect the user experience. 
    • The number of fields on the form does not meet the requirements. 
    • The function does not work clearly enough or not in all cases, but this does not seriously affect the user experience. 
    • One or more functions are performed partially (this does not affect the user's work significantly). |
    | **Minor** 
     | • The defect does not significantly affect the accuracy or usability of the released version. 
    • The function has little or no effect on operation. 
    • Typos, vague wording, or limited scope for error messages. 
    • The names of fields, forms, tables, and windows differ from those specified in the script. 
    • The length of the field is not limited or does not meet the requirements. No error message is issued in this case. 
    • The format of the data displayed on the form differs from that specified in the requirements, but this does not affect the understanding of the meaning. 
    • No confirmation, error, or informational messages are issued. 
    • Incorrect order of columns on the form. 
    • In similar cases, different messages are displayed. 
    • In similar cases, the names of buttons, forms, fields, windows and tables are different. 
    • Message text does not comply with GUI standards or usage scenario. 
    • The tab does not meet the requirements. 
    • Not all files or other objects installed by a project are removed when an application is uninstalled. 
    • Field validation does not meet requirements. |
    |  | • Typos, vague wording, or limited scope for error messages. 
    • The names of fields, forms, tables, and windows differ from those specified in the script. 
    • In similar cases, the names of buttons, forms, fields, windows and tables are different. 
    • Message text does not comply with GUI standards or usage scenario. |
    | **Enhancement** | • Recommendations for quality improvement. 
    • Suggestions for minor functionality improvements. |
    
    #### Rules for changing the severity levels of defects
    
    It should be noted that determining the severity level of a defect is a subjective process, and it depends not only on the perception of the severity of errors by the tester himself/herself, but also on the project on which the error was found. By agreement with the development team or with the Customer, the process of determining the levels of severity can be changed.
    
    So, for example, for defects in the appearance of the application, the highest severity can be set if the appearance is the main priority for the customers of the Customer. On the other hand, all defects can be defined as minor, except for “falls” of the application, which are set to a serious level of severity.
    
    In addition, the phase of project development can influence the determination of the severity levels of defects - at the initial stages, any defects in the appearance of the project can be introduced only with an insignificant level of importance, but at the testing stage of the final version of the product, any error in a word on the page can be assessed as serious.
    
    However, according to the general rules, the tester should not change the severity level of defects, but exceptions are possible. The rules for changing severity are listed below.
    
    You can lower the severity level of defects in the following cases:
    
    - the defect was discovered during testing on a rarely used operating system (Win2000);
    - the defect is difficult to reproduce, or it was reproduced only once and does not have a clear path for reproduction;
    - the defect was found in a part of the application rarely used by users.
    
    You can increase the severity level of defects in the following cases:
    
    - the GUI defect is obvious and easy to detect (for example, a spelling error in a well-visible part of the interface), or the detected defect has negative associations and may be perceived by the user as an insult;
    - a defect is found in a frequently used and very important part of the application for the user;
    - potentially a defect can seriously affect the user experience.
    
    The tester has no right to increase the level of severity in order to attract the attention of the project manager to defects, even at the product release stage. For this purpose, you should use the report or negotiate such cases with manager.
    
    ![1.png](1.png)
    

[Practice] Task 1 - description of the bug
Goal: Find and describe ONLY 2 any bugs in the app

https://test-dinner-eng.demohoster.com/(to access the site use your corporate login (without using @......) and password). Details on filling below:
Bug Tracking Tool:[https://jira.a1qa.com/projects/QATC/issues/](https://jira.a1qa.com/projects/QATC/issues/)
Bugs language: English
Project: Training Center (QATC) (If you choose another project - you will receive first warning) - Please choose only QATC
Component: Calculator Menu

Result: send 2 links to your defects in a comment in the thread (in one comment). All the missing information can be clarified with me also in the comments ( if you hesitate - ask question better).

Please perform test until you reach 100% result 

Deadline: 28.04.2026 - 11:30 AM India time (12:00 PM BD time).

Bug 1:

| Field | My entry |
| --- | --- |
| Summary | Error in calculation of total price |
| Severity | Minor |
| Priority |  |
| Component | Calculator Menu |
| Affect/Version(s) | v 1.0 |
| Environment | Google Chrome v 147.0.7727.116 (Official Build) (64-bit) |
| Description | Steps:
  1. Go to [https://test-dinner-eng.demohoster.com/dinner.html](https://test-dinner-eng.demohoster.com/dinner.html)
  2. Click “Tuesday” from dropdown menu.
  3. Select “Caesar Salad 82.54 rub.” and “Pokr Stew 250 rub.” radio buttons in the menu
  4. Click the button “Make the Order”
Actual Result: The order history shows the amount debited from the personal account is 283 rub.
Expected Result: The amount debited from personal account should be 332.54 rub. |
| Error Type | Functional |
| Attachment | given below: |
| Expected Result | The amount debited from personal account should be 332.54 rub with account credit going to ***15 123.91*** |

![2.png](2.png)

![1.png](1%201.png)

### Suggested Revised Bug 1 (by claude)

| Field | Suggested Entry |
| --- | --- |
| **Summary** | Tuesday: The debited amount in order history does not match the order total when placing an order |
| **Severity** | Average |
| **Priority** | *(leave blank)* |
| **Component** | Calculator Menu |
| **Affects Version/s** | v 1.0 |
| **Environment** | OS: Windows 11 Home 25H2 64-bit, 
Browser: Google Chrome v147.0.7727.116 (Official Build) (64-bit) |
| **Error Type** | Functional |
| **Attachment** | Screenshot (.png) with address bar visible, problem highlighted in red |

**Description:**

**Steps:**

1. Go to [https://test-dinner-eng.demohoster.com/dinner.html](https://test-dinner-eng.demohoster.com/dinner.html)
2. Select "Tuesday" from the dropdown menu
3. Select "Caesar Salad 82.54 rub."
4. Select "Pokr Stew 250 rub." 
5. Click the "Make the Order" button

**Actual Result:** The order history shows the debited amount as 283 rub. Please see [^bug 1_1.png], [bug 1_2.png] for reference

**Expected Result:** The debited amount should be 332.54 rub. (equal to the displayed order total of 332.54 rub.)

Bug 2:

| Field | Entry |
| --- | --- |
| **Summary** | `Monday: Order is placed successfully when account balance is insufficient to cover the order amount` |
| **Severity** | **Major** — a core function (payment/balance check) is not working correctly and affects user experience |
| **Priority** | *(leave blank — for PM)* |
| **Component** | Calculator Menu |
| **Affects Version/s** | v 1.0 |
| **Environment** | OS: Windows 11 Home 25H2 64-bit, 
Browser: Google Chrome v147.0.7727.116 (Official Build) (64-bit) |
| **Error Type** | Functional |
| **Attachment** |  |

**Description:**

**Preconditions:** Account balance has been reduced to 3.10 rub through prior orders (e.g. by placing the full Monday menu order multiple times).

**Steps:**

1. Go to [https://test-dinner-eng.demohoster.com/dinner.html](https://test-dinner-eng.demohoster.com/dinner.html)
2. Select "Monday" from the dropdown menu
3. Check "Semolina Porridge 52.1 rub." checkbox (order total: 52.1 rub, account balance: 3.10 rub)
4. Click the "Make the Order" button

**Actual Result:** The order is placed successfully and the account balance drops to 1.00 rub instead of blocking the transaction. Please see [^bug 2_!.png], [bug 2_2.png] for reference

**Expected Result:** The system should not allow the order to be placed when the order total (52.1 rub) exceeds the account balance (3.10 rub). The order should be blocked and the balance should remain unchanged.

[Task 2](https://app.notion.com/p/Task-2-351ba6e0b9f48021956fd3e227c5b680?pvs=21)

[Task 3](https://app.notion.com/p/Task-3-357ba6e0b9f480899190cc595897f3de?pvs=21)

[Task 4](https://app.notion.com/p/Task-4-35aba6e0b9f4804189badc77b16e1ed9?pvs=21)

Tasks for today:

**[Theory] Watch the video**

- *Test Documentation:* [https://youtu.be/nMi0T_dHEuc](https://youtu.be/nMi0T_dHEuc)
    
    

*Tools for Web Testing:* [https://youtu.be/xYYVz5bgc10](https://youtu.be/xYYVz5bgc10)

**[Theory] Review the topics:**

Test documentation - [https://wiki.itransition.com/pages/viewpage.action?spaceKey=QAE&title=Test+Documentation](https://wiki.itransition.com/pages/viewpage.action?spaceKey=QAE&title=Test+Documentation)

Dev tools - [https://wiki.itransition.com/x/X7eKL](https://wiki.itransition.com/x/X7eKL)

**[Practice] Task - Perform Dev Tools task**

1. Goal: Learning to work with Developer tools (F12)

2. Complete the task : Working with Dev tools:

1. Open

[https://www.bing.com/](https://www.bing.com/)

and using Dev Tools perform the following tasks

1. Determine the maximum allowed number of characters entered in the search field

2. Change the name of the Images link to your name (Your name should be displayed instead of Images word on the website (top bar))

3. Change the color of the all links on the page to red

4. Determine the page loading time with cleared cache

5. Determine the cached page loading time

6. Determine the page loading time using slow-Internet connection (slow 3G)

7. Check the page for errors

8. Disable the cache when loading the page

9. Change Developer tools theme from light to dark

10. Determine the lifetime cookies for a page (2 ways) - please, attach two screenshots with two ways.

Result: Create confirmation screenshots on each steps of the task and send in threads of this message

Deadline: 11.05.2026 - 11:00 AM IND (11:30 AM BD) time.

[Task 5](https://app.notion.com/p/Task-5-360ba6e0b9f480a9a901de339137b15a?pvs=21)

[Task 6](https://app.notion.com/p/Task-6-365ba6e0b9f480dd8556c7a22f34af09?pvs=21)

[Task 7](https://app.notion.com/p/Task-7-366ba6e0b9f4808ab776fd14b408c7bd?pvs=21)