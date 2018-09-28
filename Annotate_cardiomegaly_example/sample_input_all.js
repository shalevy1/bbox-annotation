var VG = (function(vg) {

    vg.SampleInput = function() {
	var that = (this === vg ? {} : this);

	that.get = function(index) {
	    // ignores 'index' currently, but you can set it up to provide different inputs
	    // depending on the index, for easy debugging
	    return {"questions": [
{"img_id": "001.jpg","img_no": "1","boxes": {},"object_name": "Cardiomegaly","image_url": "images/001.jpg","task": "db","report": "indication: xxx"},
{"img_id": "002.jpg","img_no": "2","boxes": {},"object_name": "Cardiomegaly","image_url": "images/002.jpg","task": "db","report": " xxx"},
{"img_id": "003.jpg","img_no": "3","boxes": {},"object_name": "Cardiomegaly","image_url": "images/003.jpg","task": "db","report": "findings: xxx "},
{"img_id": "004.jpg","img_no": "44","boxes": {},"object_name": "Cardiomegaly","image_url": "images/004.jpg","task": "db","report": "findings: xxx"}

],"diseaseName": "Cardiomegaly_001_004"};
	}
	
	return that;
    }
    
    return vg;
    
}(VG || {}));
