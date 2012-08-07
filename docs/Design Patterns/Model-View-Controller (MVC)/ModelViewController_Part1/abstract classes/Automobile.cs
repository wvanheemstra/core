using System;
using System.Collections;

namespace ModelViewController_Sample
{
	/// <summary>
	/// Summary description for IAutomobile.
	/// </summary>
//	public abstract class Automobile: IVehicleModel
//	{
//		#region "Declarations "
//		private ArrayList aList = new ArrayList();
//
//		private int mintSpeed = 0;
//		private int mintMaxSpeed = 0;
//		private int mintMaxTurnSpeed = 0;
//		private int mintMaxReverseSpeed = 0;
//		private AbsoluteDirection mDirection = AbsoluteDirection.North;
//		private string mstrName = "";
//		#endregion
//
//		#region "Constructor"
//
//		public Automobile(int paramMaxSpeed, int paramMaxTurnSpeed, int paramMaxReverseSpeed, string paramName)
//		{
//			this.mintMaxSpeed = paramMaxSpeed;
//			this.mintMaxTurnSpeed = paramMaxTurnSpeed;
//			this.mintMaxReverseSpeed = paramMaxReverseSpeed;
//			this.mstrName = paramName;
//		}
//
//
//		#endregion
//
//		#region "IVehicleModel Members"
//
//		public void AddObserver(IVehicleView paramView)
//		{
//			aList.Add(paramView);
//		}
//
//		public void RemoveObserver(IVehicleView paramView)
//		{
//			aList.Remove(paramView);
//		}
//
//		public void NotifyObservers()
//		{
//			foreach(IVehicleView view in aList)
//			{
//				view.Update(this);
//			}
//		}
//
//		public string Name
//		{
//			get
//			{
//				return this.mstrName;
//			}
//			set
//			{
//				this.mstrName = value;
//			}
//		}
//
//		public int Speed
//		{
//			get
//			{
//				return this.mintSpeed;
//			}
//			set
//			{
//				this.mintSpeed = value;
//				this.NotifyObservers();
//			}
//		}
//
//		public int MaxSpeed
//		{
//			get
//			{
//				return this.mintMaxSpeed;
//			}
//		}
//
//		public int MaxTurnSpeed
//		{
//			get
//			{
//				return this.mintMaxTurnSpeed;
//			}
//		}
//
//		public int MaxReverseSpeed
//		{
//			get
//			{
//				return this.mintMaxReverseSpeed;
//			}
//		}
//
//		public AbsoluteDirection Direction
//		{
//			get
//			{
//				return this.mDirection;
//			}
//			set
//			{
//				this.mDirection = value;
//				this.NotifyObservers();
//			}
//		}
//
//		public void Execute(IVehicleCommand paramCommand)
//		{
//			paramCommand.Execute(this);
//			this.NotifyObservers();
//		}
//
//
//
//		#endregion
//	}

	public abstract class Automobile: IVehicleModel
	{
		#region "Declarations "
		private ArrayList aList = new ArrayList();
		private int mintSpeed = 0;
		private int mintMaxSpeed = 0;
		private int mintMaxTurnSpeed = 0;
		private int mintMaxReverseSpeed = 0;
		private AbsoluteDirection mDirection = AbsoluteDirection.North;
		private string mstrName = "";
		#endregion

		#region "Constructor"

		public Automobile(int paramMaxSpeed, int paramMaxTurnSpeed, int paramMaxReverseSpeed, string paramName)
		{
			this.mintMaxSpeed = paramMaxSpeed;
			this.mintMaxTurnSpeed = paramMaxTurnSpeed;
			this.mintMaxReverseSpeed = paramMaxReverseSpeed;
			this.mstrName = paramName;
		}


		#endregion

		#region "IVehicleModel Members"

		public void AddObserver(IVehicleView paramView)
		{
			aList.Add(paramView);
		}

		public void RemoveObserver(IVehicleView paramView)
		{
			aList.Remove(paramView);
		}

		public void NotifyObservers()
		{
			foreach(IVehicleView view in aList)
			{
				view.Update(this);
			}
		}

		public string Name
		{
			get
			{
				return this.mstrName;
			}
			set
			{
				this.mstrName = value;
			}
		}

		public int Speed
		{
			get
			{
				return this.mintSpeed;
			}
		}

		public int MaxSpeed
		{
			get
			{
				return this.mintMaxSpeed;
			}
		}

		public int MaxTurnSpeed
		{
			get
			{
				return this.mintMaxTurnSpeed;
			}
		}

		public int MaxReverseSpeed
		{
			get
			{
				return this.mintMaxReverseSpeed;
			}
		}

		public AbsoluteDirection Direction
		{
			get
			{
				return this.mDirection;
			}
		}

		public void Turn(RelativeDirection paramDirection)
		{
			AbsoluteDirection newDirection;
			
			switch(paramDirection)
			{
				case RelativeDirection.Right:
					newDirection = (AbsoluteDirection)((int)(this.mDirection + 1) %4);
					break;
				case RelativeDirection.Left:
					newDirection = (AbsoluteDirection)((int)(this.mDirection + 3) %4);
					break;
				case RelativeDirection.Back:
					newDirection = (AbsoluteDirection)((int)(this.mDirection + 2) %4);
					break;
				default:
					newDirection = AbsoluteDirection.North;
					break;
			}

			this.mDirection = newDirection;

			this.NotifyObservers();
		}

		public void Accelerate(int paramAmount)
		{

			this.mintSpeed += paramAmount;
			if(mintSpeed >= this.mintMaxSpeed) mintSpeed = mintMaxSpeed;

			this.NotifyObservers();
		}

		public void Decelerate(int paramAmount)
		{

			this.mintSpeed -= paramAmount;
			if(mintSpeed <= this.mintMaxReverseSpeed) mintSpeed = mintMaxReverseSpeed;

			this.NotifyObservers();
		}


		#endregion


	}

}
