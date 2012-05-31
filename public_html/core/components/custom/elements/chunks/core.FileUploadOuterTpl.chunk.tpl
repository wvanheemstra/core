<div class="fu-outer">
    [[+fu-message]]
    <form enctype="multipart/form-data" action="[[~[[*id]]]]" method="post">
        <input type="hidden" name="formid" value="[[+fileupload.formid]]" />
        <!-- MAX_FILE_SIZE must precede the file input field -->
        <input type="hidden" name="MAX_FILE_SIZE" value="[[+fileupload.maxsize]]" />
        [[+fu-inner]]

    <p>Opmerking: Alleen plaatjes van de volgende types worden geaccepteerd ([[+fileupload.extensions]])</p>
    <input type="submit" class="nice small white button" value="[[+fu_upload_button_caption]]" />
    </form>
</div>