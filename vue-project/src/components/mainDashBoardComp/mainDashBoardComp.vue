<template>
    <section class="mainDashBoardComp">
        <div class="mainDashBoard-grid">
            <div class="mainDashBoard-grid-wrappers">
                <div class="mainDashBoard-grid-blocs">
                    <router-link to="/budget">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Cards
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-cards">
                        <span class="mainDashBoard__block-bottom-title">Balance</span>
                        <p class="mainDashBoard__block-bottom-price">N 22,000</p>
                        <span class="mainDashBoard__block-bottom-info">
                            <span class="mainDashBoard__block-bottom-vectors">
                                ****
                            </span>
                            <span class="mainDashBoard__block-bottom-vectors">
                                ****
                            </span>
                            <span class="mainDashBoard__block-bottom-vectors">
                                ****
                            </span>
                            
                            1234
                        </span>
                        
                        <div class="mainDashBoard__block-bottom-dataInfo">
                            <p class="mainDashBoard__block-dataInfo-text">Expires <span>12/22</span></p>
                            <img class="mainDashBoard__card-img" src="@/assets/images/CardImg.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="mainDashBoard-grid-blocs">
                    <router-link to="/budget">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Budget
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-budget">
                        <div class="mainDashBoard-grid-block-bottom-budget-titles">
                            <p>Cash</p>
                            <span>₦ 100,000</span>
                        </div>
                        <div class="mainDashBoard-block-budget">
                            <div class="mainDashBoard-block-budget-wrapp">
                                <div class="mainDashBoard-budget-svg">
                                    <img src="@/assets/images/CheckboxCheckedPng.png" alt="">
                                    <p class="mainDashBoard-block-budget-wrapp-text">Subscriptions <span>Automated</span></p>
                                </div>
                                
                                <span class="mainDashBoard-block-budget-price">₦22,000</span>
                            </div>
                            <div class="mainDashBoard-block-budget-wrapp">
                                <div class="mainDashBoard-budget-svg">
                                    <img src="@/assets/images/CheckboxCheckedPng.png" alt="">
                                    <p class="mainDashBoard-block-budget-wrapp-text">Loan Payment <span>Automated</span></p>
                                </div>
                                
                                <span class="mainDashBoard-block-budget-price">₦20,000</span>
                            </div>
                            <div class="mainDashBoard-block-budget-wrapp">
                                <div class="mainDashBoard-budget-svg">
                                    <img src="@/assets/images/CheckboxCheckedPng.png" alt="">
                                    <p class="mainDashBoard-block-budget-wrapp-text">Foodstuff <span>Automated</span></p>
                                </div>
                                
                                <span class="mainDashBoard-block-budget-price">₦10,000</span>
                            </div>
                            <div class="mainDashBoard-block-budget-wrapp">
                                <div class="mainDashBoard-budget-svg">
                                    <img src="@/assets/images/CheckboxDontChek.png" alt="">
                                    <p class="mainDashBoard-block-budget-wrapp-text-low">Savings <span></span></p>
                                </div>
                                
                                <span class="mainDashBoard-block-budget-price">₦2,000</span>
                            </div>
                            <div class="mainDashBoard-block-budget-wrapp">
                                <div class="mainDashBoard-budget-svg">
                                    <img src="@/assets/images/CheckboxDontChek.png" alt="">
                                    <p class="mainDashBoard-block-budget-wrapp-text-low">Fuel <span></span></p>
                                </div>
                                
                                <span class="mainDashBoard-block-budget-price">₦12,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="mainDashBoard-grid-wrappers">
                <div class="mainDashBoard-grid-blocs-transactions">
                    <router-link to="/transactions">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                All Transactions
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-transactions">
                        <div class="mainDashBoard-block-transactions-wrapper">
                            <div class="mainDashBoard-block-transactions-titles">
                                <img src="@/assets/images/ManOne.png" alt="">
                                <p>Gerald Argungu <span>21/12/21</span></p>
                            </div>
                            <span class="mainDashBoard-block-transactions-price">₦ 22,000</span>
                        </div>
                        <div class="mainDashBoard-block-transactions-wrapper">
                            <div class="mainDashBoard-block-transactions-titles">
                                <img src="@/assets/images/ManTwo.png" alt="">
                                <p>Tahav Vihikwagh <span>21/12/21</span></p>
                            </div>
                            <span class="mainDashBoard-block-transactions-price">₦ 34,000</span>
                        </div>
                        <div class="mainDashBoard-block-transactions-wrapper">
                            <div class="mainDashBoard-block-transactions-titles">
                                <img src="@/assets/images/ManThree.png" alt="">
                                <p>Frank Jones <span>21/12/21</span></p>
                            </div>
                            <span class="mainDashBoard-block-transactions-price-last">₦ 52,000</span>
                        </div>
                    </div>
                </div>
                <div class="mainDashBoard-grid-blocs">
                    <router-link to="/subscriptions">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Subscriptions
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-subsc">
                        <div class="mainDashBoard-block-bottom-subsc-wrapper">
                            <div class="mainDashBoard-block-child-subsc-wrapper">
                                <img class="mainDashBoard-block-bottom-subsc-img" src="@/assets/images/WarnPng.png" alt="">
                                
                                <p>
                                    LinkedIn
                                    <span>due 21/12/21</span>
                                </p>
                            </div>
                            
                            
                            <span>₦ 20,000</span>
                        </div>
                        <div class="mainDashBoard-block-bottom-subsc-wrapper">
                            <div class="mainDashBoard-block-child-subsc-wrapper">
                                <img class="mainDashBoard-block-bottom-subsc-img" src="@/assets/images/WarnPng.png" alt="">
                                
                                <p>
                                    Netflix
                                    <span>due 21/12/21</span>
                                </p>
                            </div>
                            
                            
                            <span>₦ 5,000</span>
                        </div>
                        <div class="mainDashBoard-block-bottom-subsc-wrapper">
                            <div class="mainDashBoard-block-child-subsc-wrapper">
                                <img class="mainDashBoard-block-bottom-subsc-img" src="@/assets/images/WarnPng.png" alt="">
                                
                                <p>
                                    DSTV
                                    <span>due 21/12/21</span>
                                </p>
                            </div>
                            
                            
                            <span>₦ 2,000</span>
                        </div>
                    </div>
                </div>
                <div class="mainDashBoard-grid-blocs">
                    <router-link to="/loans">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Loans
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-loans">
                        <div class="mainDashBoard-block-bottom-loans-img">
                            <div class="mainDashBoard-block-bottom-loans-img-block">
                                <img src="@/assets/images/LoansImg.png" alt="">
                                <p>Pay kid bro’s fees</p>
                            </div>
                            
                            <span>₦ 250,000</span>
                        </div>
                        <div class="mainDashBoard-block-bottom-loans-infoes">
                            <p>Date taken  21/12/21</p>
                            <p>Amount left ₦40,000</p>
                        </div>
                        <div class="mainDashBoard-block-bottom-loans-line">
                            <svg width="93" height="5" viewBox="0 0 93 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.87323 2.55874C0.87323 1.25039 1.93386 0.189758 3.24221 0.189758H90.4207C91.729 0.189758 92.7896 1.25039 92.7896 2.55874C92.7896 3.86709 91.729 4.92772 90.4207 4.92772H3.24221C1.93386 4.92772 0.87323 3.86709 0.87323 2.55874Z" fill="#FE6C00" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mainDashBoard-grid-wrappers">
                <div class="mainDashBoard-grid-blocs-report">
                    <router-link to="/reports">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Report
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-report">
                        <div class="mainDashBoard__report-right-texts">
                            <p>100</p>
                            <p>75</p>
                            <p>50</p>
                            <p>25</p>
                            <p>0</p>
                        </div>
                        <div class="mainDashBoard__report-bottom-blocks">
                            <div class="mainDashBoard__report-bottom-blocks-svgs">
                                <svg width="13" height="62" viewBox="0 0 13 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.811142" y="0.547462" width="11.3711" height="60.1721" rx="3.79037" fill="#473B33" />
                                    <rect x="0.810974" y="32.2918" width="11.3711" height="28.9016" rx="3.79037" fill="#FE6C00" />
                                </svg>
                                <p>Jan</p>
                            </div>
                            <div class="mainDashBoard__report-bottom-blocks-svgs">
                                <svg width="12" height="62" viewBox="0 0 12 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.186508" y="0.547462" width="11.3711" height="60.1721" rx="3.79037" fill="#473B33" />
                                    <rect x="0.186371" y="15.7089" width="11.3711" height="45.0106" rx="3.79037" fill="#FFC397" />
                                    <rect x="0.186371" y="25.1849" width="11.3711" height="36.0085" rx="3.79037" fill="#FE6C00" />
                                </svg>
                                <p>Feb</p>
                            </div>
                            <div class="mainDashBoard__report-bottom-blocks-svgs">
                                <svg width="13" height="62" viewBox="0 0 13 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.906189" y="0.547462" width="11.3711" height="60.1721" rx="3.79037" fill="#473B33" />
                                    <rect x="0.67662" y="29.9228" width="11.3711" height="31.2705" rx="3.79037" fill="#FE6C00" />
                                </svg>
                                <p>Mar</p>
                            </div>
                            <div class="mainDashBoard__report-bottom-blocks-svgs">
                                <svg width="12" height="62" viewBox="0 0 12 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.396576" y="0.547462" width="11.3711" height="60.1721" rx="3.79037" fill="#473B33" />
                                    <rect x="0.396362" y="29.9228" width="11.3711" height="31.2705" rx="3.79037" fill="#FE6C00" />
                                </svg>
                                <p>Apr</p>
                            </div>
                            <div class="mainDashBoard__report-bottom-blocks-svgs">
                                <svg width="12" height="62" viewBox="0 0 12 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.28772" y="0.547478" width="11.3711" height="60.1721" rx="3.79037" fill="#473B33" />
                                    <rect x="0.287323" y="29.9229" width="11.3711" height="31.2705" rx="3.79037" fill="#FE6C00" />
                                </svg>
                                <p>May</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mainDashBoard-grid-blocs-savings">
                    <router-link to="/savings">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Savings
                            </p>
                            <img class="mainDashBoard-grid-block-titles-svg" src="@/assets/images/PlusSvg.svg" alt="">
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-savings">
                        <div class="mainDashBoard-block-bottom-savings-svgs">
                            <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.0583 31.44C63.0583 48.7756 49.005 62.8289 31.6693 62.8289C14.3337 62.8289 0.280334 48.7756 0.280334 31.44C0.280334 14.1043 14.3337 0.0509796 31.6693 0.0509796C49.005 0.0509796 63.0583 14.1043 63.0583 31.44ZM10.7558 31.44C10.7558 42.9902 20.1191 52.3535 31.6693 52.3535C43.2195 52.3535 52.5828 42.9902 52.5828 31.44C52.5828 19.8897 43.2195 10.5264 31.6693 10.5264C20.1191 10.5264 10.7558 19.8897 10.7558 31.44Z" fill="#473B33" />
                            </svg>
                            <div class="block-bottom-savings-svg-wrapp">
                                <svg width="33" height="63" viewBox="0 0 33 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.669319 5.28871C0.669319 2.39599 3.03028 0.00650755 5.88282 0.48697C8.20989 0.878927 10.4909 1.53299 12.6814 2.44033C16.4897 4.01777 19.95 6.32987 22.8647 9.24461C25.7794 12.1593 28.0915 15.6196 29.669 19.4279C31.2464 23.2362 32.0583 27.3179 32.0583 31.44C32.0583 35.562 31.2464 39.6437 29.669 43.452C28.0915 47.2603 25.7794 50.7206 22.8647 53.6353C19.9499 56.5501 16.4896 58.8622 12.6813 60.4396C10.4908 61.347 8.20987 62.001 5.88279 62.393C3.03025 62.8734 0.669296 60.4839 0.669298 57.5912C0.6693 54.6985 3.05001 52.4179 5.85248 51.701C6.81147 51.4557 7.75396 51.142 8.67256 50.7615C11.2099 49.7105 13.5154 48.1701 15.4574 46.2281C17.3994 44.2861 18.9399 41.9806 19.9909 39.4432C21.0419 36.9059 21.5828 34.1864 21.5828 31.44C21.5828 28.6936 21.0419 25.9741 19.9909 23.4367C18.9399 20.8994 17.3994 18.5939 15.4574 16.6519C13.5154 14.7099 11.2099 13.1694 8.67258 12.1184C7.75397 11.7379 6.81149 11.4242 5.85249 11.1789C3.05002 10.462 0.669319 8.18143 0.669319 5.28871Z" fill="#FE6C00" />
                                </svg>
                            </div>
                            
                            <p>50%</p>
                        </div>
                        <div class="mainDashBoard-block-bottom-savings-texts">
                            <div>
                                <p class="mainDashBoard-savings-p">Savings Target</p>
                                <span class="mainDashBoard-savings-span">N 500,000</span>
                            </div>
                            
                            <div>
                                <p class="mainDashBoard-savings-p">Target Reached</p>
                                <span class="mainDashBoard-savings-span">N 250,000</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div class="mainDashBoard-grid-blocs-advice">
                    <router-link to="/advice">
                        <div class="mainDashBoard-grid-block-titles">
                            <p class="mainDashBoard-grid-block-title g-texts-mainSection">
                                Financial Advice
                            </p>
                            
                        </div>
                    </router-link>
                    
                    <div class="mainDashBoard-grid-block-bottom-advice">
                        <span class="mainDashBoard-block-bottom-advice-text">
                            Try dey enjoy life. Problem no dey finish. For this life lol.... 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use '@/components/mainDashBoardComp/mainDashBoardComp.scss';

</style>