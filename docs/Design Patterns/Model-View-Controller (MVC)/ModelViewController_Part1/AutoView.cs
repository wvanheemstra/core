using System;
using System.Collections;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Windows.Forms;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for AutoView.
	/// </summary>
	public class AutoView : System.Windows.Forms.UserControl, IVehicleView
	{
		private System.Windows.Forms.Button btnLeft;
		private System.Windows.Forms.Button btnRight;
		private System.Windows.Forms.TextBox txtAmount;
		private System.Windows.Forms.Button btnDecelerate;
		private System.Windows.Forms.Button btnAccelerate;
		private System.Windows.Forms.Label label1;
		private System.Windows.Forms.ProgressBar pBar;

		
		private IVehicleControl Control;
		private IVehicleModel Model;

		/// <summary> 
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.Container components = null;

		public AutoView()
		{
			// This call is required by the Windows.Forms Form Designer.
			InitializeComponent();

			// TODO: Add any initialization after the InitializeComponent call

		}

		public void WireUp(IVehicleControl paramControl, IVehicleModel paramModel)
		{
			if(Model != null)
			{
				Model.RemoveObserver(this);
			}

			Model = paramModel;
			Control = paramControl;

			Control.SetModel(Model);
			Control.SetView(this);
			Model.AddObserver(this);
		}

		public void UpdateInterface(IVehicleModel auto)
		{
			this.label1.Text = auto.Name + " heading " + auto.Direction.ToString() + " at speed: " + auto.Speed.ToString();
			this.pBar.Value = (auto.Speed>0)? auto.Speed*100/auto.MaxSpeed : auto.Speed*100/auto.MaxReverseSpeed;
			
		}

		/// <summary> 
		/// Clean up any resources being used.
		/// </summary>
		protected override void Dispose( bool disposing )
		{
			if( disposing )
			{
				if(components != null)
				{
					components.Dispose();
				}
			}
			base.Dispose( disposing );
		}

		#region Component Designer generated code
		/// <summary> 
		/// Required method for Designer support - do not modify 
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			this.btnLeft = new System.Windows.Forms.Button();
			this.btnRight = new System.Windows.Forms.Button();
			this.txtAmount = new System.Windows.Forms.TextBox();
			this.btnDecelerate = new System.Windows.Forms.Button();
			this.btnAccelerate = new System.Windows.Forms.Button();
			this.label1 = new System.Windows.Forms.Label();
			this.pBar = new System.Windows.Forms.ProgressBar();
			this.SuspendLayout();
			// 
			// btnLeft
			// 
			this.btnLeft.Location = new System.Drawing.Point(48, 72);
			this.btnLeft.Name = "btnLeft";
			this.btnLeft.TabIndex = 11;
			this.btnLeft.Text = "Turn Left";
			this.btnLeft.Click += new System.EventHandler(this.btnLeft_Click);
			// 
			// btnRight
			// 
			this.btnRight.Location = new System.Drawing.Point(128, 72);
			this.btnRight.Name = "btnRight";
			this.btnRight.TabIndex = 10;
			this.btnRight.Text = "Turn Right";
			this.btnRight.Click += new System.EventHandler(this.btnRight_Click);
			// 
			// txtAmount
			// 
			this.txtAmount.Location = new System.Drawing.Point(88, 40);
			this.txtAmount.Name = "txtAmount";
			this.txtAmount.Size = new System.Drawing.Size(72, 20);
			this.txtAmount.TabIndex = 9;
			this.txtAmount.Text = "10";
			// 
			// btnDecelerate
			// 
			this.btnDecelerate.Location = new System.Drawing.Point(48, 40);
			this.btnDecelerate.Name = "btnDecelerate";
			this.btnDecelerate.Size = new System.Drawing.Size(32, 23);
			this.btnDecelerate.TabIndex = 8;
			this.btnDecelerate.Text = "<<";
			this.btnDecelerate.Click += new System.EventHandler(this.btnDecelerate_Click);
			// 
			// btnAccelerate
			// 
			this.btnAccelerate.Location = new System.Drawing.Point(168, 40);
			this.btnAccelerate.Name = "btnAccelerate";
			this.btnAccelerate.Size = new System.Drawing.Size(32, 23);
			this.btnAccelerate.TabIndex = 7;
			this.btnAccelerate.Text = ">>";
			this.btnAccelerate.Click += new System.EventHandler(this.btnAccelerate_Click);
			// 
			// label1
			// 
			this.label1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
			this.label1.Location = new System.Drawing.Point(8, 8);
			this.label1.Name = "label1";
			this.label1.Size = new System.Drawing.Size(240, 23);
			this.label1.TabIndex = 6;
			this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
			// 
			// pBar
			// 
			this.pBar.Location = new System.Drawing.Point(8, 104);
			this.pBar.Name = "pBar";
			this.pBar.Size = new System.Drawing.Size(240, 23);
			this.pBar.TabIndex = 12;
			// 
			// AutoView
			// 
			this.Controls.Add(this.pBar);
			this.Controls.Add(this.btnLeft);
			this.Controls.Add(this.btnRight);
			this.Controls.Add(this.txtAmount);
			this.Controls.Add(this.btnDecelerate);
			this.Controls.Add(this.btnAccelerate);
			this.Controls.Add(this.label1);
			this.Name = "AutoView";
			this.Size = new System.Drawing.Size(256, 136);
			this.Load += new System.EventHandler(this.AutoView_Load);
			this.ResumeLayout(false);

		}
		#endregion

		private void AutoView_Load(object sender, System.EventArgs e)
		{
		
		}

		#region IVehicleView Members

		public void DisableAcceleration()
		{
			this.btnAccelerate.Enabled = false;
		}

		public void EnableAcceleration()
		{
			this.btnAccelerate.Enabled = true;
		}

		public void DisableDeceleration()
		{
			this.btnDecelerate.Enabled = false;
		}

		public void EnableDeceleration()
		{
			this.btnDecelerate.Enabled = true;
		}

		public void DisableTurning()
		{
			this.btnRight.Enabled = this.btnLeft.Enabled = false;
		}

		public void EnableTurning()
		{
			this.btnRight.Enabled = this.btnLeft.Enabled = true;
		}

		public void Update(IVehicleModel paramModel)
		{

			this.UpdateInterface(paramModel);

		}

		#endregion

		private void btnAccelerate_Click(object sender, System.EventArgs e)
		{
			Control.RequestAccelerate(int.Parse(txtAmount.Text));
		}

		private void btnDecelerate_Click(object sender, System.EventArgs e)
		{
			Control.RequestDecelerate(int.Parse(txtAmount.Text));
		}

		private void btnLeft_Click(object sender, System.EventArgs e)
		{
			Control.RequestTurn(RelativeDirection.Left);
		}

		private void btnRight_Click(object sender, System.EventArgs e)
		{
			Control.RequestTurn(RelativeDirection.Right);
		}

	}
}
