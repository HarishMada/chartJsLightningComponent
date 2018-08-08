<aura:application extends="force:slds">
    <c:chartJSCmp />
</aura:application>
view raw
ChartJSDemo.xml hosted with ❤ by GitHub

Component:
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes" 
                access="global" 
                controller="ChartJSctrlr">
    
    <ltng:require scripts="{!$Resource.ChartJS270}" 
                  afterScriptsLoaded="{!c.afterScriptLoad}"/> 
    
    
    
    <div class="slds-page-header slds-align_absolute-center">
        <a href="">ChartJS Demo.</a>
    </div>
    
    <div class="slds-grid">
        <!-- Chart 1 grid-->
        <div class="slds-col slds-p-top_medium  slds-size--1-of-1 slds-medium-size_1-of-1 slds-large-size_1-of-2">
            
            <div class="slds-col-header__title slds-align_absolute-center">
                <h1 style="font-size: 14pt">Demo Chart#1</h1>
            </div>
            
            <div id = "colors">
                <canvas id="colorCanvas" width="400" height="400"></canvas>
            </div>
            
        </div>
        
        <!-- Chart 2 grid-->
        <div class="slds-col slds-p-top_medium  slds-size--1-of-1 slds-medium-size_1-of-1 slds-large-size_1-of-2">
            
            <div class="slds-col-header__title slds-align_absolute-center">
                <h1 style="font-size: 14pt">Demo Chart#2</h1>
            </div> 
            
            <div id = "fruits">
                <canvas id="fruitCanvas" width="400" height="400"></canvas>
            </div>
            
        </div>
        
    </div>
    
    
    
    <br></br><br></br>      
    
</aura:component>
view raw
CharJSCmp.xml hosted with ❤ by GitHub

ControllerJS:
({
    
    afterScriptLoad : function(component, event, helper) {
        
        
        var action = component.get("c.getChartData");
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log('--chartData--', response.getReturnValue());
                
                
                var chartData = response.getReturnValue();
                
                console.log(chartData);
                
                
                if(!$A.util.isEmpty(chartData)){
                    
                    var chart1_Data = chartData[0];
                    var canvas1 = document.getElementById("colorCanvas")
                    
                    //**** START OF Chart 1 ****
                    var myChart1 = new Chart(canvas1, {
                        type: 'doughnut',
                        
                        data: {
                            labels: chart1_Data.dataLabels, //["label 1", "Label 2"]
                            datasets: [{
                                title: 'Chart 1',
                                backgroundColor: ["#bf1114","#ff750c","#ffff47","#037542", "#07127a"],
                                
                                data: chart1_Data.dataValues, //["10", "20"]
                            }] 
                            
                        },
                        options: {
                            maintainAspectRatio: false,
                            
                            title: {
                                display: true, 
                                position:"bottom",
                                text: "Chart 1",
                                
                            },
                            legend: {
                                display: true,
                                position: "top",
                                labels: {
                                    fontColor: "#333",
                                    fontSize: 12,
                                },
                                
                            },
                            
                            
                        }
                    });	
                    //**** END OF Chart 1 ****
                    
                    
                    var chart2_Data = chartData[1];
                    
                    var canvas2 = document.getElementById("fruitCanvas");
                    
                    //**** START OF Chart 2 ****
                    var myChart1 = new Chart(canvas2, {
                        type: 'doughnut',
                        
                        data: {
                            labels: chart2_Data.dataLabels, //["label 1", "Label 2"]
                            datasets: [{
                                title: 'Chart 1',
                                backgroundColor: ["#3cba9f","#8e5ea2","#3e95cd","#e8c3b9", "#f4426e"],
                                
                                data: chart2_Data.dataValues, //["10", "20"]
                            }] 
                            
                        },
                        options: {
                            maintainAspectRatio: false,
                            
                            title: {
                                display: true, 
                                position:"bottom",
                                text: "Chart 2",
                                
                            },
                            legend: {
                                display: true,
                                position: "top",
                                labels: {
                                    fontColor: "#333",
                                    fontSize: 12,
                                },
                                
                            },
                            
                            
                        }
                    });	
                    //**** END OF Chart 2 ****								
                }
                
                
                
            }
            
            
        });
        $A.enqueueAction(action);	
    }
    
})