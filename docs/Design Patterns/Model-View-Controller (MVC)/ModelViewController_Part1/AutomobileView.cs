using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;
using System.Data;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for Form1.
	/// </summary>
	public class frmAutomobileView : System.Windows.Forms.Form
	{

		private ArrayList aList = new ArrayList();
		private ModelViewController_Sample.AutoView autoView1;


		private System.ComponentModel.Container components = null;

		public frmAutomobileView()
		{
			InitializeComponent();	

			this.autoView1.WireUp(new SlowpokeControl(), new Truck("Ford Pickup"));
		}


		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		protected override void Dispose( bool disposing )
		{
			if( disposing )
			{
				if (components != null) 
				{
					components.Dispose();
				}
			}
			base.Dispose( disposing );
		}






		#region Windows Form Designer generated code
		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			this.autoView1 = new ModelViewController_Sample.AutoView();
			this.SuspendLayout();
			// 
			// autoView1
			// 
			this.autoView1.Location = new System.Drawing.Point(8, 8);
			this.autoView1.Name = "autoView1";
			this.autoView1.Size = new System.Drawing.Size(256, 150);
			this.autoView1.TabIndex = 0;
			this.autoView1.Load += new System.EventHandler(this.autoView1_Load);
			// 
			// frmAutomobileView
			// 
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.ClientSize = new System.Drawing.Size(272, 165);
			this.Controls.Add(this.autoView1);
			this.Name = "frmAutomobileView";
			this.Text = "Automobile View";
			this.Load += new System.EventHandler(this.frmAutomobileView_Load);
			this.ResumeLayout(false);

		}
		#endregion

		/// <summary>
		/// The main entry point for the application.
		/// </summary>
		[STAThread]
		static void Main() 
		{
			Application.Run(new frmAutomobileView());
		}

		#region "UI Methods"


		private void frmAutomobileView_Load(object sender, System.EventArgs e)
		{
		
		}


		#endregion

		private void btnNewCar_Click(object sender, System.EventArgs e)
		{
		
			
		}

		private void autoView1_Load(object sender, System.EventArgs e)
		{
		
		}


	}
}
