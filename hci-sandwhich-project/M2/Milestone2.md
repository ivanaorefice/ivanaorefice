# Milestone 2: Prototyping and Heuristics - SandWHICH



## Storyboards

### Storyboard # 1:

We have chosen this scenario because it represents a typical day of a student which is our main target. This scenario favors the user's need to not waste time in case of lessons or laboratories or work at lunch time. The user can order the sandwich and go to the sandwich shop just to pick up it without queuing.
The strongest point of the storyboard is the possibility of order your sandwich easily from the study room and avoid the long queue outside the shop to do this task. A possible weaknesses is the sandwich preparation time which could be variable.
The storyboard, this way, can satisfy two user needs, which are:
- The customer can save time during the lunch break, he can spend more time studying or having a break 
instead of make the typical long queue on the shop.
- The user can pay in advance during the order step via web application 

![](/M2/Storyboard/storyboard_1.jpg)


### Storyboard # 2:  

We have chosen this storyline to meet the needs of the user and the manager of the shop with particular attention to the managerial side. This scenario is effective and time saving for both(user/manager).
The strongest point from the manager point of view is that he can manage orders in a smart way, the web app accepts new customer orders and organize it in a priority queue. The manager/chef simply read the current order information and prepare it. When the sandwich is ready, the employee can easily notify it to the user and go on with the next order, the orders queue will be automatically update. 
One more strongest point is that the manager can interact physically on the smart device, touching virtual buttons or use the voice based interaction, so he/she does not need to remove the gloves to interact with the device.

This storyline fulfils these 2 user needs: 

- A smart way to manage orders, simplifying customer interfacing
- Delete dead times in the sandwich preparation workflow

![](/M2/Storyboard/storyboard_2.jpg)


## Paper Prototypes

### Prototype # 1:

This prototype analyzes the user's experience in line with storyboard #1. Here we can see the main navigation screens during a new customer making order.
Assuming the user is already logged, he can navigate on the web app in order to create his customized sandwich. In few taps the user can select bread type, the main ingredient, the second one and the sauce to add. 
In the end, he can choose the payment option and send the order. We assume that user account has already a saved payment method.
The system assigns an ID refered to new order and notify it to customer. 

<figure class="image">
  <img src=/M2/p1/p1_1.jpg width="370" height="490" />
  <figcaption>Initial screen of the App</figcaption>
</figure>

<figure class="image">
  <img src=/M2/p1/p1_7.jpg width="370" height="490" />
  <figcaption>Order Screen 1</figcaption>
</figure>

<figure class="image">
  <img src=/M2/p1/p1_8.jpg width="370" height="490" />
  <figcaption>Order Screen 2</figcaption>
</figure>

<figure class="image">
  <img src=/M2/p1/p1_9.jpg width="370" height="490"/>
  <figcaption>Order Screen 3</figcaption>
</figure>

<figure class="image">
  <img src=/M2/p1/p1_10.jpg width="370" height="490" />
  <figcaption>Order Screen 4</figcaption>
</figure>

<figure class="image">
  <img src=/M2/p1/p1_11_new.jpg width="370" height="490" />
  <figcaption>Choose payment mode</figcaption>
</figure>
<figure class="image">
  <img src=/M2/p1/p1_13.jpg width="370" height="490" />
  <figcaption>Order confirm and ID notification</figcaption>
</figure>
<figure class="image">
  <img src=/M2/p1/p1_14.jpg width="370" height="490" />
  <figcaption>Notification about ready sandwich </figcaption>
</figure>

### Prototype # 2:

This prototype shows the mangerial side of the project through which the manager can see the current orders. He can interact with it using touchscreen and voice based commands, e.g. he can send the notification to the customer when the order is ready by just saying "ORDER NUMBER [number] IS READY". There is another clause which deals with the maximum order a manager can receive in a single time. Manager can edit this clause. 
For every new order received a notification appears and the new order is insert in the list, in line with some priority rules.  
When a sandwich is ready the manager tap on DONE button or use the vocal command, automatically a notification will be send to customer and after few time the ready order disapper, the manager can go on with next order.

<figure class="image">
  <img src=/M2/p2/one_order.jpg width="500" height="400" />
  <figcaption>Default screen page, assume there is already one order in queue</figcaption>
</figure> 

 
<figure class="image">
  <img src=/M2/p2/notify.jpg width="500" height="400" />
  <figcaption>Receiving new order notification</figcaption>
