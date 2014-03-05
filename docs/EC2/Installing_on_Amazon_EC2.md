Installing on Amazon EC2
========================

See also: [Amazon Elastic Compute Cloud (EC2) User Guide][1]

[1]: <docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html‎>



This document describes the procedure to install 'Core' on Amazon EC2.



EC2 Setup
---------

...



Amazon Machine Image (AMI) Setup
--------------------------------

An Amazon Machine Image (AMI) is a template that contains a software
configuration (for example, an operating system, an application server, and
applications e.g Core). From an AMI, one launches an instance, which is a copy
of the AMI running as a virtual server in the cloud. One can launch multiple
instances of an AMI. Instances keep running until one stops or terminates them,
or until they fail. If an instance fails, one can launch a new one from the AMI.

...



Relational Database Setup
-------------------------

To get a managed relational database in the cloud, here we use Amazon Relational
Database Service (Amazon RDS) to launch a database instance. Although you can
set up a database on an EC2 instance, Amazon RDS offers the advantage of
handling your database management tasks, such as patching the software, backing
up, and storing the backups.


