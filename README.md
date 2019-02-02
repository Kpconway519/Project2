#                      **************************************
#                       |/    / /               / /%%%%%%/ |                                 
#                       |    / /               / /%%%%%%/ /|                                 
#                       |   / /               / /%%%%%%/ / |                                 
#                       |  / /               / /%%%%%%/ /  |                                 
#                       | / /               / /%%%%%%/ /   |                                 
#                       |/ /               / /%%%%%%/ /    |                                 
#                       | /               / /%%%%%%/ /     |                                 
#                       |/               / /%%%%%%/ /      |                                 
#                       |               / /%%%%%%/ /       |                                 
#                       |              / /%%%%%%/ /        |
#
#                                     Barberoo!
#
#                       |           / /%%%%%%/ /           |                                 
#                       |          / /%%%%%%/ /           /|                                 
#                       |         / /%%%%%%/ /           / |                                 
#                       |        / /%%%%%%/ /           / /|                                 
#                       |       / /%%%%%%/ /           / / |                                 
#                       |      / /%%%%%%/ /           / /  |                                 
#                       |     / /%%%%%%/ /           / /   |                                 
#                       |    / /%%%%%%/ /           / /    |                                 
#                       |   / /%%%%%%/ /           / /    /|                                 
#                       |  / /%%%%%%/ /           / /    / |                                 
#                       | / /%%%%%%/ /           / /    / /|                                 
#                       |/ /%%%%%%/ /           / /    / / |           
#                      **************************************                    




# Authors in Alphabetical Order
* Kevin Conway--Backend, logic and documentation
* Austin Fortson--Frontend logic and design
* Christopher Killen--Backend logic and security
* Mohamed Naji--Graphic design and Theme
* Wynston Saamoi--


#                    ///////////////////////////
#                   //    Project Purpose    //
#                  ///////////////////////////

We decided to do a project which could be developed into a useful service, while giving the team experience with new technologies, and room to develop expertise with existing skills. With that in mind, Mohamed came up with the idea for Barberoo--a mobile service for ordering a barber to come to your house. Initially, we have the order flow ready, as well as integration with Express Sessions, and plans for expansion including a review system, map integration, and full mobile support.

Not only does this app have the potential to be a legitimate service, but it also reinforced skills which can be easily applied across many different web development roles including order flow design, persistence via express sessions, and security through use of sequelize (reduces the risk of SQL injection) and encryption for passwords.

#  ///////////////////
# //      END      //
#///////////////////


#                               ////////////////////
#                              //  HOW IT WORKS  //
#                             ////////////////////

Step 0: Go to the /admin page and seed your database with the appropriate barbers and services for your users. 

Step 1: The user starts on the initial landing page, which allows you to select either customer or barber. Right now, Customer is the only one that is fully fleshed out. Select the "customer" tab and click "Looking for a Haircut?"

Step 2: After this, the user is Prompted to enter a username and password. When you do this, there must be at least one existing user in the database for it to function correctly. This is also where the session is created, which allows for data persistence throughout the project.

Step 3: Once the user makes a username and password, they are redirected to the order page where they may select up to 3 services. We decided to go with 3 because haircuts are usually pretty straightforward. In the future we may add the ability to add more services, but 3 works for now. Once the appropriate services are selected, click the button at the bottom of the page to proceed on. 
    *You must have at least one Service in the database for this to work.

Step 4: On this screen, the user selects a barber from the options. This pulls from the barber database, so once again you must have at least one barber inside the database to use this. Once the barber is selected, click the button at the bottom to proceed.

Step 5: This is the Appointments screen. Here, you select a time for the appointment. Once that is done, click the button at the bottom again to proceed to the confirmation screen.

Step 6: Confirmation screen. You're all done! This screen recaps and lets you know details of your upcoming appointment.


#  //////////////////
# //      END     //
#//////////////////
