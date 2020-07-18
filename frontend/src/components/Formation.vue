<template>
    <div v-if="this.data.length" class="cont_field">
        <div class="field">
            <div class="lw">
                <select class="form-control-sm" v-on:change="changePosition($event,27)">
                    <option>LW</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,26)">
                    <option>LS</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,25)">
                    <option>ST</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,24)">
                    <option>RS</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,23)">
                    <option>RW</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,22)">
                    <option>LF</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,21)">
                    <option>CF</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,20)">
                    <option>RF</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,19)">
                    <option>LAM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,18)">
                    <option>CAM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,17)">
                    <option>RAM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,16)">
                    <option>LM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,15)">
                    <option>LCM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,14)">
                    <option>CM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,13)">
                    <option>RCM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,12)">
                    <option>RM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,11)">
                    <option>LDM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,10)">
                    <option>CDM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,9)">
                    <option>RDM</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePostion($event,8)">
                    <option>LWB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,7)">
                    <option>LB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,6)">
                    <option>LCB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,5)">
                    <option>CB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,4)">
                    <option>RCB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,3)">
                    <option>RB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
                <select class="form-control-sm" v-on:change="changePosition($event,2)">
                    <option>RWB</option>
                    <option value="shoot">슛</option><option value="effectiveShoot">유효슛</option><option value="assist">도움</option><option value="goal">골</option>
                    <option value="passSuccess">패스성공률</option><option value="block">차단</option><option value="tackle">태클</option>
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
        changePosition: async function(event, num){
            const temp = [];
            temp.push(num);
            temp.push(event.target.value);
            const temp_value = await this.$store.dispatch('searchPositionTop3', { spidPosition: temp })
            for(let i=0;i<temp_value.length;i++){
                const name_temp = await this.$store.dispatch('findPlayerName', { spid: temp_value[i].spId })
                temp_value[i].name = name_temp[0].name;
            }
            this.position_value.splice(num,1,temp_value);
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
    top: 260px;
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
    top: 380px;
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
    top: 140px;
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
    top: 20px;
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