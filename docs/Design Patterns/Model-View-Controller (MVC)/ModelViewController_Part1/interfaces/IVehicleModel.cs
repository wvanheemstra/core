using System;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for IVehicleModel.
	/// </summary>
	public interface IVehicleModel
	{
		#region "Properties"

		string Name{ get; set;}
		int Speed{ get; }
		int MaxSpeed{ get;}
		int MaxTurnSpeed{ get;}
		int MaxReverseSpeed { get;}
		AbsoluteDirection Direction{get; }

		#endregion

		#region "Methods"

		void Turn(RelativeDirection paramDirection);
		void Accelerate(int paramAmount);
		void Decelerate(int paramAmount);

		#endregion

		#region Observer Pattern Implementation

		void AddObserver(IVehicleView paramView);
		void RemoveObserver(IVehicleView paramView);
		void NotifyObservers();

		#endregion
	}
}
