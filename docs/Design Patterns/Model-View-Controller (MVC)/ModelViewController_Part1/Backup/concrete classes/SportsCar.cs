using System;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for SportsCar.
	/// </summary>
	public class SportsCar: Automobile	
	{
		public SportsCar(string paramName):base(250, 40, -20, paramName){}
		public SportsCar(string paramName, int paramMaxSpeed, int paramMaxTurnSpeed, int paramMaxReverseSpeed):
			base(paramMaxSpeed, paramMaxTurnSpeed, paramMaxReverseSpeed, paramName){}
	}
}
