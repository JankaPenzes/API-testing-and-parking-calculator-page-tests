**Test case ID:** @my-login-01

**Test case description:** To test whether the login is successful with the correct user and password

**Positive/negative:** Positive

**Test steps:** 

1.  Type “John Doe” in the Username field
2.  Type "ThisIsNotAPassword" in the Password field
3.  Click on the Login button

**Test data:** "John Doe", "ThisIsNotAPassword"

**Expected result:** Successful login to the site

**Actual result:** Successful login to the site

**Test case ID:** @my-login-02

**Test case description:** To test whether an error message appears when using an incorrect username and password

**Positive/negative:** Negative

**Test steps:** 

1.  Type “John” in the Username field
2.  Type "ThisIsNot" in the Password field
3.  Click on the Login button

**Test data:** “John”, "ThisIsNot"

**Expected result:** Unsuccessful login to the site, an error message appears

**Actual result:** Unsuccessful login to the site, error message appears ("Login failed! Please ensure the username and password are valid.")

**Test case ID:** @my-login-03

**Test case description:** To test whether an error message appears when using an incorrect username and correct password

**Positive/negative:** Negative

**Test steps:** 

1.  Type “John” in the Username field
2.  Type "ThisIsNotAPassword" in the Password field
3.  Click on the Login button

**Test data:** “John”, "ThisIsNotAPassword"

**Expected result:** Unsuccessful login to the site, an error message appears

**Actual result:** Unsuccessful login to the site, error message appears ("Login failed! Please ensure the username and password are valid.")

**Test case ID:** @my-login-04

**Test case description:** To test whether an error message appears when using an incorrect username and correct password

**Positive/negative:** Negative

**Test steps:** 

1.  Type “John Doe” in the Username field
2.  Type "ThisIsNot" in the Password field
3.  Click on the Login button

**Test data:** “John Doe”, "ThisIsNot"

**Expected result:** Unsuccessful login to the site, an error message appears

**Actual result:** Unsuccessful login to the site, error message appears ("Login failed! Please ensure the username and password are valid.")

**Test case ID:** @my-appointment-01

**Test case description:** To test whether making an appointment is possible by filling in all the fields and see if appointment confirmation appears

**Positive/negative:** Positive

**Test steps:** 

1.  Type “Tokyo CURA Healthcare Center” in the Facility field
2.  Choose "Medicaid" as Program
3.  Type "18/12/2024" in the Date field
4.  Type "Digestion problems" in the Comment field
5.  Click on "Make appointment" button

**Test data:**“Tokyo CURA Healthcare Center”, "Medicaid", "18/12/2024", "Digestion problems"

**Expected result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Actual result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Test case ID:** @my-appointment-02

**Test case description:** To test whether making an appointment is possible by filling in all the fields and see if appointment confirmation appears

**Positive/negative:** Positive

**Test steps:** 

1.  Type “Hongkong CURA Healthcare Center” in the Facility field
2.  Choose "Medicare" as Program
3.  Type "18/12/2024" in the Date field
4.  Type "Digestion problems" in the Comment field
5.  Click on "Make appointment" button

**Test data:** “Hongkong CURA Healthcare Center”, "Medicare", "18/12/2024", "Digestion problems"

**Expected result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Actual result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Test case ID:** @my-appointment-03

**Test case description:** To test whether making an appointment is possible by filling in all the fields and see if appointment confirmation appears

**Positive/negative:** Positive

**Test steps:** 

1.  Type “Seoul CURA Healthcare Center” in the Facility field
2.  Choose "None" as Program
3.  Type "18/12/2024" in the Date field
4.  Type "Digestion problems" in the Comment field
5.  Click on "Make appointment" button

**Test data:** “Seoul CURA Healthcare Center”, "None", "18/12/2024", "Digestion problems"

**Expected result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Actual result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Test case ID:** @my-appointment-04

**Test case description:** To test whether making an appointment is possible by filling in all the fields, except the "Comment" field and see if appointment confirmation appears

**Positive/negative:** Positive

**Test steps:** 

1.  Type “Seoul CURA Healthcare Center” in the Facility field
2.  Choose "None" as Program
3.  Type "18/12/2024" in the Date field
5.  Click on "Make appointment" button


**Test data:** “Seoul CURA Healthcare Center”, "None", "18/12/2024"

**Expected result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment. 

**Actual result:** Successfull appointment, an appointment confirmation page appears with a confirmation message ("Please be informed that your appointment has been booked as following:"). Data on the confirmation page is identic with the data introduced when making the appointment.

**Test case ID:** @my-appointment-05

**Test case description:** To test if an error message appears if we don't introduce a date for our appointment 

**Positive/negative:** Negative

**Test steps:** 

1.  Type “Seoul CURA Healthcare Center” in the Facility field
2.  Choose "None" as Program
3.  Type "Digestion problems" in the Comment field

**Test data:** “Seoul CURA Healthcare Center”, "None", "Digestion problems"

**Expected result:** Unsuccessfull appointment, the appointment confirmation page is not appearing

**Actual result:** Unsuccessfull appointment, the appointment confirmation page is not appearing