# Installing on Amazon EC2

See also: [Amazon Elastic Compute Cloud (EC2) User Guide][]

This document describes the procedure to install 'Core' on Amazon EC2.

## Sign In to Amazon Web Services (AWS)

It is assumed one already has a username and password for an Amazon Web
Services account. Sign In by going to this web page:

<http://aws.amazon.com>

## The Amazon Web Services (AWS) Management Console

Once Signed In, to see the AWS Management Console, go to

<https://console.aws.amazon.com/console/home?#>

## Amazon Elastic Compute Cloud (EC2) Setup

From the AWS Management Console choose **EC2** from the Compute &
Networking category.

### EC2 Dashboard

From the upper right **EC2 Dashboard** page select the region (i.e. EU
(Ireland)). Next, click 'Launch Instance'.

### Step 1: Choose an Amazon Machine Image (AMI)

From the Quick Start tab, click 'Select' next to the **Amazon Linux
AMI**, with the **64-bit** checkbox selected.

### Step 2: Choose an Instance Type

From the Micro instances tab, choose the **t1.micro** instance type.
Choose 'Next: Configure Instance Details'.

...

to do ...

...

### Step 7: Review Instance Launch

...

Optional: *Edit the Security Groups*

...

Click the button '**Launch**'

### Select an existing key pair or create a new key pair

A dialogue will prompt for 'Create a new key pair' or 'Choose an
existing key pair'. For the second option select a key pair from the
list (e.g. **tacit-core-key-pair-eu**).

Confirm by ticking the checkbox for '*I acknowledge...*' before clicking
the '**Launch Instances**' button.

### Launch Status

If all goes well, a notification will state: *Your instance is now
launching*.

Click the '**View Instances**' button.

### EC2 Dashboard: Instances

Select the newly created instance and edit its Name (e.g. Tacit - Core).
On the bottom half of the EC2 Management Console, on tab 'Description', one is shown the Public DNS for the selected instance (e.g. ec2-54-72-60-113.eu-west-1.compute.amazonaws.com). This Public DNS can be used to connect to the server at Amazon via SSH. 

### Connecting via SSH

Use the Public DNS (e.g. ec2-54-72-60-113.eu-west-1.compute.amazonaws.com) to connect to the running EC2 instance (e.g. Tacit - Core) on Amazon. Amazon does **not** provide a custom username and password for SSH connections. Instead, they use the key pair file one created a couple of steps ago (a more secure method of authentication).

This example is for **Mac OS X**:

Software used:
- **vSSH**: vSSH is a customizable SSH and Telnet client with macros and keys sharing. One can use this app on their Mac and iPad to remotely log into their AWS instances. Get it from the Mac App Store at https://itunes.apple.com/us/app/vssh/id583272886?mt=12&affId=1503186

Configure the security private key in vSSH by choosing vSSH > Preferences and navigate to the Security tab. Click + and open the **.pem** file saved earlier. Once this is added, close the Preferences window.

Connect with vSSH by entering the instance's Public DNS address (e.g. ec2-54-72-60-113.eu-west-1.compute.amazonaws.com) shown in the EC2 Management Console in the Host field. For the Name field type something meaningful (e.g. Tacit - Core). For the Protocol choose SSH, and for the Port type 22. Optionally enter a Username (i.e. ec2-user). From the dropdown menu for the Private key select the **.pem** file added before. For easy future reference, make sure to Save the connection by choosing 'Save' (first time saving requires clicking Save New).

Click the 'Connect' button.

A Terminal window will appear. If asked to log in, enter 'ec2-user' as the username.

You are now logged-in into your instance!

...

This example is for **Windows**:

Software used:
- **PuTTY**: PuTTY is an SSH and Telnet client for Windows. Get it at http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html

...

## Amazon Machine Image (AMI) Setup

An Amazon Machine Image (AMI) is a template that contains a software
configuration (for example, an operating system, an application server,
and applications e.g Core). From an AMI, one launches an instance, which
is a copy of the AMI running as a virtual server in the cloud. One can
launch multiple instances of an AMI. Instances keep running until one
stops or terminates them, or until they fail. If an instance fails, one
can launch a new one from the AMI.

...

## Relational Database Setup

To get a managed relational database in the cloud, here we use Amazon
Relational Database Service (Amazon RDS) to launch a database instance.
Although you can set up a database on an EC2 instance, Amazon RDS offers
the advantage of handling your database management tasks, such as
patching the software, backing up, and storing the backups.

  [Amazon Elastic Compute Cloud (EC2) User Guide]: docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html‎
  
Make the next more readable:

Amazon offers a cloud-based relational database service called RDS. The first type of database available via RDS was MySQL. This article contains information on how to setup and then connect to a MySQL RDS instance.

The first step is to sign up for RDS. RDS is one of the tools available via the Amazon Web Services (AWS) family of products. To sign up, visit http://aws.amazon.com/rds/

Once signed up for RDS, Amazon makes it easy to set up a database instance using the AWS Management Console for RDS. Once you have an Amazon Web Services account and have signed up for RDS, you can login to the AWS Management Console to manage your RDS database instances. Once logged in, select the Amazon RDS tab via the management console. The Launch DB Instance option will take the user through the steps of creating the database instance. These include configuration options such as the version of the MySQL database, the size of the database, the allocated storage, the master user name and password, and the database name.

When configuring the instance via the Launch DB Instance tool, make sure to remember the master user name and master password entered when creating the db instance. These are the user and password you will use when connecting. Also, remember the database name entered during the db instance configuration as you will need this when setting up a connection.

After completing the Launch DB Instance process, your MySQL database instance is up and running. However, to allow connections to your database from over the network, there are some security settings that need configured via the DB Security Groups section of the RDS management console.

Click the DB Security Groups option, then select an existing security group such as the default security group or create a new security group. Click the checkbox next to the security group, and add IP addresses that are allowed to connect to the MySQL RDS instance via the CIDR/IP option. In order to connect to the instance from your local machine, you will need to add the IP address of your computer. You can add a single IP address, i.e., 1.1.1.1, or a range of IP addresses such as 1.1.1.1/32.

Once the database instance is up and running, and the appropriate IP addresses are added via the DB Security Groups option, you can click on the DB instance via the AWS console to get the endpoint of the database. This is the host name to enter when configuring a connection to the database. The following is an example of an endpoint: dbinstancename.something..us-east-1.rds.amazonaws.com

To create a connection to the Amazon RDS MySQL database via RazorSQL, select the Connections -> Add Connection Profile option, select MySQL as the database type, and select JDBC (MySQL Connector/J) as the connection type. Enter the master user name entered via the Launch DB Instance process as the Login, and the master password entered via the Launch DB Instance process as the password. Enter the endpoint displayed in the RDS management console as the Host, and enter the database name entered via the Launch DB Instance option as the database name. Click Connect. Assuming the information entered was correct, and the IP address of your machine was added via the DB Security Group, the connection should be successful.
