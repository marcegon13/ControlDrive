.class public final Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;
.super Ljava/lang/Object;
.source "ObjectDefinitionBuilder.kt"

# interfaces
.implements Lkotlin/jvm/functions/Function2;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lexpo/modules/speech/SpeechModule;->definition()Lexpo/modules/kotlin/modules/ModuleDefinitionData;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lkotlin/jvm/functions/Function2<",
        "[",
        "Ljava/lang/Object;",
        "Lexpo/modules/kotlin/Promise;",
        "Lkotlin/Unit;",
        ">;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nObjectDefinitionBuilder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ObjectDefinitionBuilder.kt\nexpo/modules/kotlin/objects/ObjectDefinitionBuilder$AsyncFunction$5\n+ 2 SpeechModule.kt\nexpo/modules/speech/SpeechModule\n*L\n1#1,252:1\n48#2,8:253\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    k = 0x3
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic this$0:Lexpo/modules/speech/SpeechModule;


# direct methods
.method public constructor <init>(Lexpo/modules/speech/SpeechModule;)V
    .locals 0

    iput-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic invoke(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 252
    check-cast p1, [Ljava/lang/Object;

    check-cast p2, Lexpo/modules/kotlin/Promise;

    invoke-virtual {p0, p1, p2}, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;->invoke([Ljava/lang/Object;Lexpo/modules/kotlin/Promise;)V

    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    return-object p1
.end method

.method public final invoke([Ljava/lang/Object;Lexpo/modules/kotlin/Promise;)V
    .locals 1

    const-string v0, "<unused var>"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string p1, "promise"

    invoke-static {p2, p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 253
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {p1}, Lexpo/modules/speech/SpeechModule;->access$isTextToSpeechReady(Lexpo/modules/speech/SpeechModule;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 254
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {p1}, Lexpo/modules/speech/SpeechModule;->access$getVoices(Lexpo/modules/speech/SpeechModule;)Ljava/util/List;

    move-result-object p1

    check-cast p1, Ljava/util/Collection;

    invoke-interface {p2, p1}, Lexpo/modules/kotlin/Promise;->resolve(Ljava/util/Collection;)V

    return-void

    .line 256
    :cond_0
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {p1}, Lexpo/modules/speech/SpeechModule;->access$getDelayedGetVoices$p(Lexpo/modules/speech/SpeechModule;)Ljava/util/Queue;

    move-result-object p1

    invoke-interface {p1, p2}, Ljava/util/Queue;->add(Ljava/lang/Object;)Z

    .line 259
    iget-object p1, p0, Lexpo/modules/speech/SpeechModule$definition$lambda$6$$inlined$AsyncFunction$2;->this$0:Lexpo/modules/speech/SpeechModule;

    invoke-static {p1}, Lexpo/modules/speech/SpeechModule;->access$getTextToSpeech(Lexpo/modules/speech/SpeechModule;)Landroid/speech/tts/TextToSpeech;

    return-void
.end method
