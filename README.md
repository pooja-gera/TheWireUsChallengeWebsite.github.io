# WireUs

#For Updating Challenges:<br>
To add the Poster:<br>
1.Go to Calendar/Challenges/{nameofthechallenge}<br>
2.Save the file/image name as {day(2digits minimum)}_{shortnameofthechallenge}<br>

Add the link to the respective page:<br>
1.Go to Calendar/Calendar-{nameofthechallenge}.html<br>
2.After the line number 200(approx) you will find something like this:<br>
Select div with id="day for which you are updating"<br>
```html

<div class="collapse " id="{{day_your_are_updating}}" data-parent="#myGroup">
    <div **class="disabled"**> Remove this class and replace it with "<div>"
        **add image path in "a" tag href**
        <a href="Challenges/{nameofthechallenge}/{day(2digits minimum)}_{shortnameofthechallenge}" download>
            <div class=" heading1">Click Here</div>
            <div class=" heading2">To Download Today's Challenge</div>
        </a>
    </div>
</div>

```