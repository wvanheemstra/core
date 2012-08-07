using System;
using System.Collections;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for Truck.
	/// </summary>
	public class Truck: Automobile
	{
		public Truck(string paramName):base(85, 15, -10, paramName){}
		public Truck(string paramName, int paramMaxSpeed, int paramMaxTurnSpeed, int paramMaxReverseSpeed):
		base(paramMaxSpeed, paramMaxTurnSpeed, paramMaxReverseSpeed, paramName){}
	}
}
