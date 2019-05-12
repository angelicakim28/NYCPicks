// // Chart 3
//
// var spec = {"config": {"view": {"width": 400, "height": 300}}, "vconcat": [{"data": {"name": "data-0fc1a875ba0b63a8e62898dde86691d1"}, "mark": "line", "encoding": {"color": {"type": "nominal", "field": "Type", "scale": {"domain": ["Taxi", "Uber"], "range": ["gold", "black"]}}, "tooltip": [{"type": "quantitative", "field": "Hour"}], "x": {"type": "nominal", "field": "Hour"}, "y": {"type": "quantitative", "field": "CountsPickUp"}}, "selection": {"selector031": {"type": "interval", "encodings": ["x"]}}, "title": "Number of pick-ups by hour", "width": 800}, {"layer": [{"mark": "bar", "encoding": {"color": {"type": "nominal", "field": "Type"}, "x": {"type": "quantitative", "aggregate": "sum", "field": "CountsPickUp"}, "y": {"type": "nominal", "field": "Type"}}, "title": "Total number of pick-ups"}, {"mark": {"type": "text", "align": "left", "baseline": "middle", "dx": 3}, "encoding": {"color": {"type": "nominal", "field": "Type"}, "text": {"type": "quantitative", "aggregate": "sum", "field": "CountsPickUp"}, "x": {"type": "quantitative", "aggregate": "sum", "field": "CountsPickUp"}, "y": {"type": "nominal", "field": "Type"}}, "title": "Total number of pick-ups"}], "transform": [{"filter": {"selection": "selector031"}}], "width": 600}, {"mark": "bar", "encoding": {"color": {"type": "nominal", "field": "Type"}, "x": {"type": "nominal", "field": "Hour"}, "y": {"type": "quantitative", "field": "HourProp", "stack": "normalize"}}, "title": "Proportion of taxi and uber pick-ups", "transform": [{"filter": {"selection": "selector031"}}]}], "center": true, "data": {"name": "data-0fc1a875ba0b63a8e62898dde86691d1"}, "$schema": "https://vega.github.io/schema/vega-lite/v2.6.0.json", "datasets": {"data-0fc1a875ba0b63a8e62898dde86691d1": [{"Hour": 0, "Type": "Uber", "CountsPickUp": 103836, "HourTotal": 285215, "HourProp": 0.3640621986922146}, {"Hour": 0, "Type": "Taxi", "CountsPickUp": 181379, "HourTotal": 285215, "HourProp": 0.6359378013077853}, {"Hour": 1, "Type": "Uber", "CountsPickUp": 67227, "HourTotal": 199813, "HourProp": 0.3364495803576344}, {"Hour": 1, "Type": "Taxi", "CountsPickUp": 132586, "HourTotal": 199813, "HourProp": 0.6635504196423656}, {"Hour": 2, "Type": "Uber", "CountsPickUp": 45865, "HourTotal": 143800, "HourProp": 0.3189499304589708}, {"Hour": 2, "Type": "Taxi", "CountsPickUp": 97935, "HourTotal": 143800, "HourProp": 0.6810500695410292}, {"Hour": 3, "Type": "Uber", "CountsPickUp": 48287, "HourTotal": 117940, "HourProp": 0.4094200440902154}, {"Hour": 3, "Type": "Taxi", "CountsPickUp": 69653, "HourTotal": 117940, "HourProp": 0.5905799559097846}, {"Hour": 4, "Type": "Uber", "CountsPickUp": 55230, "HourTotal": 107741, "HourProp": 0.5126182233318792}, {"Hour": 4, "Type": "Taxi", "CountsPickUp": 52511, "HourTotal": 107741, "HourProp": 0.48738177666812077}, {"Hour": 5, "Type": "Uber", "CountsPickUp": 83939, "HourTotal": 131338, "HourProp": 0.6391067322480927}, {"Hour": 5, "Type": "Taxi", "CountsPickUp": 47399, "HourTotal": 131338, "HourProp": 0.3608932677519073}, {"Hour": 6, "Type": "Uber", "CountsPickUp": 143213, "HourTotal": 242541, "HourProp": 0.5904692402521635}, {"Hour": 6, "Type": "Taxi", "CountsPickUp": 99328, "HourTotal": 242541, "HourProp": 0.4095307597478364}, {"Hour": 7, "Type": "Uber", "CountsPickUp": 193094, "HourTotal": 358408, "HourProp": 0.5387547152965335}, {"Hour": 7, "Type": "Taxi", "CountsPickUp": 165314, "HourTotal": 358408, "HourProp": 0.46124528470346643}, {"Hour": 8, "Type": "Uber", "CountsPickUp": 190504, "HourTotal": 392002, "HourProp": 0.4859771123616716}, {"Hour": 8, "Type": "Taxi", "CountsPickUp": 201498, "HourTotal": 392002, "HourProp": 0.5140228876383284}, {"Hour": 9, "Type": "Uber", "CountsPickUp": 159967, "HourTotal": 367653, "HourProp": 0.43510320873214686}, {"Hour": 9, "Type": "Taxi", "CountsPickUp": 207686, "HourTotal": 367653, "HourProp": 0.5648967912678531}, {"Hour": 10, "Type": "Uber", "CountsPickUp": 159148, "HourTotal": 361142, "HourProp": 0.44067984338570426}, {"Hour": 10, "Type": "Taxi", "CountsPickUp": 201994, "HourTotal": 361142, "HourProp": 0.5593201566142958}, {"Hour": 11, "Type": "Uber", "CountsPickUp": 165703, "HourTotal": 375170, "HourProp": 0.4416744409201162}, {"Hour": 11, "Type": "Taxi", "CountsPickUp": 209467, "HourTotal": 375170, "HourProp": 0.5583255590798838}, {"Hour": 12, "Type": "Uber", "CountsPickUp": 170452, "HourTotal": 389061, "HourProp": 0.4381112473365359}, {"Hour": 12, "Type": "Taxi", "CountsPickUp": 218609, "HourTotal": 389061, "HourProp": 0.561888752663464}, {"Hour": 13, "Type": "Uber", "CountsPickUp": 195877, "HourTotal": 412246, "HourProp": 0.47514590802579043}, {"Hour": 13, "Type": "Taxi", "CountsPickUp": 216369, "HourTotal": 412246, "HourProp": 0.5248540919742096}, {"Hour": 14, "Type": "Uber", "CountsPickUp": 230625, "HourTotal": 453582, "HourProp": 0.508452716377634}, {"Hour": 14, "Type": "Taxi", "CountsPickUp": 222957, "HourTotal": 453582, "HourProp": 0.491547283622366}, {"Hour": 15, "Type": "Uber", "CountsPickUp": 275466, "HourTotal": 486430, "HourProp": 0.5663014205538309}, {"Hour": 15, "Type": "Taxi", "CountsPickUp": 210964, "HourTotal": 486430, "HourProp": 0.433698579446169}, {"Hour": 16, "Type": "Uber", "CountsPickUp": 313400, "HourTotal": 491768, "HourProp": 0.6372923817735192}, {"Hour": 16, "Type": "Taxi", "CountsPickUp": 178368, "HourTotal": 491768, "HourProp": 0.3627076182264808}, {"Hour": 17, "Type": "Uber", "CountsPickUp": 336190, "HourTotal": 553437, "HourProp": 0.6074584821759297}, {"Hour": 17, "Type": "Taxi", "CountsPickUp": 217247, "HourTotal": 553437, "HourProp": 0.3925415178240703}, {"Hour": 18, "Type": "Uber", "CountsPickUp": 324679, "HourTotal": 593042, "HourProp": 0.5474806168871682}, {"Hour": 18, "Type": "Taxi", "CountsPickUp": 268363, "HourTotal": 593042, "HourProp": 0.4525193831128318}, {"Hour": 19, "Type": "Uber", "CountsPickUp": 294513, "HourTotal": 574688, "HourProp": 0.5124745949106297}, {"Hour": 19, "Type": "Taxi", "CountsPickUp": 280175, "HourTotal": 574688, "HourProp": 0.48752540508937026}, {"Hour": 20, "Type": "Uber", "CountsPickUp": 284604, "HourTotal": 550890, "HourProp": 0.5166258236671568}, {"Hour": 20, "Type": "Taxi", "CountsPickUp": 266286, "HourTotal": 550890, "HourProp": 0.48337417633284324}, {"Hour": 21, "Type": "Uber", "CountsPickUp": 281460, "HourTotal": 546916, "HourProp": 0.5146311316545868}, {"Hour": 21, "Type": "Taxi", "CountsPickUp": 265456, "HourTotal": 546916, "HourProp": 0.4853688683454132}, {"Hour": 22, "Type": "Uber", "CountsPickUp": 241858, "HourTotal": 499255, "HourProp": 0.4844378123403872}, {"Hour": 22, "Type": "Taxi", "CountsPickUp": 257397, "HourTotal": 499255, "HourProp": 0.5155621876596128}, {"Hour": 23, "Type": "Uber", "CountsPickUp": 169190, "HourTotal": 400249, "HourProp": 0.4227118618659884}, {"Hour": 23, "Type": "Taxi", "CountsPickUp": 231059, "HourTotal": 400249, "HourProp": 0.5772881381340116}]}};
// var embedOpt = {"mode": "vega-lite"};
//
// function showError(el, error){
//     el.innerHTML = ('<div class="error" style="color:red;">'
//                     + '<p>JavaScript Error: ' + error.message + '</p>'
//                     + "<p>This usually means there's a typo in your chart specification. "
//                     + "See the javascript console for the full traceback.</p>"
//                     + '</div>');
//     throw error;
// }
// const el = document.getElementById('vis');
// vegaEmbed("#vis", spec, embedOpt)
//   .catch(error => showError(el, error));