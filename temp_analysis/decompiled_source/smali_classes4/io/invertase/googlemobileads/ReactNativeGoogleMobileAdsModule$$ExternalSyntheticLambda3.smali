.class public final synthetic Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule$$ExternalSyntheticLambda3;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lcom/google/android/gms/ads/initialization/OnInitializationCompleteListener;


# instance fields
.field public final synthetic f$0:Lcom/facebook/react/bridge/Promise;


# direct methods
.method public synthetic constructor <init>(Lcom/facebook/react/bridge/Promise;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule$$ExternalSyntheticLambda3;->f$0:Lcom/facebook/react/bridge/Promise;

    return-void
.end method


# virtual methods
.method public final onInitializationComplete(Lcom/google/android/gms/ads/initialization/InitializationStatus;)V
    .locals 1

    .line 0
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule$$ExternalSyntheticLambda3;->f$0:Lcom/facebook/react/bridge/Promise;

    invoke-static {v0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule;->$r8$lambda$ptJ2wcgMtnGf4mZWUrk6nDiIwc4(Lcom/facebook/react/bridge/Promise;Lcom/google/android/gms/ads/initialization/InitializationStatus;)V

    return-void
.end method
