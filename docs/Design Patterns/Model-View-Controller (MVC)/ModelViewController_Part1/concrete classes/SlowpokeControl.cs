using System;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for SlowpokeControl.
	/// </summary>
	public class SlowpokeControl:IVehicleControl
	{
		private IVehicleModel Model;
		private IVehicleView View;

		public SlowpokeControl(IVehicleModel paramModel, IVehicleView paramView)
		{
			this.Model = paramModel;
			this.View = paramView;
		}
		public SlowpokeControl()
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
			if(Model != null)
			{
				int amount = paramValue;

				if(amount > 5) amount = 5;
				Model.Accelerate(amount);

				CheckState();
			}
		}

		public void RequestDecelerate(int paramValue)
		{
			if(Model != null)
			{
				int amount = paramValue;

				if(amount > 5) amount = 5;
				Model.Decelerate(amount);

				CheckState();
			}
		}

		public void RequestTurn(RelativeDirection paramValue)
		{
			Model.Turn(paramValue);
		}

		#endregion

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

	}
}



