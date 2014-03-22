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

## Installing Node.js and NPM on EC2

Sources: 
- http://thefloppydisk.wordpress.com/2013/04/25/a-node-js-application-on-the-amazon-cloud-part-1-installing-node-on-an-ec2-instance/comment-page-1/
- http://thefloppydisk.wordpress.com/2013/04/25/a-node-js-application-on-the-amazon-cloud-part-2-adding-a-database/

... more to follow
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

For Tacit - Core, we choose '**MySQL Community Edition**', followed by clicking the 'Select' button to the right.

For testing and development purposes, as well as for finacial reasons, we choose '**No, this instance is intended for use outside of production or under the RDS Free Usage Tier**'. Click on the 'Next Step' button.

**DB Instance Details**

Here is the setting for Tacit - Core:

DB Engine: mysql
License Model: general-public-license
DB Engine Version: 5.6.13
DB Instance Class: db.t1.micro
Multi-AZ deployment: No
Auto Minor Version Upgrade: Yes
Allocated Storage: 5 GB
Use Provisioned IOPS: No
DB Instance Identifier: tacitcoredbinstance
Master Username: master
Master Password: ******** (e.g. password)

When configuring the instance via the Launch DB Instance tool, make sure to remember the master user name and master password entered when creating the db instance. These are the user and password you will use when connecting. Also, remember the database name entered during the db instance configuration as you will need this when setting up a connection.

Click on the 'Next Step' button.

**Additional Config**

Here is the setting for Tacit - Core:

Database Name: tacitcoredb
Database Port: 3306
Choose a VPC: Default VPC (vpc-8bf2e0e9)
DB Subnet Group: default
Publicly Accessible: Yes
Availability Zone: No Preference
Option Group: default:mysql-5-6
Parameter Group: default:mysql5.6
VPC Security Group(s): default (VPC)

Click on the 'Next Step' button.

**Management Options**

Here is the setting for Tacit - Core:

Enabled Automatic Backups: Yes
Backup Retention Period: 1 days
Backup Window: No Preference
Maintenance Window: No Preference

Click on the 'Next Step' button.

**Review**

When OK with all settings, click the 'Launch DB Instance' button.

A confirmation in green, **Your DB instance is being created**, will show.
Click 'View your DB instances on the DB instances page'.

After completing the Launch DB Instance process, your MySQL database instance is up and running. However, to allow connections to your database from over the network, there are some security settings that need configured via the DB Security Groups section of the RDS management console.

Click the **DB Security Groups** option, then select an existing security group such as the default security group or create a new security group. NOTE: As in our settings we are in the EU region, we have to go to the EC2 Console and select our VPC Security Group. Here we use the **default vpc security group**. Name it 'Tacit - Core'.

Click on the RDS security group associated with the RDS instance instance you are interested in (i.e. **Tacit - Core**).
The drop-down menu for that security group should present you with 3 tabs (Details, Inbound, Outbound). Click Inbound.
If you created your RDS instance through EB also, then you should see a rule for your EB security group already (hence, it has the same name as the security group name in RDS). You pretty much need to **add a new rule** for your local computer.

Find your public IP address. If you’re on linux (hopefully you are), run sudo apt-get install curl and then curl http://ipecho.net/plain. Your IP address should be echoed. If this is not suitable for you, just go to http://whatismyip.com/.

Back in the AWS console, click "Add Rule". For Type choose “MySQL”. Leave Protocol to "TCP". You need to access port 3306, which should be applied correctly automatically if you chose the right rule. In the “Source” field, add your IP address, with a “/32″ (your CIDR) at the end – something like “000.00.00.00/32″. And then “Save”. Done!

Once the database instance is up and running, and the appropriate IP addresses are added via the DB Security Groups option, you can click on the DB instance via the AWS console to get the endpoint of the database. This is the host name to enter when configuring a connection to the database. The following is an example of an endpoint: **tacitcoredbinstance.cva2malahinw.eu-west-1.rds.amazonaws.com:3306**

Before being able to create triggers on tables in the database, please follow the following instructions to avoid triggers being ignored because of a lack of SUPER privileges:

- Open the RDS web console.
- Open the “Parameter Groups” tab.
- Click "Create DB Parameter Group". On the dialog, select the MySQL family compatible to your MySQL database version (e.g. mysql5.6), give it a name (e.g. **tacitcore**), description (e.g. **Tacit - Core**) and confirm with "Yes, Create".
- Select the just created Parameter Group and issue “Edit Parameters”.
- Look for the parameters ‘character_set_client’, ‘character_set_connection’, ‘character_set_database’, ‘character_set_filesystem’, ‘character_set_results’, ‘character_set_server’ and set their values to ’utf8′.
- Look for the parameter ‘default_storage_engine’ and make sure its value is set to ’InnoDB′.
- Look for the parameter ‘log_bin_trust_function_creators’ and set its value to ’1′.
- Save the changes.
- Open the “Instances” tab. Expand your MySQL instance (i.e. **tacitcoredbinstance**) and issue the “Instance Action” named “Modify”.
- Select the just created Parameter Group and enable “Apply Immediately”.
- Click on “Continue” and confirm the changes with “Modify DB Instance”.
- Again, open the “Instances” tab. Expand your MySQL instance (**tacitcoredbinstance**) and wait for the name for the Parameter Group change from tacitcore (applying) to tacitcore (pending-reboot).
- Don't forget: Issue the “Instance Action” named “Reboot”. Confirm with "Yes, Reboot". The name of the Parameter Group will change to tacitcore (in-sync) and the Status of the instance will change from "rebooting" to "available".
From now on this instance will accept table generation with triggers.

To create a connection to the Amazon RDS MySQL database via **Navicat** (see http://www.navicat.com), select from the button on the bottom left -> New Connection ... option, select MySQL as the database type. Give the connection a suitable name, such as **tacit_core_eu_rds**. Enter the endpoint displayed in the RDS management console as the Host Name / IP Address (e.g. **tacitcoredbinstance.cva2malahinw.eu-west-1.rds.amazonaws.com**). Enter the master user name (i.e. **master**) entered via the Launch DB Instance process as the Login, and the master password (e.g. **password**) entered via the Launch DB Instance process as the password. Click "Test Connection". Assuming the information entered was correct, and the IP address of your machine was added via the DB Security Group, the connection should be successful. Confirm your new connection with "OK".
