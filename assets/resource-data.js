(function () {
  "use strict";

  const SOURCE_FILES = [
  [
    "a. Programs and Resources/Document Library.url",
    "2026-08-21T04:15:33.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCCWHS1001-presentations/CPCWHS1001-PPT-Element-01-F-v1.0.pptx",
    "2024-07-30T00:59:26.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCCWHS1001-presentations/CPCWHS1001-PPT-Element-02-F-v1.0.pptx",
    "2025-12-12T03:39:12.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCCWHS1001-presentations/CPCWHS1001-PPT-Element-03-F-v1.0.pptx",
    "2025-12-12T03:40:46.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCCWHS1001-presentations/CPCWHS1001-PPT-Element-04-F-v1.0.pptx",
    "2022-09-13T05:44:29.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCWHS1001-Learner Manual.docx",
    "2025-12-12T03:21:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCWHS1001-Learner Workbook.docx",
    "2022-08-26T09:53:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/1. TotalVET Training Resources/CPCWHS1001-Teacher Manual.docx",
    "2022-08-26T09:51:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/1. White Card Flow Chart 1 RTO.pdf",
    "2026-01-31T07:31:47.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/2. SASS supported - School Delivered White Card Checklist.docx",
    "2026-02-04T23:12:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/3. 8410.lln.training.url",
    "2026-08-21T01:40:12.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/4. www.usi.gov.au.url",
    "2026-08-21T01:40:58.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/5. White Card PowerPoint Presentation.url",
    "2026-08-21T01:41:05.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/6. Student Guide.docx",
    "2023-07-12T22:44:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/7. Pre-assessment check - Student copy.pdf",
    "2025-03-03T22:59:43.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/8. Pre-asssessment check - Teacher copy.pdf",
    "2025-03-03T23:17:42.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/Sample SDS 871-82113_CABOTS_DANISH_OIL-AUS_GHS.pdf",
    "2025-02-20T09:00:14.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/SW08745 SafeWork NSW Assessment Mapping Matrix - CPCWHS1001 - V2.2 100323.pdf",
    "2023-06-26T00:25:36.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/Virtual Whitecard supporting resources/Student Guide Final.docx",
    "2023-07-12T22:44:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/Virtual Whitecard supporting resources/Virtual White Card Checklist.docx",
    "2025-09-18T21:54:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/Virtual Whitecard supporting resources/Virtual White Card Teacher and Learner Resource - Student Copy (2).pdf",
    "2025-03-03T22:59:43.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/2. Whitecard course delivery resources/Virtual Whitecard supporting resources/Virtual White Card Teacher and Learner Resource (2).pdf",
    "2025-03-03T23:17:42.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Training.gov documents/CPCWHS1001_AssessmentRequirements_R2.pdf",
    "2024-07-12T07:58:10.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Training.gov documents/CPCWHS1001_R2.pdf",
    "2024-07-12T08:02:50.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/8410.lln.training.url",
    "2026-02-04T23:04:16.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/SafeWork NSW GIT Audit Checklist (1).pdf",
    "2025-12-11T00:00:44.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/Sample SDS 871-82113_CABOTS_DANISH_OIL-AUS_GHS.pdf",
    "2026-02-04T23:04:16.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/SASS supported - School Delivered White Card Checklist.docx",
    "2026-02-04T23:12:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/Student Guide Final (5).docx",
    "2023-07-12T22:44:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/SW08745 SafeWork NSW Assessment Mapping Matrix - CPCWHS1001 - V2.2 100323.pdf",
    "2026-02-04T23:04:17.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/Virtual White Card Checklist.docx",
    "2025-09-18T21:54:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/White Card Validity, Expiry and Legal Implications 2025 (5).pdf",
    "2025-06-24T06:00:47.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 1 White Card/3. Additional resources/Whitecard resources/www.usi.gov.au.url",
    "2026-02-04T23:04:17.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2002 Use carpentry tools and equipment/CPCCCA2002 Class activity book - Assessor Pack.docx",
    "2026-01-27T09:23:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2002 Use carpentry tools and equipment/CPCCCA2002 Class activity book - Student Pack.docx",
    "2026-01-27T09:16:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2002 Use carpentry tools and equipment/CPCCCA2002 Learner Guide.docx",
    "2023-05-25T00:03:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2002 Use carpentry tools and equipment/CPCCCA2002 Presentation.pptx",
    "2026-01-27T09:28:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/CPCCCA2011- Learner Guide.docx",
    "2026-01-27T22:07:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/CPCCCA2011-Learning Activity Booklet - Trainer Copy.docx",
    "2026-01-27T22:05:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/CPCCCA22011 Learner Activity Booklet.docx",
    "2026-01-27T22:04:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/presentations/CPCCCA2011-PPT-Element 01-F-v1.0.pptx",
    "2022-11-17T01:05:59.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/presentations/CPCCCA2011-PPT-Element 02-F-v1.0.pptx",
    "2022-11-17T01:07:19.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/presentations/CPCCCA2011-PPT-Element 03-F-v1.0.pptx",
    "2022-11-17T01:08:06.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCA2011 Handle carpentry materials/presentations/CPCCCA2011-PPT-Element 04-F-v1.0.pptx",
    "2022-11-17T01:09:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCM2005 Use construction tools and equipment/CPCCCM2005 Class activity book - Assessor.docx",
    "2025-12-14T23:35:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCM2005 Use construction tools and equipment/CPCCCM2005 Class activity book- Student.docx",
    "2025-12-14T23:36:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCM2005 Use construction tools and equipment/CPCCCM2005 Learner guide.docx",
    "2025-12-14T23:36:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/1. TotalVET Training Resources/CPCCCM2005 Use construction tools and equipment/CPCCCM2005 Presentation.pptx",
    "2025-12-14T23:35:24.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/2. Program/VET Teaching Program Task Tools and Equipment Draft V2.docx",
    "2026-02-03T03:03:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/3. DoE TEACHER & LEARNER GUIDE/Task 2 - Tools and Equipment - Student Guide.docx",
    "2026-02-19T04:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/3. DoE TEACHER & LEARNER GUIDE/Task 2 - Tools and Equipment - Teacher Guide.docx",
    "2026-02-19T04:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2002 Use carpentry tools and equipment/CPCCCA2002B Trainer Theory Answers.docx",
    "2026-02-01T22:05:22.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2002 Use carpentry tools and equipment/Hyperlinked Resources.docx",
    "2026-02-03T02:41:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Hyperlinked Resources.docx",
    "2026-02-03T00:56:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/CLT_Virtual Industry Visit_2_CLT_manufacture.pdf",
    "2023-02-24T03:46:10.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Making Timber 1_4_Growth_WS.pdf",
    "2023-02-14T02:07:50.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Making Timber 2_4_Harvest_WS.pdf",
    "2023-02-14T02:14:40.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Making Timber 3_4_Conversion_TeacherPP.pptx",
    "2023-02-14T02:37:15.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Making Timber 3_4_Conversion_WS.pdf",
    "2023-02-14T02:25:01.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Making Timber 4_4_Seasoning.pdf",
    "2023-02-14T02:21:05.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Manufactured Boards_1_Worksheet.pdf",
    "2023-02-14T02:31:03.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Timber Defects_TeacherPP.pptx",
    "2023-02-14T02:35:15.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Timber Mill Video in operation.docx",
    "2023-02-14T04:09:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/Virtual Industry Visit_LVL manufacture.pdf",
    "2023-02-24T03:04:04.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Materials and sustainability/What is a renewable resource_worksheet.pdf",
    "2023-02-24T02:30:56.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCA2011 Handle carpentry materials/Timber equipment PPE posters.pdf",
    "2021-03-23T14:44:55.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCM2005 Use construction tools and equipment (syllabus content to be delivered for HSC)/CPCCCM2005B Trainer Theory Answers GREY.docx",
    "2026-01-28T01:59:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/CPCCCM2005 Use construction tools and equipment (syllabus content to be delivered for HSC)/Hyperlinked Resources.docx",
    "2026-07-06T04:10:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/a_using a circ saw.pdf",
    "2024-06-17T02:04:49.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 1.pdf",
    "2023-06-20T01:18:13.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 2.pdf",
    "2023-06-20T01:20:04.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 3.pdf",
    "2023-06-20T01:22:37.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 4.pdf",
    "2023-06-20T01:25:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 5.pdf",
    "2023-06-20T01:26:58.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 6.pdf",
    "2023-06-20T01:29:16.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 7.pdf",
    "2023-06-20T01:31:25.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 8.pdf",
    "2023-06-20T01:40:17.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 9.pdf",
    "2023-06-20T01:41:55.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 10.pdf",
    "2023-06-20T01:43:23.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 11.pdf",
    "2023-06-20T01:45:12.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 12.pdf",
    "2023-06-20T01:06:09.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Power Tool 13.pdf",
    "2023-06-20T01:06:35.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Teachers answer Sheets/Power Tool 1_answers_4_Teachers.pdf",
    "2023-06-20T00:41:44.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Teachers answer Sheets/Power Tool 2_ANSWERS_4Teacher.pdf",
    "2023-06-20T00:42:47.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Teachers answer Sheets/Power Tool 3_ANSWERS_4_Teacher.pdf",
    "2023-06-20T00:43:43.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Teachers answer Sheets/Power Tool 4_ANSWERS_4_Teacher.pdf",
    "2023-06-20T00:53:57.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/Teachers answer Sheets/Power Tool 5_ANSWERS_4_Teacehr.pdf",
    "2023-06-20T00:44:44.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 2 Tools and Equipment/Additional resources/Tools and Safe Use/worksheet index.docx",
    "2024-06-25T03:40:37.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001 -Presentations/CPCCWHS2001-PPT-Element 01-F-v1.1.pptx",
    "2024-01-22T23:47:16.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001 -Presentations/CPCCWHS2001-PPT-Element 02-F-v1.1.pptx",
    "2024-01-22T23:51:52.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001 -Presentations/CPCCWHS2001-PPT-Element 03-F-v1.1.pptx",
    "2024-01-22T23:52:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001 -Presentations/CPCCWHS2001-PPT-Element 04-F-v1.1.pptx",
    "2024-01-22T23:54:06.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001 -Presentations/CPCCWHS2001-PPT-Element 05-F-v1.1.pptx",
    "2024-01-22T23:54:59.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001-Learner Manual.docx",
    "2025-12-17T23:28:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001-Learner Workbook.docx",
    "2025-12-17T23:02:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/1. TotalVET Training Resources/CPCWHS2001 delivery resources/CPCCWHS2001-Teacher Manual.docx",
    "2025-12-12T03:42:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/2. Program/VET Teaching Program Task Work Safe Draft.docx",
    "2026-08-12T01:15:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/3. DoE TEACHER & LEARNER GUIDE/Task 3 - Work Safe - Student Guide.docx",
    "2026-02-19T04:50:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/3. DoE TEACHER & LEARNER GUIDE/Task 3 - Work Safe - Teacher Guide.docx",
    "2026-02-19T04:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/CPCCWHS2001 Apply WHS requirements, policies and procedures in the construction industry/TotalVET Training Resources.url",
    "2024-10-16T01:13:08.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/CPCCWHS2001 Apply WHS requirements, policies and procedures in the construction industry/White Card Presentation.ppsx",
    "2018-01-25T00:27:36.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/CPCCWHS2001 Apply WHS requirements, policies and procedures in the construction industry/WHS_Lessons/Construction Signs.pptx",
    "2023-02-10T03:04:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/CPCCWHS2001 Apply WHS requirements, policies and procedures in the construction industry/WHS_Lessons/Risk RAM_HOC.pptx",
    "2021-03-01T10:04:44.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/CPCOHS Cluster HO Asbestos Handbook.pdf",
    "2008-09-18T05:28:15.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/Files that link directly to sample program/Asbestos fact sheet.pdf",
    "2019-04-02T02:47:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/Files that link directly to sample program/Asbestos.pdf",
    "2024-10-16T00:47:51.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/Files that link directly to sample program/Consultation activity.pdf",
    "2024-11-06T04:01:44.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/Files that link directly to sample program/Duty of care PCBUs.pptx",
    "2024-10-30T02:57:07.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/Files that link directly to sample program/Hyperlinked Resources.docx",
    "2026-01-23T01:50:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/pocketguide-to-construction-safety.pdf",
    "2022-08-02T05:49:52.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/risk assessment template.docx",
    "2025-02-12T22:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/Sample_Evacuation Diagram.docx",
    "2024-01-29T00:35:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/WC Powerpoint (2).pptx",
    "2023-10-11T02:46:23.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/WHS_Lessons/Construction Signs.pptx",
    "2023-02-10T03:04:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/WHS_Lessons/Risk RAM_HOC.pptx",
    "2021-03-01T10:04:44.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/WHS_Lessons/Whs_Fire.pptx",
    "2023-02-14T03:09:22.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/WHS_Lessons/WHS_Intro_Construction.pptx",
    "2025-08-28T04:36:46.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/WHS_Lessons/Worksheet_Risk assessment.pdf",
    "2023-02-10T02:53:38.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/www.safework.nsw.gov.au.url",
    "2024-05-03T01:41:56.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 3 Work Safe/4. Additional resources/www.safeworkaustralia.gov.au.url",
    "2024-05-03T01:42:47.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCM1011/CPCCCM1011 Class activity book - Assessor (1).docx",
    "2025-10-21T21:52:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCM1011/CPCCCM1011 Class activity book - Student (1).docx",
    "2025-10-21T21:53:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCM1011/CPCCCM1011 Learner Guide (1).docx",
    "2026-04-14T02:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCM1011/CPCCM1011-presentations/CPCCCM1011 Presentation.pptx",
    "2026-04-14T02:50:28.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCOM1015/CPCCOM1015-LAB-F-v2.0 .docx",
    "2026-02-27T01:38:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCOM1015/CPCCOM1015-LABT-F-v2.0 .docx",
    "2025-08-29T00:56:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCOM1015/CPCCOM1015-LG-F-v2.0.docx",
    "2026-03-12T04:18:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCOM1015/CPCCOM1015-presentations/CPCCOM1015-PPT-Element 01-F-v2.0.pptx",
    "2025-08-29T01:18:04.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/1. TotalVET Training Resources/CPCCOM1015/CPCCOM1015-presentations/CPCCOM1015-PPT-Element 02-F-v2.0.pptx",
    "2025-08-29T01:19:26.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/2. Program/VET Teaching Program Task Working it out Draft.docx",
    "2026-06-19T02:56:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/3. DoE TEACHER & LEARNER GUIDE/Task 4 - Working It Out - Student Guide.docx",
    "2026-06-08T07:57:07.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/3. DoE TEACHER & LEARNER GUIDE/Task 4 - Working It Out - Teacher Guide.docx",
    "2026-05-14T00:55:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Basic measuring and calculations.pdf",
    "2021-08-05T06:22:14.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Calculation resources.url",
    "2024-09-15T01:32:55.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCCM1011 Undertake basic estimation and costing/Hyperlinked Resources.docx",
    "2026-04-14T03:57:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCCM1011 Undertake basic estimation and costing/Work it Out/Additional Resourses/Hyperlinked Resources.docx",
    "2026-04-20T22:37:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCCM1011 Undertake basic estimation and costing/Work it Out/Task 4 - Working It Out - Student Guide.docx",
    "2026-04-20T22:30:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCCM1011 Undertake basic estimation and costing/Work it Out/Task 4 - Working It Out - Teacher Guide.docx",
    "2026-04-20T22:31:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCCM1011 Undertake basic estimation and costing/Work it Out/VET Teaching Program Task Working it out Draft.docx",
    "2026-04-20T22:33:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCOM1015 Carry out measurements and calculations/Hyperlinked Resources.docx",
    "2026-04-14T02:29:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/calculation_Volume_area1.pdf",
    "2023-05-15T12:20:55.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/Calculations_1_ Preimeter_Skills Test_1.pdf",
    "2023-07-24T12:12:21.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/Numeracy_Perimeter_Practice_2_2.pdf",
    "2023-07-24T11:58:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/Numeracy_Perimeter1_2.pdf",
    "2023-07-24T11:11:31.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/Pythagorean_1.pdf",
    "2023-08-01T11:50:39.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/units of measurement_1.pdf",
    "2023-07-25T07:39:37.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Numeracy & Calcs resources/calculation_Volume_area1.pdf",
    "2023-05-15T12:20:55.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Numeracy & Calcs resources/Calculations_1_ Preimeter_Skills Test_1.pdf",
    "2023-07-24T12:12:21.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Numeracy & Calcs resources/Numeracy_Perimeter_Practice_2_2.pdf",
    "2023-07-24T11:58:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Numeracy & Calcs resources/Numeracy_Perimeter1_2.pdf",
    "2023-07-24T11:11:31.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Numeracy & Calcs resources/Pythagorean_1.pdf",
    "2023-08-01T11:50:39.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Numeracy & Calcs resources/units of measurement_1.pdf",
    "2023-07-25T07:39:37.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Pretest for T4 S3 Part A observation/Pretest for T4 S3 Part A Observation Checklist - Measurement Scenario.docx",
    "2025-10-15T22:43:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Pretest for T4 S3 Part A observation/Pretest for T4 S3 Part A Observation Checklist - Measurement Scenario.pdf",
    "2025-10-15T22:49:30.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Video worksheet - How To - Reading Construction Blueprints & Plans.docx",
    "2026-08-31T04:25:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2001/CPCCBL2001 Class Activity book - Assessor copy.docx",
    "2026-06-19T02:53:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2001/CPCCBL2001 Class activity book - Student.docx",
    "2025-07-08T01:43:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2001/CPCCBL2001 Learner Guide.docx",
    "2026-06-30T21:59:49.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2001/CPCCBL2001 Presentation.pptx",
    "2025-07-08T11:46:35.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2002/CPCCBL2002_CQ_LG.docx",
    "2026-06-22T10:14:07.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2002/CPCCBL2002_CQ_LW.docx",
    "2021-07-13T15:44:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/1. CAQA Training Resources/CPCCBL2002/CPCCBL2002_CQ_TG.docx",
    "2021-07-13T15:42:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/2. Program/VET Teaching Program Task 5.1 Draft.docx",
    "2026-08-12T01:20:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/3. DoE TEACHER & LEARNER GUIDE/Task 5.1 - Bricklaying - Student Guide.docx",
    "2026-07-01T00:18:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/3. DoE TEACHER & LEARNER GUIDE/Task 5.1 - Bricklaying - Teacher Guide.docx",
    "2026-07-01T00:17:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/4. Additional resources/CPCCBL2001 Handle and prepare bricklaying and blocklaying materials/Concrete_Mixer_Instruction.pdf",
    "2010-08-06T05:16:09.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/4. Additional resources/CPCCBL2001 Handle and prepare bricklaying and blocklaying materials/Hyperlinked Resources.docx",
    "2026-06-22T00:38:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/4. Additional resources/CPCCBL2002 Use bricklaying and blocklaying materials/CPCCBL2002A Trainer Theory Assessment.pdf",
    "2018-07-03T01:55:38.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/4. Additional resources/CPCCBL2002 Use bricklaying and blocklaying materials/Hyperlinked Resources.docx",
    "2026-06-22T10:15:35.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/4. Additional resources/CPCCBL2002 Use bricklaying and blocklaying materials/WET SAW.pdf",
    "2020-10-28T05:16:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCCM2013 Undertake basic installation of wall tiles/CPCCCM2013 Class activity - Assessor pack.docx",
    "2025-11-12T03:13:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCCM2013 Undertake basic installation of wall tiles/CPCCCM2013 Class activity - Student pack.docx",
    "2022-09-11T21:45:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCCM2013 Undertake basic installation of wall tiles/CPCCCM2013 Learner Guide.docx",
    "2026-07-17T03:02:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCCM2013 Undertake basic installation of wall tiles/CPCCCM2013 Presentation.pptx",
    "2026-05-08T00:08:12.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCCM2013 Undertake basic installation of wall tiles/wall tiling.url",
    "2024-08-21T01:18:09.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCWF2002 Use wall and floor tiling tools and equipment/CPCCWF2002 Class activity book - Assessor (2).docx",
    "2021-11-29T11:48:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCWF2002 Use wall and floor tiling tools and equipment/CPCCWF2002 Class activity book - Student pack.docx",
    "2021-11-29T11:46:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCWF2002 Use wall and floor tiling tools and equipment/CPCCWF2002 Learner Guide.docx",
    "2026-07-13T22:47:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCWF2002 Use wall and floor tiling tools and equipment/CPCCWF2002_CQ_PP.pptx",
    "2026-07-17T01:53:07.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/1. CAQA Training Resources/CPCCWF2002 Use wall and floor tiling tools and equipment/Tiling tools.url",
    "2024-08-21T01:23:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/2. Program/VET Teaching Program Task 5.2 Draft.docx",
    "2026-07-17T03:41:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/3. DoE TEACHER & LEARNER GUIDE/Task 5.2 - Tiling - Student Guide.docx",
    "2026-07-17T03:43:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/3. DoE TEACHER & LEARNER GUIDE/Task 5.2 - Tiling - Teacher Guide.docx",
    "2026-07-16T03:26:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/CPCCCM2013/Hyperlinked Resources.docx",
    "2026-07-17T03:32:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/CPCCWF2002/Hyperlinked Resources.docx",
    "2026-07-17T03:31:13.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/Errors to avoid in tiling.pdf",
    "2021-10-05T13:25:19.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/notes for Task 5.1 - Tiling Station frame.docx",
    "2024-10-01T05:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/Tiling Station Drawing set.pdf",
    "2024-10-01T05:57:47.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/tiling_1_materials Presentation - Copy.pptx",
    "2023-05-19T05:00:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/tiling_1_materials Presentation.pptx",
    "2024-01-26T03:57:47.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/tiling_1_materials Worksheet.pdf",
    "2023-05-19T03:55:01.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/tiling_2_how to mix motar.pptx",
    "2024-09-09T00:39:54.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 2 - Tiling/4. Additional resources/Tiling_Photos.pdf",
    "2023-03-28T03:04:26.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN2001 Assemble components/CPCCJN2001 Class activity book - Assessor pack.docx",
    "2025-08-15T03:01:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN2001 Assemble components/CPCCJN2001 Class activity book - Student pack.docx",
    "2022-02-24T11:35:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN2001 Assemble components/CPCCJN2001 Learner Guide.docx",
    "2026-07-01T01:14:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN2001 Assemble components/CPCCJN2001 Presentation.pptx",
    "2026-07-02T22:52:13.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN3004 Manufacture and assemble joinery components/CPCCJN3004_CQ_LG.docx",
    "2026-07-01T01:24:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN3004 Manufacture and assemble joinery components/CPCCJN3004_CQ_LW.docx",
    "2022-01-19T07:06:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN3004 Manufacture and assemble joinery components/CPCCJN3004_CQ_PP.pptx",
    "2026-07-03T01:33:45.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/1. CAQA Training Resources/CPCCJN3004 Manufacture and assemble joinery components/CPCCJN3004_CQ_TG.docx",
    "2026-07-02T22:13:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/2. Program/VET Teaching Program Task 5.3 Draft.docx",
    "2026-07-03T02:52:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/3. DoE TEACHER & LEARNER GUIDE/Task 5.3 - Joinery - Student Guide.docx",
    "2026-07-03T00:50:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/3. DoE TEACHER & LEARNER GUIDE/Task 5.3 - Joinery - Teacher Guide.docx",
    "2026-07-03T00:48:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Blum_Technical Hinges2.pdf",
    "2023-11-27T06:20:07.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Blum_Technical_Hinges.pdf",
    "2023-11-27T06:20:07.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN2001 Assemble Components/Hyperlinked Resources.docx",
    "2026-07-03T01:34:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Door and wall frame/4Doors_option_1/4_door_wall_frame_assyStudent_2page.pdf",
    "2023-10-16T04:22:06.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Door and wall frame/4Doors_option_1/Door Drawing Set Complete.pdf",
    "2023-09-22T13:51:02.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Door and wall frame/4Doors_option_1/Jamb_assy1_detail.pdf",
    "2023-10-16T10:32:24.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Door and wall frame/4Doors_option_1/Material Pricing for Door.xlsx",
    "2023-10-08T15:11:32.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Door and wall frame/4Doors_option_1/Teacher fabrication notes for scaled down door.docx",
    "2023-10-30T08:29:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Door and wall frame/Doors_option_2/door frame option 2.docx",
    "2023-10-30T08:48:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/CPCCJN3004 Manufacture and assemble joinery components/Hyperlinked Resources.docx",
    "2026-07-03T02:47:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Joinery/Scaled Door Plans/Door Drawing Set Complete.pdf",
    "2023-09-22T13:51:02.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Joinery/Scaled Door Plans/Material Pricing for Door.xlsx",
    "2023-10-08T15:11:32.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/8410.lln.training.url",
    "2024-08-21T01:30:10.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/Adhesives theory.pdf",
    "2024-08-06T02:30:59.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/Adhesives.pdf",
    "2024-08-06T02:30:59.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/Assembly of components.docx",
    "2021-09-03T02:51:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/Classification and properties of wood.pdf",
    "2024-08-06T02:31:03.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/Enviromental impacts.pptx",
    "2024-12-02T06:02:55.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Materials and sustainability/MiTek-Guide-Steel-Framing.pdf",
    "2017-05-05T07:37:15.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Task 5.3 Joinery Plans/Joinery _Knockdown Fittings.pdf",
    "2023-11-13T00:11:42.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Task 5.3 Joinery Plans/Scaled Door Plans/Door Drawing Set Complete.pdf",
    "2023-09-22T13:51:02.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Task 5.3 Joinery Plans/Scaled Door Plans/Material Pricing for Door.xlsx",
    "2023-10-08T15:11:32.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 3 - Joinery/4. Additional resources/Task 5.3 Joinery Plans/Task 1 Timber Framing Joints Set.pdf",
    "2026-07-24T04:29:36.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013_Trainer Guide.docx",
    "2026-08-12T00:55:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013-Learner Activity Booklet.docx",
    "2026-01-12T23:04:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013-Learner Guide.docx",
    "2026-01-27T03:11:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013-Learner Manual.docx",
    "2022-09-16T11:24:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013-presentations/CPCCOM1013-PPT-Element 01-F-v2.0.pptx",
    "2026-01-12T23:06:29.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013-presentations/CPCCOM1013-PPT-Element 02-F-v2.0.pptx",
    "2026-01-12T23:06:13.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM1013/CPCCOM1013-Teacher Activity Booklet.docx",
    "2026-01-27T03:13:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/CPCCOM2001 Class activity book - Assessor (1).docx",
    "2024-07-31T11:00:21.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/CPCCOM2001 Class activity book - Student (1).docx",
    "2021-08-10T03:22:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/CPCCOM2001 Learner guide (1).docx",
    "2022-11-02T23:14:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/CPCCOM2001 Teacher guide.docx",
    "2021-08-10T03:22:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/CPCCOM2001-presentation/CPCCOM2001 Presentation.pptx",
    "2024-08-13T05:15:02.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/General Building Specifications - For reference prupsoe only.docx",
    "2021-08-07T06:33:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/1. TotalVET and CAQA Training Resources/CPCCOM2001/Technical drawings and plans - For reference prupsoe only.docx",
    "2021-08-01T05:45:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/2. Program/VET Teaching Program Task Project Planning Draft.docx",
    "2026-08-17T00:27:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/3. DoE TEACHER & LEARNER GUIDE/Task 6 - Project Planning - Student Guide.docx",
    "2026-08-13T23:32:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/3. DoE TEACHER & LEARNER GUIDE/Task 6 - Project Planning - Teacher Guide.docx",
    "2026-08-13T21:53:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/4. Additional resources/CPCCOM1013 Plan and organise work/Carpentry_Quoting and Communication Lesson Plan (2).pdf",
    "2021-03-09T04:24:16.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/4. Additional resources/CPCCOM1013 Plan and organise work/Hyperlinked Resources.docx",
    "2026-07-27T04:28:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/4. Additional resources/CPCCOM1013 Plan and organise work/Sample Quote Template (1).xlsx",
    "2021-05-27T22:41:14.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/4. Additional resources/CPCCOM2001 Read and interpret plans and specifications/Hyperlinked Resources.docx",
    "2026-08-12T21:48:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/4. Additional resources/CPCCOM2001 Read and interpret plans and specifications/Microsoft Word - CPCCCM2001A Trainer Theory Answers GREY.pdf",
    "2022-05-17T23:21:19.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 6 Project Planning/4. Additional resources/New Place Construction Company Employee Handbook.docx",
    "2024-10-02T02:06:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCOM1012 Work effectively and sustainably in the Construction Industry/CPCCOM1012-LAB-F-v1.0 (1).docx",
    "2022-10-31T05:39:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCOM1012 Work effectively and sustainably in the Construction Industry/CPCCOM1012-LAB-F-v1.0.docx",
    "2022-10-31T05:39:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCOM1012 Work effectively and sustainably in the Construction Industry/CPCCOM1012-LABT-F-v1.0.docx",
    "2022-10-31T06:09:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCOM1012 Work effectively and sustainably in the Construction Industry/CPCCOM1012-LG-F-v1.0 (1).docx",
    "2022-10-24T05:09:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCOM1012 Work effectively and sustainably in the Construction Industry/CPCCOM1012-LG-F-v1.0.docx",
    "2022-10-24T05:09:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCVE1011 Undertake a basic construction project/CPCCVE1011 Class activity book - Assessor.docx",
    "2021-08-29T07:00:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCVE1011 Undertake a basic construction project/CPCCVE1011 Class activity book - Student.docx",
    "2021-08-29T06:58:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/1. TotalVET Training Resources/CPCCVE1011 Undertake a basic construction project/CPCCVE1011 Learner Guide.docx",
    "2021-08-28T08:49:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/2. Program/VET Teaching Program Task Group Project Draft.docx",
    "2026-03-11T01:43:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Apprenticeship and Traineeship webinar.pdf",
    "2021-10-13T21:04:02.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Australian Jobs 2021.pdf",
    "2021-10-25T04:45:08.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/BCRITAB Newsletter Oct 21.pdf",
    "2021-11-02T04:36:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/BCRITAB presentation Careers of Tomorrow 9 Mar 2022.pptx",
    "2022-03-10T01:33:14.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Careers NSW e-flyer.pdf",
    "2021-11-10T21:21:06.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Careers NSW Introduction.pdf",
    "2021-11-10T21:23:57.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Careers-Snapshot_Building_Construction_and_Property.pdf",
    "2019-02-12T02:08:15.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Construction Riep Webinar March 2022 v2.pptx",
    "2022-03-10T01:32:09.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Newsletter - August 21 (1).pdf",
    "2021-08-27T02:35:40.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Oct 13 Construction CPB Event.pdf",
    "2021-09-30T21:54:13.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/Programs and Resources.docx",
    "2025-12-18T08:27:00.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 7 Group Project/3. Additional resources/CPCCCM1012 Work effectively and sustainably in the construction industry/VERTO Empowering Women in trades flyer_web_082121.pdf",
    "2021-08-25T03:34:25.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCBL2001/CPCCBL2001 Presentation.pptx",
    "2024-10-09T20:54:04.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCBL2002/CPCCBL2002 Presentation.pptx",
    "2024-10-09T21:35:38.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCA2002/CPCCCA2002 Presentation.pptx",
    "2024-10-09T20:54:21.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCA2011/CPCCCA2011-PPT-Element 01-F-v1.0.pptx",
    "2022-11-17T01:05:59.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCA2011/CPCCCA2011-PPT-Element 02-F-v1.0.pptx",
    "2022-11-17T01:07:19.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCA2011/CPCCCA2011-PPT-Element 03-F-v1.0.pptx",
    "2025-02-25T22:36:24.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCA2011/CPCCCA2011-PPT-Element 04-F-v1.0.pptx",
    "2022-11-17T01:09:00.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCM2004/CPCCCM2004 Presentation.pptx",
    "2024-10-10T00:52:56.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCM2005/CPCCCM2005 Presentation.pptx",
    "2024-10-09T20:54:23.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCCM2013/CPCCCM2013 Presentation.pptx",
    "2024-10-09T21:55:08.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCJN2001/CPCCJN2001 Presentation.pptx",
    "2024-10-09T20:54:21.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCM1011/CPCCCM1011 Presentation.pptx",
    "2024-10-09T20:52:25.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1012/CPCCOM1012-PPT-Element-01-F-v1.0.pptx",
    "2022-10-31T06:46:39.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1012/CPCCOM1012-PPT-Element-02-F-v1.0.pptx",
    "2022-10-31T02:57:12.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1012/CPCCOM1012-PPT-Element-03-F-v1.0.pptx",
    "2022-10-31T04:13:32.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1013/CPCCOM1013-PPT-Element 01-F-v1.0.pptx",
    "2022-09-08T02:29:02.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1013/CPCCOM1013-PPT-Element 02-F-v1.0.pptx",
    "2022-09-16T11:27:29.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1015/CPCCOM1015-PPT-Element 01-F-v1.0.pptx",
    "2022-11-20T14:26:44.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1015/CPCCOM1015-PPT-Element 02-F-v1.0.pptx",
    "2022-11-20T14:27:20.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM1017/CPCCOM1017 Presentation.pptx",
    "2024-10-10T00:53:35.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCOM2001/CPCCOM2001 Presentation.pptx",
    "2021-08-10T02:57:18.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCVE1011/CPCCVE1011 Presentation.pptx",
    "2021-08-24T06:07:12.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWF2002/CPCCWF2002 Presentation.pptx",
    "2024-10-09T21:49:05.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS1001/CPCWHS1001-PPT-Element-01-F-v1.0.pptx",
    "2024-07-30T00:59:26.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS1001/CPCWHS1001-PPT-Element-02-F-v1.0.pptx",
    "2022-09-13T06:21:12.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS1001/CPCWHS1001-PPT-Element-03-F-v1.0.pptx",
    "2022-09-13T05:54:33.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS1001/CPCWHS1001-PPT-Element-04-F-v1.0.pptx",
    "2022-09-13T05:44:29.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS2001/CPCCWHS2001-PPT-Element 01-F-v1.1.pptx",
    "2024-01-22T23:47:16.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS2001/CPCCWHS2001-PPT-Element 02-F-v1.1.pptx",
    "2024-01-22T23:51:52.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS2001/CPCCWHS2001-PPT-Element 03-F-v1.1.pptx",
    "2024-01-22T23:52:54.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS2001/CPCCWHS2001-PPT-Element 04-F-v1.1.pptx",
    "2024-01-22T23:54:06.0000000Z"
  ],
  [
    "b. PowerPoint Resources/CPCCWHS2001/CPCCWHS2001-PPT-Element 05-F-v1.1.pptx",
    "2024-01-22T23:54:59.0000000Z"
  ],
  [
    "c. HSC Revision Hub/2013_2023_Construction HSC Extended response_1.docx",
    "2024-06-28T03:18:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/ALARM Planning Blank Template.docx",
    "2026-05-15T04:59:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Clint's HSC Construction Revision.docx",
    "2025-11-18T02:29:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Common topics tested in the Construction HSC.pptx",
    "2025-12-09T02:04:58.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC Construction Revision.docx",
    "2026-05-11T00:35:20.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC Multiple Choice Kahoot links.docx",
    "2026-07-27T01:14:25.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-carry-out-measurements-and-calculations_(3)[1].docx",
    "2026-04-21T00:42:46.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-conduct-workplace-communication_(1)[1].docx",
    "2026-04-21T00:42:29.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-plan-and-organise-work-CPCCCM1013A[1].docx",
    "2026-04-21T00:42:11.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-read-and-interpret-plans-and-specifications-CPCCCM2001A[1].docx",
    "2026-04-23T23:29:50.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-safety-CPCCWHS1001-CPCCOHS2001A[1].docx",
    "2026-04-21T00:41:21.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-use-construction-tools-and-equipment-CPCCCM2005B[1].docx",
    "2026-04-21T00:40:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC preparation by mandatory modules/vet-s6-construction-work-effectively-and-sustainably-CPCCCM1012A[1].docx",
    "2026-04-21T00:39:42.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC_Questions_Carry_out_measurements_and_calculations-HSC_questions-V62015.pdf",
    "2015-04-24T05:35:54.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC_questions_Conduct_workplace_communication_2015.pdf",
    "2015-04-23T04:46:54.0000000Z"
  ],
  [
    "c. HSC Revision Hub/HSC_Questions_Work_effectively_and_sustainably_HSC_Questions_Questions_2015.pdf",
    "2015-04-23T03:47:26.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Multiple Choice Samples.pptx",
    "2025-08-21T00:51:33.0000000Z"
  ],
  [
    "c. HSC Revision Hub/NESA key terms/NESA key words and connectives VET.docx",
    "2026-04-20T04:45:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/OneDrive_1_20-06-2024.zip",
    "2024-06-20T07:17:47.0000000Z"
  ],
  [
    "c. HSC Revision Hub/PPT HSC_Questions_Apply WHS policies and procedures in the Workplace.pdf",
    "2015-04-23T00:50:15.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Read_and_interpret_plans-Composite_Theory and Questions_2015.pdf",
    "2015-04-29T00:37:39.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Trial HSC sample questions for 1.5 hour exam/Construction_Trial_HSC_Exam_Paper.docx",
    "2025-08-22T00:19:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Trial HSC sample questions for 1.5 hour exam/Construction_Trial_HSC_Marking_Guidelines.docx",
    "2013-12-23T23:15:00.0000000Z"
  ],
  [
    "c. HSC Revision Hub/Work Health and Safety quiz.docx",
    "2025-05-29T03:49:00.0000000Z"
  ],
  [
    "Construction Posters/3_4_5_layout method.pdf",
    "2026-07-18T10:37:38.0000000Z"
  ],
  [
    "Construction Posters/Conflict Poster.pdf",
    "2026-07-03T05:24:11.0000000Z"
  ],
  [
    "Construction Posters/Construction Classroom Posters.docx",
    "2026-07-27T05:05:46.0000000Z"
  ],
  [
    "Construction Posters/Environmental protection.docx",
    "2026-07-27T05:26:00.0000000Z"
  ],
  [
    "Construction Posters/Furniture_JSA.pdf",
    "2026-07-03T05:27:19.0000000Z"
  ],
  [
    "Construction Posters/Gantt Chart.pdf",
    "2026-07-03T05:28:40.0000000Z"
  ],
  [
    "Construction Posters/manufactured boards.docx",
    "2026-07-18T10:48:00.0000000Z"
  ],
  [
    "Construction Posters/Quality Control.pdf",
    "2026-07-03T05:37:25.0000000Z"
  ],
  [
    "Construction Posters/Timber Joinery.docx",
    "2026-07-24T04:40:00.0000000Z"
  ],
  [
    "d. Work Placement/AdditionalWorkPlacementLog.pdf",
    "2024-10-15T21:52:55.0000000Z"
  ],
  [
    "d. Work Placement/Go2Workplacement.url",
    "2024-08-21T00:36:24.0000000Z"
  ],
  [
    "d. Work Placement/Work placement forms.url",
    "2024-08-21T00:33:44.0000000Z"
  ],
  [
    "d. Work Placement/Work placement journals/2023_Construction Work placement Booklet_Yr11 PRELIMINARY Year_UPDATED.docx",
    "2026-06-11T02:17:08.0000000Z"
  ],
  [
    "d. Work Placement/Work placement journals/HSC Work Placement Journal.pdf",
    "2021-12-20T05:53:54.0000000Z"
  ],
  [
    "d. Work Placement/Work placement journals/Journal sample.pdf",
    "2025-02-23T22:57:53.0000000Z"
  ],
  [
    "Mentor and teacher contacts/Mentor and Teacher Contact Info.docx",
    "2026-03-12T00:41:32.0000000Z"
  ],
  [
    "Professional Development Opportunities/Accommodation-Booking Form 2022.docx",
    "2022-06-30T02:48:00.0000000Z"
  ],
  [
    "Professional Development Opportunities/Future Skills Flyer 2021 (1).docx",
    "2021-03-31T22:55:00.0000000Z"
  ],
  [
    "Professional Development Opportunities/Future Skills Program 2021 DRAFT.docx",
    "2021-04-21T01:46:00.0000000Z"
  ],
  [
    "Professional Development Opportunities/Future Skills Save the Date.docx",
    "2022-07-18T23:08:07.0000000Z"
  ],
  [
    "Professional Development Opportunities/Girls Who Build/Ask the expert_Apprentice Carpenter & Site Supervisors V1 - Monday 13.05.24.pdf",
    "2024-04-18T01:29:02.0000000Z"
  ],
  [
    "Professional Development Opportunities/Girls Who Build/Ask the expert_Design Managers & Design Coordinators - Tuesday 14.05.24.pdf",
    "2024-04-16T04:21:30.0000000Z"
  ],
  [
    "Professional Development Opportunities/Girls Who Build/Ask the expert_Estimators & Contract Administrators - Friday 17.05.24.pdf",
    "2024-04-16T04:21:31.0000000Z"
  ],
  [
    "Professional Development Opportunities/Girls Who Build/Ask the expert_Graduates, Cadets & Interns - Wednesday 15.05.24.pdf",
    "2024-04-16T04:21:30.0000000Z"
  ],
  [
    "Professional Development Opportunities/Girls Who Build/Ask the expert_Project Engineers & Site Engineers - Thursday 16.05.24.pdf",
    "2024-04-16T04:21:31.0000000Z"
  ],
  [
    "Project Drawings/2 part beach chair/2 Part Beach Chair set.pdf",
    "2025-11-03T04:31:03.0000000Z"
  ],
  [
    "Project Drawings/2 part beach chair/Student Worksheet.xlsx",
    "2025-11-03T04:17:36.0000000Z"
  ],
  [
    "Project Drawings/2 part beach chair/Teacher Worksheet.xlsx",
    "2025-11-03T04:15:43.0000000Z"
  ],
  [
    "Project Drawings/Covered Picnic Table/++OLD++Major_Project- Picnic Table_Dimensioning.pdf",
    "2021-03-31T02:36:25.0000000Z"
  ],
  [
    "Project Drawings/Covered Picnic Table/Picnic Table Dimensioning_LANDSCAPE & CROPPED.pdf",
    "2022-06-28T04:57:50.0000000Z"
  ],
  [
    "Project Drawings/Cubby House/Cubby House CCJSC.pdf",
    "2020-06-25T22:15:24.0000000Z"
  ],
  [
    "Project Drawings/Cubby House/Frame Costing.xlsx",
    "2021-12-13T22:34:02.0000000Z"
  ],
  [
    "Project Drawings/Dog Kennel.pdf",
    "2020-03-15T23:10:05.0000000Z"
  ],
  [
    "Project Drawings/Folding stool/1_Folding Title Sheet.pdf",
    "2025-03-09T23:41:43.0000000Z"
  ],
  [
    "Project Drawings/Folding stool/Folding Stool Narrow assembly.pdf",
    "2025-03-03T02:50:26.0000000Z"
  ],
  [
    "Project Drawings/Folding stool/Folding Stool outer assembly set.pdf",
    "2025-03-06T11:55:58.0000000Z"
  ],
  [
    "Project Drawings/Foot Stool V1/FootStool_Drawing set.pdf",
    "2024-03-04T03:49:16.0000000Z"
  ],
  [
    "Project Drawings/Framing task/Framing 1 Material List.xlsx",
    "2025-06-19T13:39:18.0000000Z"
  ],
  [
    "Project Drawings/Framing task/Framing Task Drawing Set.pdf",
    "2025-06-19T13:40:37.0000000Z"
  ],
  [
    "Project Drawings/mitre box v1 assembly.pdf",
    "2026-02-25T06:33:52.0000000Z"
  ],
  [
    "Project Drawings/PLANTER BOX ALL DRAWINGS.pdf",
    "2023-10-17T22:22:57.0000000Z"
  ],
  [
    "Project Drawings/Small Carry All - Nails/Cutting List.xlsx",
    "2021-11-11T02:40:02.0000000Z"
  ],
  [
    "Project Drawings/Small Carry All - Nails/Small Carry All.pdf",
    "2021-02-25T01:17:40.0000000Z"
  ],
  [
    "Project Drawings/TAFE Shed plans/Shed Plans for St Leonards delivery.doc",
    "2022-02-28T23:30:00.0000000Z"
  ],
  [
    "Project Drawings/TAFE Shed plans/Site safety, site management and communication plan for the shed.doc",
    "2022-02-16T03:01:00.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Bench Hook - version A.pdf",
    "2025-03-13T01:06:44.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Bench Hook - version B.pdf",
    "2019-01-24T04:28:15.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Cement float.pdf",
    "2014-10-23T21:36:49.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/mitre box v1 assembly.pdf",
    "2026-02-25T06:33:52.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Nail Box.pdf",
    "2019-01-24T04:21:48.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Timber Mallet Drawing/Mallet package for Construction.pdf",
    "2023-05-19T04:50:06.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Timber Mallet Drawing/Mallet_Jig_V2.pdf",
    "2023-10-16T11:41:36.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Wooden Mallet - version A.pdf",
    "2014-10-23T21:36:57.0000000Z"
  ],
  [
    "Project Drawings/Task 3 Project Options/Wooden Mallet - version B.pdf",
    "2019-01-24T04:30:44.0000000Z"
  ],
  [
    "Project Drawings/Task 4 Project Options/Revised Carry All Toolbox.pdf",
    "2025-03-13T01:06:44.0000000Z"
  ],
  [
    "Project Drawings/Task 4 Project Options/Saw Horse - Version A.pdf",
    "2022-02-07T19:14:05.0000000Z"
  ],
  [
    "Project Drawings/Task 4 Project Options/Saw Horse - Version B.pdf",
    "2022-02-07T19:01:58.0000000Z"
  ],
  [
    "Project Drawings/Trestle similar to World Skills/Material Costing for Tressel.xlsx",
    "2025-02-03T02:29:11.0000000Z"
  ],
  [
    "Project Drawings/Trestle similar to World Skills/Tressel Drawing set 90x35.pdf",
    "2024-12-02T03:55:43.0000000Z"
  ],
  [
    "Project Drawings/VET Construction job costing.docx",
    "2025-04-03T01:23:00.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/Australian Apprenticeships Priority List - Factsheet.pdf",
    "2022-06-27T23:15:52.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/BTM news video and question sheet/Australia Has A Tradie Shortage - BTN High.url",
    "2025-06-24T05:34:02.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/BTM news video and question sheet/Question sheet.docx",
    "2025-06-24T05:32:00.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/Construction.pdf",
    "2024-06-19T10:53:03.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/Hansen Yuncken_Women in Construction_Secondary School Resource (2).pdf",
    "2025-03-31T04:48:37.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/Ideas-for-Schools-2021.pdf",
    "2021-02-15T07:58:15.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/masterbuilders.com.au.url",
    "2025-03-06T00:47:39.0000000Z"
  ],
  [
    "Promotion of Construction in Schools/Perceptions-are-not-Reality-May-2017 (1).pdf",
    "2017-05-31T02:27:07.0000000Z"
  ],
  [
    "SBATs/RTO 90333 SBAT Monitoring Procedures V2.docx",
    "2025-09-16T23:56:22.0000000Z"
  ],
  [
    "SBATs/SBAT Information Webinar.pdf",
    "2021-10-06T04:01:59.0000000Z"
  ],
  [
    "temp sharing/Construction Apprentice A3 Book July 2024.pdf",
    "2024-07-17T04:28:36.0000000Z"
  ],
  [
    "temp sharing/NSW Mining Careers Dinners 2025.pdf",
    "2025-02-14T00:59:06.0000000Z"
  ],
  [
    "temp sharing/Prepare to work in the Renewable Energy Industry flyer v5.pdf",
    "2024-11-04T06:33:18.0000000Z"
  ],
  [
    "temp sharing/RIEP Grants Program 2025 T Kelly flyer.pdf",
    "2025-02-11T23:00:29.0000000Z"
  ],
  [
    "temp sharing/School 2 week internship - Feb 2025.pdf",
    "2024-09-03T08:41:58.0000000Z"
  ],
  [
    "temp sharing/VErto/VERTO editable HSC flyer - Bathurst 2026 -APPROVED.pdf",
    "2026-08-06T03:26:08.0000000Z"
  ],
  [
    "temp sharing/VErto/VERTO editable HSC flyer - Dubbo 2026 - APPROVED.pdf",
    "2026-08-06T03:26:28.0000000Z"
  ],
  [
    "temp sharing/VErto/VERTO editable HSC flyer - Mudgee Public 2026 - APPROVED.pdf",
    "2026-08-06T03:31:58.0000000Z"
  ],
  [
    "temp sharing/VErto/VERTO editable HSC flyer - Orange 2026 - APPROVED.pdf",
    "2026-08-06T03:27:20.0000000Z"
  ],
  [
    "temp sharing/VErto/VERTO editable HSC flyer - Young Public 2026 - APPROVED.pdf",
    "2026-08-06T03:31:09.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/2027 Energy Australia Apprentice Info Flyer.pdf",
    "2026-06-04T01:22:05.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/Construction Network meeting 02-08-2022.pdf",
    "2022-08-03T22:55:09.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/Construction Network Meeting recording.pdf",
    "2022-03-24T06:20:16.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/pd-2005-0016-01-06.pdf",
    "2025-02-12T05:17:02.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/Questions and Answers - Construction Network Meeting Term 1 2022.pdf",
    "2022-03-24T06:18:25.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/RTO 2024-2025 Const CPC20220 Course Information Guide N_A.pdf",
    "2023-12-12T03:33:11.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/RTO_2025-2026_Const-_CPC20220_Delivery Resource_Task 3 (2).pdf",
    "2024-01-24T03:38:43.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/SUPEviCen Groups Trainers Crea2682 (8).docx",
    "2026-07-02T22:22:00.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/TAL026 Apprenticeships Sydney Trains information pack FA.pdf",
    "2026-06-22T23:09:45.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/VET Construction job costing.docx",
    "2025-07-22T22:46:00.0000000Z"
  ],
  [
    "VET Construction Updates/Archive/VET CONSTRUCTION Network meeting March 2022.pdf",
    "2022-03-23T22:41:08.0000000Z"
  ],
  [
    "World Skills/2024-VETiS-Regional-Under-18-Consent-Form.pdf",
    "2023-11-28T05:01:53.0000000Z"
  ],
  [
    "World Skills/www.worldskills.org.au.url",
    "2021-03-01T21:20:11.0000000Z"
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/Maths in Construction/Maths in Surveying.png",
    null
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCOM1015 Carry out measurements and calculations/measuring tools.JPG",
    null
  ],
  [
    "a. Programs and Resources/Task 4 Working It Out/4. Additional resources/CPCCOM1015 Carry out measurements and calculations/tape-with-markings-small.jpg",
    null
  ],
  [
    "a. Programs and Resources/Task 5 Options/Option 1 - Brick and Blocklaying/4. Additional resources/CPCCBL2001 Handle and prepare bricklaying and blocklaying materials/Capture.PNG",
    null
  ],
  [
    "Project Drawings/Hot house pic.jpg",
    null
  ]
];

  const SERVER_RELATIVE_ROOT = "/sites/VETstatewidestaffroom/Shared Documents/Construction/Resource Library";
  const FILES_PAGE = "https://schoolsnsw.sharepoint.com/sites/VETstatewidestaffroom/Shared%20Documents/Forms/AllItems.aspx?id=";

  const PURPOSES = {
    "program-planning": "Program and delivery planning",
    "lesson-presentation": "Lesson presentations",
    "teacher-reference": "Teacher manuals and references",
    "student-resource": "Student handouts and workbooks",
    "safety": "WHS and safe work",
    "practical-project": "Practical activities and projects",
    "drawing-specification": "Drawings and specifications",
    "calculation-template": "Calculations and templates",
    "hsc-revision": "HSC revision",
    "video-demonstration": "Videos and demonstrations",
    "work-placement": "Work placement",
    "careers-sbat": "Careers and SBAT",
    "professional-learning": "Professional learning and updates",
    "controlled-orientation": "Controlled assessment orientation",
    "other": "Other Staffroom resources"
  };

  const FORMATS = {
    docx: "Word", doc: "Word", pdf: "PDF", pptx: "PowerPoint", ppsx: "PowerPoint",
    xlsx: "Excel", zip: "ZIP", url: "Staffroom shortcut", mp4: "Video",
    png: "Image", jpg: "Image", jpeg: "Image"
  };

  const UNIT_TASKS = {
    CPCWHS1001: ["task-1"], CPCCWHS1001: ["task-1"],
    CPCCCA2002: ["task-2"], CPCCCA2011: ["task-2"], CPCCCM2005: ["task-2"],
    CPCCWHS2001: ["task-3"],
    CPCCCM1011: ["task-4"], CPCCM1011: ["task-4"], CPCCOM1015: ["task-4"],
    CPCCBL2001: ["task-5-1"], CPCCBL2002: ["task-5-1"],
    CPCCWF2002: ["task-5-2"], CPCCCM2013: ["task-5-2"],
    CPCCJN2001: ["task-5-3"], CPCCJN3004: ["task-5-3"],
    CPCCOM2001: ["task-6"], CPCCOM1013: ["task-6"],
    CPCCVE1011: ["task-7"], CPCCOM1012: ["task-7"]
  };

  const ESSENTIAL_TOKENS = [
    "1. White Card Flow Chart 1 RTO.pdf",
    "2. SASS supported - School Delivered White Card Checklist.docx",
    "/6. Student Guide.docx",
    "CPCWHS1001-Teacher Manual.docx",
    "CPCWHS1001-Learner Manual.docx",
    "CPCWHS1001-Learner Workbook.docx",
    "CPCWHS1001-PPT-Element-01",
    "SW08745 SafeWork NSW Assessment Mapping Matrix",
    "VET Teaching Program Task Tools and Equipment Draft V2.docx",
    "Task 2 - Tools and Equipment - Teacher Guide.docx",
    "Task 2 - Tools and Equipment - Student Guide.docx",
    "/CPCCCA2002 Presentation.pptx",
    "/CPCCCM2005 Presentation.pptx",
    "CPCCCA2011-PPT-Element 01",
    "Timber equipment PPE posters.pdf",
    "worksheet index.docx",
    "VET Teaching Program Task Work Safe Draft.docx",
    "Task 3 - Work Safe - Teacher Guide.docx",
    "Task 3 - Work Safe - Student Guide.docx",
    "CPCCWHS2001-Teacher Manual.docx",
    "CPCCWHS2001-Learner Manual.docx",
    "CPCCWHS2001-Learner Workbook.docx",
    "CPCCWHS2001-PPT-Element 01",
    "risk assessment template.docx",
    "Sample_Evacuation Diagram.docx",
    "VET Teaching Program Task Working it out Draft.docx",
    "Task 4 - Working It Out - Teacher Guide.docx",
    "Task 4 - Working It Out - Student Guide.docx",
    "CPCCCM1011 Presentation.pptx",
    "CPCCOM1015-PPT-Element 01",
    "Basic measuring and calculations.pdf",
    "Pythagorean_1.pdf",
    "3_4_5_layout method.pdf",
    "VET Construction job costing.docx",
    "VET Teaching Program Task 5.1 Draft.docx",
    "Task 5.1 - Bricklaying - Teacher Guide.docx",
    "Task 5.1 - Bricklaying - Student Guide.docx",
    "CPCCBL2001 Presentation.pptx",
    "CPCCBL2002_CQ_LG.docx",
    "Concrete_Mixer_Instruction.pdf",
    "WET SAW.pdf",
    "VET Teaching Program Task 5.2 Draft.docx",
    "Task 5.2 - Tiling - Teacher Guide.docx",
    "Task 5.2 - Tiling - Student Guide.docx",
    "CPCCCM2013 Presentation.pptx",
    "CPCCWF2002_CQ_PP.pptx",
    "Tiling Station Drawing set.pdf",
    "Errors to avoid in tiling.pdf",
    "VET Teaching Program Task 5.3 Draft.docx",
    "Task 5.3 - Joinery - Teacher Guide.docx",
    "Task 5.3 - Joinery - Student Guide.docx",
    "CPCCJN2001 Presentation.pptx",
    "CPCCJN3004_CQ_PP.pptx",
    "Door Drawing Set Complete.pdf",
    "Task 1 Timber Framing Joints Set.pdf",
    "VET Teaching Program Task Project Planning Draft.docx",
    "Task 6 - Project Planning - Teacher Guide.docx",
    "Task 6 - Project Planning - Student Guide.docx",
    "CPCCOM1013-PPT-Element 01",
    "CPCCOM2001 Presentation.pptx",
    "Sample Quote Template (1).xlsx",
    "General Building Specifications - For reference prupsoe only.docx",
    "Gantt Chart.pdf",
    "VET Teaching Program Task Group Project Draft.docx",
    "CPCCOM1012-LG-F-v1.0.docx",
    "CPCCVE1011 Learner Guide.docx",
    "CPCCVE1011 Presentation.pptx",
    "Environmental protection.docx",
    "Conflict Poster.pdf",
    "Quality Control.pdf"
  ].map(value => value.toLocaleLowerCase());

  const TASK_BLOCK_QUERIES = {
    "task-1": [
      ["White Card Flow Chart", "School Delivered White Card Checklist"],
      ["Student Guide.docx", "lln.training", "usi.gov", "Pre-assessment check - Student"],
      ["CPCWHS1001-Teacher Manual", "CPCWHS1001-Learner Manual", "CPCWHS1001-PPT-Element-01"],
      ["Assessment Mapping Matrix", "Pre-assessment check - Teacher"]
    ],
    "task-2": [
      ["CPCCCA2002 Presentation", "Power Tool 1.pdf"],
      ["Timber equipment PPE posters", "worksheet index.docx", "Safety Lockout"],
      ["CPCCCM2005 Presentation", "Power Tool 2.pdf"],
      ["a_using a circ saw", "Power Tool 3.pdf"],
      ["CPCCCA2002 Learner Guide", "Safety Lockout", "Power Tool 4.pdf"],
      ["CPCCCA2011-PPT-Element 01", "CPCCCA2011- Learner Guide", "Timber equipment PPE posters"],
      ["CPCCCA2011-PPT-Element 02", "CPCCCA2011-Learning Activity", "Materials and sustainability"],
      ["VET Teaching Program Task Tools", "Task 2 - Tools and Equipment - Teacher Guide"]
    ],
    "task-3": [
      ["WHS_Intro_Construction", "Duty of care PCBUs", "Consultation activity"],
      ["CPCCWHS2001-PPT-Element 01", "pocketguide-to-construction-safety"],
      ["Construction Signs", "CPCCWHS2001-PPT-Element 02"],
      ["Risk RAM_HOC", "risk assessment template", "Worksheet_Risk assessment"],
      ["CPCCWHS2001-Teacher Manual", "CPCCWHS2001-PPT-Element 03"],
      ["Asbestos fact sheet", "Asbestos Handbook", "CPCCWHS2001-PPT-Element 04"],
      ["CPCCWHS2001-Learner Workbook", "pocketguide-to-construction-safety"],
      ["Sample_Evacuation Diagram", "Whs_Fire", "CPCCWHS2001-PPT-Element 05"]
    ],
    "task-4": [
      ["Basic measuring and calculations", "units of measurement"],
      ["CPCCOM1015-PPT-Element 01", "units of measurement"],
      ["CPCCOM1015-LG", "Numeracy_Perimeter"],
      ["Pythagorean", "calculation_Volume_area", "3_4_5_layout method"],
      ["CPCCOM1015-LAB", "Basic measuring and calculations"],
      ["CPCCCM1011 Presentation", "VET Construction job costing"],
      ["CPCCCM1011 Learner Guide", "Sample Quote", "VET Construction job costing"]
    ],
    "task-5-1": [
      ["Task 5.1 - Bricklaying - Teacher Guide", "CPCCBL2001 Learner Guide"],
      ["CPCCBL2001 Presentation", "Concrete_Mixer_Instruction"],
      ["WET SAW", "CPCCBL2002_CQ_LG"],
      ["CPCCBL2001 Class activity book - Student", "Concrete_Mixer_Instruction"],
      ["CPCCBL2002_CQ_LW", "CPCCBL2002_CQ_LG"],
      ["VET Teaching Program Task 5.1", "CPCCBL2002_CQ_TG"]
    ],
    "task-5-2": [
      ["Task 5.2 - Tiling - Teacher Guide", "CPCCWF2002 Learner Guide"],
      ["CPCCWF2002_CQ_PP", "Errors to avoid in tiling"],
      ["Tiling tools", "CPCCWF2002 Class activity book - Student"],
      ["Tiling Station Drawing set", "Tiling_Photos"],
      ["tiling_1_materials Worksheet", "tiling_1_materials Presentation"],
      ["tiling_2_how to mix motar", "CPCCCM2013 Learner Guide"]
    ],
    "task-5-3": [
      ["Task 5.3 - Joinery - Teacher Guide", "CPCCJN2001 Learner Guide"],
      ["CPCCJN2001 Presentation", "Assembly of components"],
      ["CPCCJN3004_CQ_PP", "Door Drawing Set Complete"],
      ["Task 1 Timber Framing Joints Set", "Joinery _Knockdown Fittings"],
      ["Adhesives theory", "Classification and properties of wood"],
      ["Material Pricing for Door", "Teacher fabrication notes"],
      ["VET Teaching Program Task 5.3", "CPCCJN3004_CQ_TG"]
    ],
    "task-6": [
      ["CPCCOM1013-PPT-Element 01", "CPCCOM1013-Learner Guide"],
      ["CPCCOM1013-PPT-Element 02", "Gantt Chart"],
      ["CPCCOM2001 Presentation", "Technical drawings and plans"],
      ["General Building Specifications", "Read_and_interpret_plans"],
      ["Sample Quote Template", "Carpentry_Quoting"],
      ["Project Drawings", "PLANTER BOX ALL DRAWINGS", "Dog Kennel"],
      ["VET Teaching Program Task Project Planning", "Task 6 - Project Planning - Teacher Guide"]
    ],
    "task-7": [
      ["CPCCOM1012-PPT-Element-01", "CPCCOM1012-LG"],
      ["Environmental protection", "CPCCOM1012-PPT-Element-02"],
      ["Conflict Poster", "CPCCOM1012-PPT-Element-03"],
      ["CPCCVE1011 Presentation", "CPCCVE1011 Learner Guide"],
      ["Quality Control", "Gantt Chart"],
      ["Task 7 Group Project Options", "PLANTER BOX ALL DRAWINGS"],
      ["VET Teaching Program Task Group Project", "Apprenticeship and Traineeship"]
    ]
  };

  function normalise(value) {
    return String(value || "").toLocaleLowerCase();
  }

  function directFileUrl(relativePath) {
    const full = SERVER_RELATIVE_ROOT + "/" + relativePath;
    const encoded = full.split("/").map((segment, index) => index === 0 ? "" : encodeURIComponent(segment)).join("/");
    return "https://schoolsnsw.sharepoint.com" + encoded + "?web=1";
  }

  function containingFolderUrl(relativePath) {
    const folder = relativePath.split("/").slice(0, -1).join("/");
    return FILES_PAGE + encodeURIComponent(SERVER_RELATIVE_ROOT + "/" + folder);
  }

  function taskIdsFor(path, unitCodes) {
    const ids = new Set();
    const directRules = [
      ["Task 1 White Card/", "task-1"],
      ["Task 2 Tools and Equipment/", "task-2"],
      ["Task 3 Work Safe/", "task-3"],
      ["Task 4 Working It Out/", "task-4"],
      ["Option 1 - Brick and Blocklaying/", "task-5-1"],
      ["Option 2 - Tiling/", "task-5-2"],
      ["Option 3 - Joinery/", "task-5-3"],
      ["Task 6 Project Planning/", "task-6"],
      ["Task 7 Group Project/", "task-7"]
    ];
    directRules.forEach(rule => { if (path.includes(rule[0])) ids.add(rule[1]); });
    unitCodes.forEach(code => (UNIT_TASKS[code] || []).forEach(id => ids.add(id)));

    const lower = normalise(path);
    const manualRules = [
      ["3_4_5_layout method", ["task-4"]],
      ["vet construction job costing", ["task-4", "task-6"]],
      ["gantt chart", ["task-6", "task-7"]],
      ["conflict poster", ["task-7"]],
      ["environmental protection", ["task-3", "task-7"]],
      ["quality control", ["task-7"]],
      ["timber joinery", ["task-5-3"]],
      ["furniture_jsa", ["task-3", "task-5-3"]],
      ["manufactured boards", ["task-2", "task-5-3"]],
      ["task 3 project options", ["task-3"]],
      ["task 4 project options", ["task-4"]],
      ["task 7 group project options", ["task-7"]],
      ["bricklaying", ["task-5-1"]],
      ["tiling", ["task-5-2"]],
      ["joinery", ["task-5-3"]],
      ["work placement", ["task-7"]],
      ["sbat", ["task-7"]]
    ];
    manualRules.forEach(rule => { if (lower.includes(rule[0])) rule[1].forEach(id => ids.add(id)); });
    return [...ids];
  }

  function purposeFor(path, ext, controlled) {
    const lower = normalise(path);
    if (controlled) return "controlled-orientation";
    if (lower.startsWith("c. hsc revision hub/")) return "hsc-revision";
    if (lower.startsWith("d. work placement/")) return "work-placement";
    if (lower.startsWith("sbats/") || /\b(apprentice|trainee|career|sbat)\b/.test(lower)) return "careers-sbat";
    if (lower.startsWith("professional development opportunities/") || lower.startsWith("vet construction updates/")) return "professional-learning";
    if (ext === "mp4" || /\b(video|demonstration|webinar)\b/.test(lower)) return "video-demonstration";
    if (lower.includes("/2. program/") || /\bteaching program\b/.test(lower)) return "program-planning";
    if (["pptx", "ppsx"].includes(ext)) return "lesson-presentation";
    if (lower.startsWith("project drawings/") || /\b(drawing|plans?|specification|blueprint|assembly)\b/.test(lower)) return "drawing-specification";
    if (/\b(whs|safe|safety|risk|hazard|ppe|jsa|jsea|swms|sds|asbestos|evacuation|fire|lockout|silica)\b/.test(lower)) return "safety";
    if (/\b(calcul|numeracy|measurement|perimeter|volume|area|cost|quote|pricing|gantt|estimate)\b/.test(lower) || ext === "xlsx") return "calculation-template";
    if (/\b(project|practical|mixer|wet saw|tool|equipment|materials)\b/.test(lower)) return "practical-project";
    if (/\b(student|learner|workbook|worksheet|activity book)\b/.test(lower)) return "student-resource";
    if (/\b(teacher|trainer|manual|handbook|hyperlinked resources)\b/.test(lower)) return "teacher-reference";
    if (lower.startsWith("promotion of construction in schools/")) return "careers-sbat";
    return "other";
  }

  function useForPurpose(purpose) {
    const use = {
      "program-planning": "Plan delivery, sequencing and local sign-off.",
      "lesson-presentation": "Teach or explain the linked topic in class.",
      "teacher-reference": "Prepare teaching and check source guidance.",
      "student-resource": "Prepare an authorised learner handout or activity.",
      "safety": "Prepare WHS teaching, procedures or safe-work discussion.",
      "practical-project": "Prepare a practical activity, tool lesson or project.",
      "drawing-specification": "Prepare plan reading, set-out or project construction.",
      "calculation-template": "Teach calculations or prepare planning records.",
      "hsc-revision": "Prepare HSC revision and exam practice.",
      "video-demonstration": "Prepare a demonstration or discussion prompt.",
      "work-placement": "Prepare or support work-placement requirements.",
      "careers-sbat": "Support careers, pathway or SBAT discussion.",
      "professional-learning": "Support staff currency, networking or professional learning.",
      "controlled-orientation": "Locate staff-only assessment or answer material; follow RTO controls.",
      "other": "Open and review this Staffroom resource for an appropriate teaching use."
    };
    return use[purpose];
  }

  const resources = SOURCE_FILES.map((row, index) => {
    const relativePath = row[0];
    const modified = row[1];
    const fileName = relativePath.split("/").at(-1);
    const ext = (fileName.split(".").at(-1) || "").toLocaleLowerCase();
    const unitCodes = [...new Set((relativePath.match(/\bCPC[A-Z]{2,6}\d{3,4}\b/g) || []).map(code => code.toUpperCase()))];
    const lower = normalise(relativePath);
    const controlled = /\b(assessor|answer|assessment|mapping matrix|trainer theory|observation checklist|pretest)\b/.test(lower);
    const purpose = purposeFor(relativePath, ext, controlled);
    let currencyStatus = "Verify current Staffroom version";
    if (controlled) currencyStatus = "RTO-controlled / staff-only";
    else if (/\bdraft\b/.test(lower)) currencyStatus = "Draft — Teacher/RTO to confirm";
    else if (/\barchive\b|old syllabus|temp sharing/.test(lower) || lower === "a. programs and resources/document library.url") currencyStatus = "Archive / superseded check";
    else if (/\bcopy\b|\(\d+\)\./.test(lower)) currencyStatus = "Duplicate-copy check";
    else if (/\b(2013|2015|2017|2018|2021|2022)\b/.test(lower) || lower.includes("cpcohs cluster ho asbestos handbook")) currencyStatus = "Dated resource — check currency";
    const essential = ESSENTIAL_TOKENS.some(token => lower.includes(token));
    return {
      id: "resource-" + String(index + 1).padStart(3, "0"),
      title: fileName,
      fileName,
      relativePath,
      directUrl: directFileUrl(relativePath),
      containingFolderUrl: containingFolderUrl(relativePath),
      format: FORMATS[ext] || ext.toUpperCase() || "File",
      extension: ext,
      purpose,
      purposeLabel: PURPOSES[purpose],
      useFor: useForPurpose(purpose),
      taskIds: taskIdsFor(relativePath, unitCodes),
      unitCodes,
      essential,
      controlled,
      currencyStatus,
      hideByDefault: currencyStatus === "Archive / superseded check",
      lastModifiedUtc: modified,
      sourceBreadcrumb: relativePath.split("/").slice(0, -1)
    };
  });

  window.CONSTRUCTION_RESOURCE_DATA = {
    meta: {
      sourceCount: resources.length,
      inventoriedAt: "2026-09-01",
      sourceLocation: "VET statewide staffroom > Construction > Shared > Resource Library",
      linkMethod: "Exact file path from the authenticated SharePoint search index and folder UI; stable path-based ?web=1 link."
    },
    purposes: PURPOSES,
    formats: FORMATS,
    resources,
    taskBlockQueries: TASK_BLOCK_QUERIES,
    directFileUrl,
    containingFolderUrl
  };
})();
