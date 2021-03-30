import React from 'react';




const RowFilter = (props) => {
    return (
        <div class="level-left">
            <div class="level-item">
                <p class="subtitle is-5">
                    <strong >Show</strong>
                </p>
            </div>
            <div class="level-item">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button is-danger" aria-haspopup="true" aria-controls="dropdown-menu4">
                            <span>{props.postsPerPage}</span>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>

                    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div class="dropdown-content">
                            <a onClick={() => props.settingPostsPerPage(25)} href="#" class="dropdown-item">
                            25
                            </a>
                            <a onClick={() => props.settingPostsPerPage(50)} href="#" class="dropdown-item">
                            50
                            </a>
                            <a onClick={() => props.settingPostsPerPage(75)} href="#" class="dropdown-item">
                            75
                            </a>
                        </div>
                    </div>
                </div>

                <div class="level-item">
                    <p class="subtitle is-5">
                    <strong >&nbsp; entries</strong>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default RowFilter;