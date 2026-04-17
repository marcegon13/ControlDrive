.class public final synthetic Lcom/composeunstyled/SliderKt$$ExternalSyntheticLambda5;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lkotlin/jvm/functions/Function1;


# instance fields
.field public final synthetic f$0:Lcom/composeunstyled/SliderState;


# direct methods
.method public synthetic constructor <init>(Lcom/composeunstyled/SliderState;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/composeunstyled/SliderKt$$ExternalSyntheticLambda5;->f$0:Lcom/composeunstyled/SliderState;

    return-void
.end method


# virtual methods
.method public final invoke(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 1

    .line 0
    iget-object v0, p0, Lcom/composeunstyled/SliderKt$$ExternalSyntheticLambda5;->f$0:Lcom/composeunstyled/SliderState;

    check-cast p1, Ljava/lang/Float;

    invoke-virtual {p1}, Ljava/lang/Float;->floatValue()F

    move-result p1

    invoke-static {v0, p1}, Lcom/composeunstyled/SliderKt;->$r8$lambda$jO_IdSkeaMRobN3DYxyGHwLGXjo(Lcom/composeunstyled/SliderState;F)Lkotlin/Unit;

    move-result-object p1

    return-object p1
.end method
