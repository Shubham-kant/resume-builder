console.log('ss');
$('#ed-add-btn').click(function(){
    
    $("#education").append(`<div>
    <button class="remove-btn">X</button>
    <div class="info">
        <input type="text" name="degree" placeholder="degree" required>
        <input type="text" name="college" placeholder="college or university name" required>
        
        <label for="start-date">Start Date</label>
        <input type="date" name="start" id="start-date" value="2019-01-01" required>
        
        <label for="end-date">End Date</label>
        <input type="date" name="end" id="end-date" value="2019-01-01" required>
    </div>
</div>`);

});
$('#exp-add-btn').click(function(){
    // var div=$('.info');
    // $('.common-sec').append(div);
    //div = document.createElement('div');
    //$(div).addClass("info").html('');
    $("#exp").append(`<div >
    <button class="remove-btn">X</button>
    <div class="info">
        <input type="text" name="name" placeholder="company name" required>
        <textarea name="description" placeholder="describe what you have done in the company?" required rows="10"></textarea>
        <input type="text" name="designation" placeholder="deignation"  required>
        
        <label for="start-date">Start Date</label>
        <input type="date" name="start" id="start-date" value="2019-01-01" required>
        
        <label for="end-date">End Date</label>
        <input type="date" name="end" id="end-date" value="2019-01-01" required>
    </div>
</div>`);

});
$('#project-add-btn').click(function(){
    // var div=$('.info');
    // $('.common-sec').append(div);
    //div = document.createElement('div');
    //$(div).addClass("info").html('');
    $("#project").append(`<div>
    <button class="remove-btn">X</button>
    <div class="info">
            <input type="text" name="project-name" placeholder="project's name" required>
            
            <textarea name="project-description" placeholder="describe your project" required rows="10"></textarea>

    </div>
</div>`);

});