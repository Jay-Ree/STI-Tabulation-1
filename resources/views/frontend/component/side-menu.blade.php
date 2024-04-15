<nav class="top-nav xl:hidden">
    <ul>
        <li>
            <a href="{{ Route('home') }}" class="top-menu ">
                <div class="top-menu__title"> Overall</div>
            </a>
        </li>
        <li>
            <a href="{{ Route('EventScore.show') }}" class="top-menu">
                <div class="top-menu__title"> Ranking By Event</div>
            </a>
        </li>
        <li>
            <a href="{{ Route('Schedules.show') }}" class="top-menu">
                <div class="top-menu__title"> Schedule</div>
            </a>
        </li>
    </ul>
</nav>
