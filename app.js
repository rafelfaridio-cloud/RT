const addNoteButton =
    document.getElementById("addNoteButton");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const noteForm =
    document.getElementById("noteForm");


addNoteButton.addEventListener(
    "click",
    () => {

        modal.classList.remove("hidden");

    }
);


closeModal.addEventListener(
    "click",
    () => {

        modal.classList.add("hidden");

    }
);


noteForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const course =
            document.getElementById("course").value;

        const title =
            document.getElementById("title").value;

        const description =
            document.getElementById("description").value;

        const pdf =
            document.getElementById("pdf").files[0];


        if (!course || !title || !pdf) {

            alert(
                "لطفاً اطلاعات را کامل کنید."
            );

            return;
        }


        if (
            pdf.type !==
            "application/pdf"
        ) {

            alert(
                "فقط فایل PDF مجاز است."
            );

            return;
        }


        console.log({
            course,
            title,
            description,
            pdf
        });


        alert(
            "جزوه آماده ارسال به سرور است."
        );


        noteForm.reset();

        modal.classList.add("hidden");

    }
);