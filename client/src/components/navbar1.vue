<template>
    <nav>
        <div class="logo">Acadmit</div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="nav-links">
        <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/about">Institues</router-link>
            <li><a href="#">Contact Us</a></li>
            <router-link to="/login">Login</router-link>
        </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
*{
    text-decoration: none;
    list-style: none;
}
nav{
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background: #000D3A;
    color: white;
}
.logo{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.02em;
    font-size: 1.5rem;
    margin: 1rem;
}
.nav-links {
    height: 100%;
}

.nav-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-links ul a{
    font-family: Poppins;
    display: block;
    color: white;
    padding: 1rem;    
    font-style: normal;
}
.nav-links .router-link-exact-active{
    color:rgb(88, 160, 228);
}

.toggle-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px) {
    nav{
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
    }

    .nav-links {
        display: none;
        width: 100%;
    }

    .nav-links ul {
        width: 100%;
        flex-direction: column;
    }

    .nav-links ul li {
        text-align: center;
    }

    .nav-links ul li a {
        padding: .5rem 1rem;
    }

    .nav-links.active {
        display: flex;
    }
}



</style>