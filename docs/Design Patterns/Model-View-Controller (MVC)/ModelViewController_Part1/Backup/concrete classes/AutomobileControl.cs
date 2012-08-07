using System;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for AutomobileControl.
	/// </summary>
	public class AutomobileControl: IVehicleControl
	{
		private IVehicleModel Model;
		private IVehicleView View;

		public AutomobileControl(IVehicleModel paramModel, IVehicleView paramView)
		{
			this.Model = paramModel;
			this.View = paramView;
		}

		public AutomobileControl()
		{

		}

		#region IVehicleControl Members

		public void SetModel(IVehicleModel paramValue)
		{
			this.Model = paramValue;
		}

		public void SetView(IVehicleView paramValue)
		{
			this.View = paramValue;

		}



		public void RequestAccelerate(int paramValue)
		{
			if(null != Model)
			{
				Model.Accelerate(paramValue);
				CheckState();
			}
		}

		public void RequestDecelerate(int paramValue)
		{
			if(null != Model)
			{
				Model.Decelerate(paramValue);
				CheckState();
			}
		}

		public void RequestTurn(RelativeDirection paramValue)
		{
			Model.Turn(paramValue);
		}

		public void CheckState()
		{
			if(Model.Speed >= Model.MaxSpeed)
			{ 
				View.DisableAcceleration();
			}
			else 
			{
				View.EnableAcceleration();
			}

			if(Model.Speed <= Model.MaxReverseSpeed)
			{ 
				View.DisableDeceleration();
			}
			else 
			{
				View.EnableDeceleration();
			}

			if(Model.Speed >= Model.MaxTurnSpeed) 
			{
				View.DisableTurning();
			}
			else 
			{
				View.EnableTurning();
			}
		}

		#endregion
	}
}
