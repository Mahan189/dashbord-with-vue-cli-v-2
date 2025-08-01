
  <template>
    <!-- mood dark & light -->
            <div class="dropdown position-fixed end-0 bottom-0 me-3 mb-3">
                <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="#mood">تغییر مود</button>
                <ul class="dropdown-menu " id="mood">
                    <li class="text-center">
                        <button class="dropdown-item " id="light-mood">light</button>
                    </li>
                    <li class="text-center">
                        <button class="dropdown-item" id="dark-mood">dark</button>
                    </li>
                </ul>
            </div>
    </template>
    <!-- <script>
    
        let lightMoodBtn = document.getElementById('light-mood')
            let darkMoodBtn = document.getElementById('dark-mood')
    
            console.log('lightMoodBtn')
            console.log('darkMoodBtn')
    
    
            darkMoodBtn.addEventListener('click',function(){
                console.log('click')
                document.documentElement.setAttribute('data-bs-theme','dark')
                darkMoodBtn.classList.add('active')
                lightMoodBtn.classList.remove('active')
                localStorage.setItem('thememood',('dark'))
            })
            lightMoodBtn.addEventListener('click',function(){
                console.log('click')
                document.documentElement.setAttribute('data-bs-theme','light')
                lightMoodBtn.classList.add('active')
                darkMoodBtn.classList.remove('active')
                localStorage.setItem('thememood',('light'))
            })
    
            let sevethememood = localStorage.getItem('thememood')
            if(sevethememood=='dark'){
                document.documentElement.setAttribute('data-bs-theme','dark')
                darkMoodBtn.classList.add('active')
                lightMoodBtn.classList.remove('active')
            }
            else{
                document.documentElement.setAttribute('data-bs-theme','light')
                lightMoodBtn.classList.add('active')
                darkMoodBtn.classList.remove('active')
            }
    
    </script>  -->