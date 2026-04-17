.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;
.super Ljava/lang/Object;
.source "ReactNativeGoogleMobileAdsAdHelper.kt"


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nReactNativeGoogleMobileAdsAdHelper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactNativeGoogleMobileAdsAdHelper.kt\nio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,82:1\n1#2:83\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000H\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\u0008\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000b\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\u0018\u0000*\u0004\u0008\u0000\u0010\u00012\u00020\u0002B\u000f\u0012\u0006\u0010\u0003\u001a\u00028\u0000\u00a2\u0006\u0004\u0008\u0004\u0010\u0005J\u0018\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\n2\u0008\u0010\u000b\u001a\u0004\u0018\u00010\u000cJ\u000e\u0010\r\u001a\u00020\u00082\u0006\u0010\u000e\u001a\u00020\u000fJ\u000e\u0010\u0010\u001a\u00020\u00082\u0006\u0010\u0011\u001a\u00020\u0012J\u000e\u0010\u0013\u001a\u00020\u00082\u0006\u0010\u0014\u001a\u00020\u0015J\u000e\u0010\u0016\u001a\u00020\u00082\u0006\u0010\u0017\u001a\u00020\u0018R\u0010\u0010\u0003\u001a\u00028\u0000X\u0082\u0004\u00a2\u0006\u0004\n\u0002\u0010\u0006R\u0011\u0010\u0019\u001a\u00020\u001a8F\u00a2\u0006\u0006\u001a\u0004\u0008\u001b\u0010\u001c\u00a8\u0006\u001d"
    }
    d2 = {
        "Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;",
        "T",
        "",
        "ad",
        "<init>",
        "(Ljava/lang/Object;)V",
        "Ljava/lang/Object;",
        "show",
        "",
        "activity",
        "Landroid/app/Activity;",
        "onUserEarnedRewardListener",
        "Lcom/google/android/gms/ads/OnUserEarnedRewardListener;",
        "setFullScreenContentCallback",
        "fullScreenContentCallback",
        "Lcom/google/android/gms/ads/FullScreenContentCallback;",
        "setAppEventListener",
        "appEventListener",
        "Lcom/google/android/gms/ads/admanager/AppEventListener;",
        "setImmersiveMode",
        "enabled",
        "",
        "setServerSideVerificationOptions",
        "serverSideVerificationOptions",
        "Lcom/google/android/gms/ads/rewarded/ServerSideVerificationOptions;",
        "rewardItem",
        "Lcom/google/android/gms/ads/rewarded/RewardItem;",
        "getRewardItem",
        "()Lcom/google/android/gms/ads/rewarded/RewardItem;",
        "react-native-google-mobile-ads_release"
    }
    k = 0x1
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field private final ad:Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "TT;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;)V"
        }
    .end annotation

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public final getRewardItem()Lcom/google/android/gms/ads/rewarded/RewardItem;
    .locals 3

    .line 75
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    .line 76
    instance-of v1, v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    const-string v2, "getRewardItem(...)"

    if-eqz v1, :cond_0

    check-cast v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    invoke-virtual {v0}, Lcom/google/android/gms/ads/rewarded/RewardedAd;->getRewardItem()Lcom/google/android/gms/ads/rewarded/RewardItem;

    move-result-object v0

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    return-object v0

    .line 77
    :cond_0
    instance-of v1, v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    if-eqz v1, :cond_1

    check-cast v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    invoke-virtual {v0}, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;->getRewardItem()Lcom/google/android/gms/ads/rewarded/RewardItem;

    move-result-object v0

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    return-object v0

    .line 79
    :cond_1
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "Ad type not supported"

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public final setAppEventListener(Lcom/google/android/gms/ads/admanager/AppEventListener;)V
    .locals 2

    const-string v0, "appEventListener"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 52
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    instance-of v1, v0, Lcom/google/android/gms/ads/admanager/AdManagerInterstitialAd;

    if-eqz v1, :cond_0

    .line 53
    check-cast v0, Lcom/google/android/gms/ads/admanager/AdManagerInterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/admanager/AdManagerInterstitialAd;->setAppEventListener(Lcom/google/android/gms/ads/admanager/AppEventListener;)V

    :cond_0
    return-void
.end method

