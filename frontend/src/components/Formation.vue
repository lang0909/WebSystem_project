<template>
    <div v-if="this.data.length" class="cont_field">
        <div class="field">
            <div class="lw">
                <select v-on:change="changeLW($event)">
                    <option>LW</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[27]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>        
            </div>
            <div class="ls">
                <select v-on:change="changeLS($event)">
                    <option>LS</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[26]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                   
                </div>
            </div>
            <div class="st">
                <select v-on:change="changeST($event)">
                    <option>ST</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[25]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                   
                </div>
            </div>
            <div class="rs">
                <select v-on:change="changeRS($event)">
                    <option>RS</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[24]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rw">
                <select v-on:change="changeRW($event)">
                    <option>RW</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[23]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lf">
                <select v-on:change="changeLF($event)">
                    <option>LF</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[22]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="cf">
                <select v-on:change="changeCF($event)">
                    <option>CF</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[21]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rf">
                <select v-on:change="changeRF($event)">
                    <option>RF</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[20]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lam">
                <select v-on:change="changeLAM($event)">
                    <option>LAM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[19]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="cam">
                <select v-on:change="changeCAM($event)">
                    <option>CAM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[18]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="ram">
                <select v-on:change="changeRAM($event)">
                    <option>RAM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[17]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lm">
                <select v-on:change="changeLM($event)">
                    <option>LM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[16]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lcm">
                <select v-on:change="changeLCM($event)">
                    <option>LCM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[15]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="cm">
                <select v-on:change="changeCM($event)">
                    <option>CM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[14]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rcm">
                <select v-on:change="changeRCM($event)">
                    <option>RCM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[13]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rm">
                <select v-on:change="changeRM($event)">
                    <option>RM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[12]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="ldm">
                <select v-on:change="changeLDM($event)">
                    <option>LDM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[11]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="cdm">
                <select v-on:change="changeCDM($event)">
                    <option>CDM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[10]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rdm">
                <select v-on:change="changeRDM($event)">
                    <option>RDM</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[9]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lwb">
                <select v-on:change="changeLWB($event)">
                    <option>LWB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[8]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lb">
                <select v-on:change="changeLB($event)">
                    <option>LB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[7]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="lcb">
                <select v-on:change="changeLCB($event)">
                    <option>LCB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[6]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="cb">
                <select v-on:change="changeCB($event)">
                    <option>CB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[5]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rcb">
                <select v-on:change="changeRCB($event)">
                    <option>RCB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[4]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rb">
                <select v-on:change="changeRB($event)">
                    <option>RB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[3]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
            <div class="rwb">
                <select v-on:change="changeRWB($event)">
                    <option>RWB</option><option value="shoot">shoot</option><option value="effectiveShoot">effectiveShoot</option><option value="assist">assist</option><option value="goal">goal</option>
                    <option value="dribble">dribble</option><option value="passTry">passTry</option><option value="passSuccess">passSuccess</option><option value="block">block</option><option value="tackle">tackle</option>
                </select>
                <div v-for="player in this.position_value[2]">
                    <div>
                        <span>
                            <img v-bind:src="'/players/'+player.spId" class="back_image" :style="{'background-image': 'url('+'/season_background/'+player.spId.toString().substring(0,3)+'.png)'}">
                        </span>
                        <span>
                            <img v-bind:src="'/season/'+player.spId.toString().substring(0,3)+'.JPG'" class="image_cont">
                        </span>
                        <span class="name_font">
                            {{player.name}}
                        </span>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        var position_temp =  ['gk','sw','rwb','rb','rcb','cb','lcb','lb','lwb','rdm','cdm',
        'ldm','rm','rcm','cm','lcm','lm','ram','cam','lam','rf','cf','lf','rw','rs','st','ls','lw','sub'];
        this.formation = this.data;
        this.$http.get(`/formation/${this.formation}`)
        .then((response)=>{
            this.position = response.data;
            this.position[0].position.filter(function(temp){
                document.querySelector(`.${position_temp[temp]}`).style.display="block";
            })
        })
    },
    props: ['data'],
    data(){
        return{
            position: [],
            formation: '',
            position_value: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
            name: '',
        }
    },
    methods:{
        changeLW: async function(event){
            const temp =[];
            temp.push(27);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(27,1,temp_value);
        },
        changeLS: async function(event){
            const temp =[];
            temp.push(26);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(26,1,temp_value);
        },
        changeST: async function(event){
            const temp =[];
            temp.push(25);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(25,1,temp_value);
        },
        changeRS: async function(event){
            const temp =[];
            temp.push(24);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(24,1,temp_value);
        },
        changeRW: async function(event){
            const temp =[];
            temp.push(23);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(23,1,temp_value);
        },
        changeLF: async function(event){
            const temp =[];
            temp.push(22);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(22,1,temp_value);
        },
        changeCF: async function(event){
            const temp =[];
            temp.push(21);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(21,1,temp_value);
        },
        changeRF: async function(event){
            const temp =[];
            temp.push(20);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(20,1,temp_value);
        },
        changeLAM: async function(event){
            const temp =[];
            temp.push(19);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(19,1,temp_value);
        },
        changeCAM: async function(event){
            const temp =[];
            temp.push(18);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(18,1,temp_value);
        },
        changeRAM: async function(event){
            const temp =[];
            temp.push(17);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(17,1,temp_value);
        },
        changeLM: async function(event){
            const temp =[];
            temp.push(16);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(16,1,temp_value);
        },
        changeLCM: async function(event){
            const temp =[];
            temp.push(15);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(15,1,temp_value);
        },
        changeCM: async function(event){
            const temp =[];
            temp.push(14);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(14,1,temp_value);
        },
        changeRCM: async function(event){
            const temp =[];
            temp.push(13);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(13,1,temp_value);
        },
        changeRM: async function(event){
            const temp =[];
            temp.push(12);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(12,1,temp_value);
        },
        changeLDM: async function(event){
            const temp =[];
            temp.push(11);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(11,1,temp_value);
        },
        changeCDM: async function(event){
            const temp =[];
            temp.push(10);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(10,1,temp_value);
        },
        changeRDM: async function(event){
            const temp =[];
            temp.push(9);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(9,1,temp_value);
        },
        changeLWB: async function(event){
            const temp =[];
            temp.push(8);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(8,1,temp_value);
        },
        changeLB: async function(event){
            const temp =[];
            temp.push(7);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(7,1,temp_value);
        },
        changeLCB: async function(event){
            const temp =[];
            temp.push(6);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(6,1,temp_value);
        },
        changeCB: async function(event){
            const temp =[];
            temp.push(5);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(5,1,temp_value);
        },
        changeRCB: async function(event){
            const temp =[];
            temp.push(4);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(4,1,temp_value);
        },
        changeRB: async function(event){
            const temp =[];
            temp.push(3);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(3,1,temp_value);
        },
        changeRWB: async function(event){
            const temp =[];
            temp.push(2);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3',{ spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName',{ spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(2,1,temp_value);
        }
    }
}
</script>

