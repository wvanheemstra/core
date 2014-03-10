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
list (e.g. **vanheemstrasystems-key-pair-eu**).

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

Connect with vSSH by entering the instance's Public DNS address (e.g. ec2-54-72-60-113.eu-west-1.compute.amazonaws.com) shown in the EC2 Management Console in the Host field. From the dropdown menu for the Private key select the **.pem** file added before.

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