.method public final setFullScreenContentCallback(Lcom/google/android/gms/ads/FullScreenContentCallback;)V
    .locals 2

    const-string v0, "fullScreenContentCallback"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 43
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    .line 44
    instance-of v1, v0, Lcom/google/android/gms/ads/appopen/AppOpenAd;

    if-eqz v1, :cond_0

    check-cast v0, Lcom/google/android/gms/ads/appopen/AppOpenAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/appopen/AppOpenAd;->setFullScreenContentCallback(Lcom/google/android/gms/ads/FullScreenContentCallback;)V

    return-void

    .line 45
    :cond_0
    instance-of v1, v0, Lcom/google/android/gms/ads/interstitial/InterstitialAd;

    if-eqz v1, :cond_1

    check-cast v0, Lcom/google/android/gms/ads/interstitial/InterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/interstitial/InterstitialAd;->setFullScreenContentCallback(Lcom/google/android/gms/ads/FullScreenContentCallback;)V

    return-void

    .line 46
    :cond_1
    instance-of v1, v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    if-eqz v1, :cond_2

    check-cast v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/rewarded/RewardedAd;->setFullScreenContentCallback(Lcom/google/android/gms/ads/FullScreenContentCallback;)V

    return-void

    .line 47
    :cond_2
    instance-of v1, v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    if-eqz v1, :cond_3

    check-cast v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;->setFullScreenContentCallback(Lcom/google/android/gms/ads/FullScreenContentCallback;)V

    :cond_3
    return-void
.end method

.method public final setImmersiveMode(Z)V
    .locals 2

    .line 58
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    .line 59
    instance-of v1, v0, Lcom/google/android/gms/ads/appopen/AppOpenAd;

    if-eqz v1, :cond_0

    check-cast v0, Lcom/google/android/gms/ads/appopen/AppOpenAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/appopen/AppOpenAd;->setImmersiveMode(Z)V

    return-void

    .line 60
    :cond_0
    instance-of v1, v0, Lcom/google/android/gms/ads/interstitial/InterstitialAd;

    if-eqz v1, :cond_1

    check-cast v0, Lcom/google/android/gms/ads/interstitial/InterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/interstitial/InterstitialAd;->setImmersiveMode(Z)V

    return-void

    .line 61
    :cond_1
    instance-of v1, v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    if-eqz v1, :cond_2

    check-cast v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/rewarded/RewardedAd;->setImmersiveMode(Z)V

    return-void

    .line 62
    :cond_2
    instance-of v1, v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    if-eqz v1, :cond_3

    check-cast v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;->setImmersiveMode(Z)V

    :cond_3
    return-void
.end method

.method public final setServerSideVerificationOptions(Lcom/google/android/gms/ads/rewarded/ServerSideVerificationOptions;)V
    .locals 2

    const-string v0, "serverSideVerificationOptions"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 67
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    .line 68
    instance-of v1, v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    if-eqz v1, :cond_0

    check-cast v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/rewarded/RewardedAd;->setServerSideVerificationOptions(Lcom/google/android/gms/ads/rewarded/ServerSideVerificationOptions;)V

    return-void

    .line 69
    :cond_0
    instance-of v1, v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    if-eqz v1, :cond_1

    check-cast v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;->setServerSideVerificationOptions(Lcom/google/android/gms/ads/rewarded/ServerSideVerificationOptions;)V

    :cond_1
    return-void
.end method

.method public final show(Landroid/app/Activity;Lcom/google/android/gms/ads/OnUserEarnedRewardListener;)V
    .locals 2

    const-string v0, "activity"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 34
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsAdHelper;->ad:Ljava/lang/Object;

    .line 35
    instance-of v1, v0, Lcom/google/android/gms/ads/appopen/AppOpenAd;

    if-eqz v1, :cond_0

    check-cast v0, Lcom/google/android/gms/ads/appopen/AppOpenAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/appopen/AppOpenAd;->show(Landroid/app/Activity;)V

    return-void

    .line 36
    :cond_0
    instance-of v1, v0, Lcom/google/android/gms/ads/interstitial/InterstitialAd;

    if-eqz v1, :cond_1

    check-cast v0, Lcom/google/android/gms/ads/interstitial/InterstitialAd;

    invoke-virtual {v0, p1}, Lcom/google/android/gms/ads/interstitial/InterstitialAd;->show(Landroid/app/Activity;)V

    return-void

    .line 37
    :cond_1
    instance-of v1, v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    if-eqz v1, :cond_2

    if-eqz p2, :cond_3

    check-cast v0, Lcom/google/android/gms/ads/rewarded/RewardedAd;

    invoke-virtual {v0, p1, p2}, Lcom/google/android/gms/ads/rewarded/RewardedAd;->show(Landroid/app/Activity;Lcom/google/android/gms/ads/OnUserEarnedRewardListener;)V

    return-void

    .line 38
    :cond_2
    instance-of v1, v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    if-eqz v1, :cond_3

    if-eqz p2, :cond_3

    check-cast v0, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;

    invoke-virtual {v0, p1, p2}, Lcom/google/android/gms/ads/rewardedinterstitial/RewardedInterstitialAd;->show(Landroid/app/Activity;Lcom/google/android/gms/ads/OnUserEarnedRewardListener;)V

    :cond_3
    return-void
.end method
