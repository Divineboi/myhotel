
document.addEventListener("DOMContentLoaded", function () {
        const bookingModal = document.getElementById("bookingModal");
        const priceInput =   document.getElementById("price");
        const bookingForm = document.getElementById("bookingForm");


        bookingModal.addEventListener ("show.bs.modal",
        function (event) {
            const button = event.relatedTarget;
            const price = button.getAttribute ('data-room-price');
            priceInput.value = `$${price}/night`;
            
        });

        bookingForm.addEventListener ('submit',
        function (e) {
                e.preventDefault();

                const fullName = document.getElementById ("fullName").value;
                const gender = document.getElementById ("gender").value;
                const price = document.getElementById ("price").value;
                const checkInDate = document.getElementById ("checkInDate").value;
                const checkOutDate = document.getElementById ("checkOutDate").value;
                const guest = document.getElementById("guest").value;

                /* Success Modal */

                document.getElementById('successFullName').textContent = fullName;

                document.getElementById('successGender').textContent = gender;

                document.getElementById('successPrice').textContent = price;

                document.getElementById('successCheckInDate').textContent = checkInDate;

                document.getElementById('successCheckOutDate').textContent = checkOutDate;

                document.getElementById('successGuests').textContent = guest;


            const bookingModalInstance = bootstrap.Modal.getInstance(bookingModal);
            bookingModalInstance.hide();

            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

        });
    });