<style>
.cont_field{
    position: relative;
    width: 696px;
    height: 688px;
    margin:0 auto;
    margin-top: 5px;
    background: url('../assets/bg_filed02.jpg');
    z-index: 30;
    text-align: center;
}

.image_cont{
  width: 25px;
  height: 25px;
}


.back_image{
  width:30px;
  height: 30px;
  background-size: cover;
}


.name_font{
    color: white;
    font-size: 15px;
}

.field{
    position: absolute;
    top: 34px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    z-index: 20;
}
.ls{
    left: 147px;
    top:38px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rs{
    left: 411px;
    top: 38px;
    z-index:40;
    position: absolute;
    display: none;
}

.lm{
    left: 6px;
    top: 210px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cm{
    left: 283px;
    top: 283px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rm{
    left: 552px;
    top: 210px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cdm{
    left: 278px;
    top: 360px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lb{
    left: 6px;
    top: 459px;
    z-index:40;
    position: absolute;
    display: none;
}

.rb{
    left: 562px;
    top: 459px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rcb{
    left: 408px;
    top: 470px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lcb{
    left: 147px;
    top: 470px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lam{
    left: 147px;
    top: 200px;
    z-index: 40;
    position: absolute;
    display: none;
}

.ram{
    left: 411px;
    top: 200px;
    z-index: 40;
    position: absolute;    
    display: none;
}

.cam{
    left: 283px;
    top: 160px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lcm {
    left: 147px;
    top: 254px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rcm {
    left: 411px;
    top: 254px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cf {
    left: 277px;
    top: 147px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rw {
    left: 562px;
    top: 67px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lw {
    left: 6px;
    top: 67px;
    z-index: 40;
    position: absolute;
    display: none;
}

.ldm {
    left: 173px;
    top: 320px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rdm {
    left: 408px;
    top: 320px;
    z-index: 40;
    position: absolute;
    display: none;
}

.st {
    left: 278px;
    top: 38px;
    z-index: 40;
    position: absolute;
    display: none;
}

.cb {
    left: 281px;
    top: 500px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lf {
    left: 112px;
    top: 75px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rf {
    left: 441px;
    top: 79px;
    z-index: 40;
    position: absolute;
    display: none;
}

.lwb {
    left: 6px;
    top: 384px;
    z-index: 40;
    position: absolute;
    display: none;
}

.rwb {
    left: 562px;
    top: 384px;
    z-index: 40;
    position: absolute;
    display: none;
}
</style>