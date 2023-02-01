    <script>
        function myFunction(estediv, desplN) {
            var x = document.getElementById(estediv);
            if (x.style.display === "none") {
                x.style.display = "block";
                document.getElementById(desplN).innerHTML = "︿";
            } else {
                x.style.display = "none";
                document.getElementById(desplN).innerHTML = "﹀";
            }
        }
    </script>