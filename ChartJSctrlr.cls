public class ChartJSctrlr {
	
	@AuraEnabled 
	Public static list<charWrap> getChartData(){
		
		
		
		charWrap cWrap1 = new charWrap();
		cWrap1.dataLabels = new list<string>{'Red', 'Orange', 'Yellow', 'Green', 'Blue'};
		cWrap1.dataValues = new list<integer>{61, 45, 30, 88, 37};
		
		charWrap cWrap2 = new charWrap();
		cWrap2.dataLabels = new list<string>{'Mango', 'Pineapple', 'Apple', 'Banana', 'Grape'};
		cWrap2.dataValues = new list<integer>{37, 88, 30, 45, 61};
		
		
		
		return new list<charWrap>{cWrap1, cWrap2};
		
		
		
	}
	
	public class charWrap {
		
		@AuraEnabled  public list<string> dataLabels;
		@AuraEnabled  public list<integer> dataValues;
		
		public charWrap(){
			dataLabels = new list<string>();
			dataValues = new list<integer>(); 
			
		}
	}
	
	
}