</figure>  


<figure class="image">
  <img src=/M2/p2/two_orders.jpg width="500" height="400" />
  <figcaption>The new order is the first in the priority list</figcaption>
</figure>  


<figure class="image">
  <img src=/M2/p2/notify_ready.jpg width="500" height="400" />
  <figcaption>After pressed the DONE button, a notification appers</figcaption>
</figure>  



## Heuristic Evaluation

We prepared two different prototypes made with some pieces of paper to simulate the application screens. For every interaction that the user can do on our app, we prepared the relative screen and system change. 

**THE FIRST EVALUATION REFERS TO PROTOTYPE #2**

In detail, this prototype is about the manager's experience, so all the screens are about the orders menagement. The second one is about customer side and with that prototype we can simulate the user registration and login and all the steps to order a sandwich.
The evaluation was performed by "LET'S PARTY" group.
During the heuristic evaluation a facilitator has simulated to be the shop manager (for the first evaluation).
During that, the other person took notes about the experience, the observations and the key points of our system. After a short introduction we presented the first prototype home page to the facilitator and he stared to navigate in the app. 
First of all, he checked the orders list that some customers did before (already present in the system). The facilitator managed those orders by changing the status (appended, ready, delivered..) and sending relative notifications to the customer.
After the simulation, the testers asked us about some features and other info to better understand all the workflow.

<figure class="image">
  <img src=/M2/pics/1a.jpg width="600" height="400" />
</figure>
<figure class="image">
  <img src=/M2/pics/1b.jpg  width="600" height="400" />
</figure>
<figure class="image">
  <img src=/M2/pics/1c.jpg  width="600" height="400" />
</figure>

The results obtained from the evaluation can be summarized as follows:

1. The orders are managed vocally, in the sense that both manager can change status of an order and send notifications to customers by just using their voice, because the tablet in the kitchen would be able to recognize vocal commands. From the evaluation, it emerged that the application will be more complete if the manager/employee also has the possibility to manage orders by using also touchscreen;

2. It was not clear how the orders' limitation was insert; it must be possible for manager to have a way to set how many orders he/she can accept online.


**THE SECOND EVALUATION REFERS TO PROTOTYPE #1**

During the second evaluation, the tester found out how to create a sandwich and make an order.
In that simulations the facilitator tried to make errors to discover how the user can understand when he/she got wrong and what to do in case of mistake. Moreover, the tester found out there is a step-by-step guide, which can be used to learn how the application works correctly.

<figure class="image">
<img src=/M2/pics/2a.jpg width="600" height="400" />
</figure>

<figure class="image">
  <img src=/M2/pics/2b.jpg width="600" height="400" />
</figure>

<figure class="image">
  <img src=/M2/pics/2c.jpg  width="600" height="400" />
</figure>

The results obtained from the two evaluations can be summarized as follows:

1. It was not clear enough how to move from a screen to another, when ordering a sandwich. It was suggested to make it clearer, for example by adding arrows to suggest to swipe right and left;
2. give the possibility to the customer to select at what time he wants to have the sandwich ready, compatibly with manager's work load.



**Conclusions**

After the evaluations, the testers compile the Nielsen Heuristic Questionnaire, which help us to summarize and understand how the tests has gone.
[Nielsen's Heuristics for Prototype #1 and #2](https://docs.google.com/spreadsheets/d/1ofbplzHbd-6hVVgWOPUZJ1twm9GCKI82xppLgKOSs4o/edit#gid=0)


Summarizing the advices received, from the user's point of view, it would be useful to give the possibility to choose at what time the sandwich has to be ready, especially if you order it in great advance. From the manager point of view it would be useful to have the choice to perform the operation in a non-voice based way, even if the voice-based is the most comfortable one, because the employees can control everything with voice and don't have to touch the (often dirty) screen and keyboard, it should be taken into consideration also that the kitchen is often noisy; 
we also want to add the possibility of choose the order limitations.

From the heuristic evaluation, surely we are going to implement every feature that was suggested, especially from the manager side, to give the manager more control to the operations that can perform. Moreover, we want to give services to both customers (the ones that order the sandwiches) and manager (the one that prepares, with all his crew, the sandwiches), so the goal will be to implement a *"two-face"* application, by merging somehow Prototype #1 and #2.
